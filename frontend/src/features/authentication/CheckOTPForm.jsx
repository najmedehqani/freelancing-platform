import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";
import Logo from "../../ui/Logo";
import ButtonIcon from "../../ui/ButtonIcon";
import Button from "../../ui/Button";
import { HiArrowRight, HiPencilAlt } from "react-icons/hi";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

const RESEND_TIME = 90;
const ROLE_ROUTES = {
  OWNER: "/owner",
  FREELANCER: "/freelancer",
  ADMIN: "/admin",
};
const USER_STATUS = { PENDING: 1, APPROVED: 2, REJECTED: 0 };

function CheckOTPForm({
  phoneNumber,
  onBack,
  onReSendOtp,
  otpResponse,
  isSendingOtp,
}) {
  const queryClient = useQueryClient();
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      if (!user.isActive) {
        toast.success(message);
        return navigate("/complete-profile");
      }

      if (Number(user.status) === USER_STATUS.REJECTED) {
        navigate("/");
        toast.error("پروفایل شما رد شده است");
        return;
      }
      if (Number(user.status) === USER_STATUS.PENDING) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "⏳" });
        return;
      }
      if (Number(user.status) !== USER_STATUS.APPROVED) {
        navigate("/");
        toast.error("وضعیت حساب نامشخص است.");
        return;
      }
      toast.success(message);
      const targetRoute = ROLE_ROUTES[user.role];
      if (targetRoute) {
        navigate(targetRoute);
      } else {
        toast.error("نقش کاربری شناسایی نشد.");
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "خطایی رخ داده است.");
    }
  };
  useEffect(() => {
    setTime(RESEND_TIME);
    setOtp("");
  }, [otpResponse]);

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="p-4 sm:p-5 md:p-8 border-0 md:border md:border-secondary-200 rounded-xl md:shadow-lg md:shadow-gray-200/50 dark:md:shadow-[0_4px_20px_rgba(0,0,0,.5),0_0_0_1px_rgba(255,255,255,.04)] ">
      <div className="flex justify-between items-center mb-8">
        <ButtonIcon
          variant="outline"
          className="p-2"
          onClick={onBack}
          aria-label="بازگشت"
        >
          <HiArrowRight />
        </ButtonIcon>
        <Logo />
      </div>

      <p className="font-bold text-2xl text-secondary-700 mb-5">
        کد تائید را وارد کنید
      </p>
      {otpResponse && (
        <p className="text-secondary-500 text-sm mb-3">
          {otpResponse?.message}
        </p>
      )}
      <button
        onClick={onBack}
        className="text-primary-500 hover:text-primary-700 font-medium text-sm flex gap-1 items-center mb-8 transition-colors duration-300 ease-out"
      >
        <HiPencilAlt className="w-4 h-4" />
        <span>ویرایش شماره موبایل</span>
        <span className="font-semibold tracking-wide" dir="ltr">
          ({phoneNumber})
        </span>
      </button>

      <form className="space-y-8" onSubmit={checkOtpHandler}>
        <OTPInput
          value={otp}
          onChange={(value) => setOtp(value.replace(/[^0-9]/g, ""))}
          numInputs={6}
          renderInput={(props) => (
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="one-time-code"
              {...props}
            />
          )}
          containerStyle="flex flex-row-reverse gap-x-2 sm:gap-x-3.5 justify-center "
          shouldAutoFocus={true}
          inputStyle="!w-9 sm:!w-12 h-10 sm:h-14 p-2 text-center bg-transparent border 
          border-secondary-300 rounded-xl focus:outline-none focus:border-primary-400 text-lg
           font-bold text-secondary-700 "
        />
        <div className="text-secondary-500 text-sm flex items-center justify-center min-h-[32px]">
          {time > 0 ? (
            <p>
              <span className=" font-bold text-secondary-700 bg-secondary-200 px-1.5 py-0.5 rounded-md ml-1">
                {toPersianNumbers(time)}
              </span>
              ثانیه تا ارسال مجدد کد
            </p>
          ) : (
            <button
              disabled={isSendingOtp}
              onClick={onReSendOtp}
              type="button"
              className="text-primary-500 hover:text-primary-700 font-bold transition-all duration-300 ease-out"
            >
              ارسال مجدد کد تایید
            </button>
          )}
        </div>
        <Button
          variant="primary"
          type="submit"
          className="w-full"
          disabled={isPending || otp.length < 6}
        >
          {isPending ? <Loading width="50" height="25" /> : "تایید"}
        </Button>
      </form>
    </div>
  );
}
export default CheckOTPForm;
