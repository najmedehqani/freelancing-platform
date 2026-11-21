import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    phoneNumber: yup
      .string()
      .required("شماره موبایل ضروری است.")
      .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست."),
  })
  .required();

function AuthContainer() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { user } = useUser();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطایی رخ داده است.");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onReSendOtp={handleSubmit(sendOtpHandler)}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            otpResponse={otpResponse}
            isSendingOtp={isSendingOtp}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full md:max-w-md">{renderStep()}</div>;
}
export default AuthContainer;
