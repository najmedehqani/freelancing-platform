import TextField from "../../ui/TextField";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import { toast } from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../ui/Button";
import Logo from "../../ui/Logo";
import useUser from "./useUser";
import { useEffect } from "react";

const schema = yup
  .object({
    name: yup
      .string()
      .required("نام و نام خانوادگی الزامی است.")
      .min(5, "حداقل 5 حروف را وارد کنید.")
      .max(30, "حداکثر 30 حروف را وارد کنید."),
    email: yup
      .string()
      .email("ایمیل نامعتبر است.")
      .required("ایمیل الزامی است."),
    role: yup.string().required("انتخاب نقش ضروری است."),
  })
  .required();

const ROLE_OPTIONS = [
  { value: "OWNER", label: "کارفرما هستم" },
  { value: "FREELANCER", label: "فریلنسر هستم" },
];
const ROLE_ROUTES = {
  OWNER: "/owner",
  FREELANCER: "/freelancer",
};
const USER_STATUS = { PENDING: 1, APPROVED: 2, REJECTED: 0 };

function CompleteProfileForm() {
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const navigate = useNavigate();

  const { user } = useUser();

  useEffect(() => {
    if (user?.isActive) navigate("/", { replace: true });
  }, [user, navigate]);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success(message);
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

  return (
    <div className="w-full md:max-w-md">
      <div className=" p-4 sm:p-5 md:p-8 border-0 md:border md:border-secondary-200 rounded-xl md:shadow-lg md:shadow-gray-200/50 dark:md:shadow-[0_4px_20px_rgba(0,0,0,.5),0_0_0_1px_rgba(255,255,255,.04)]">
        <div className="flex justify-center items-center mb-8">
          <Logo />
        </div>
        <h1 className="font-bold text-2xl text-secondary-700 mb-7">
          تکمیل اطلاعات کاربری
        </h1>
        <form className="space-y-9" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            errors={errors}
            disabled={isPending}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            errors={errors}
            dir="ltr"
            disabled={isPending}
            type="email"
          />
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              options: ROLE_OPTIONS,
            }}
            disabled={isPending}
          />
          <Button
            variant="primary"
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? <Loading width="50" height="25" /> : "تایید"}
          </Button>
        </form>
      </div>
    </div>
  );
}
export default CompleteProfileForm;
