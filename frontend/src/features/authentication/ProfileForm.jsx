import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../ui/Loading";
import { updateProfileApi } from "../../services/authService";
const schema = yup
  .object({
    name: yup
      .string()
      .required("نام و نام خانوادگی الزامی است.")
      .min(5, "حداقل 5 حروف را وارد کنید.")
      .max(30, "حداکثر 30 حروف را وارد کنید."),
    email: yup
      .string()
      .required("ایمیل الزامی است.")
      .email("ایمیل نامعتبر است."),
    phoneNumber: yup
      .string()
      .required("شماره موبایل ضروری است.")
      .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست."),
  })
  .required();
const roleRoutes = {
  ADMIN: "/admin/dashboard",
  OWNER: "/owner/dashboard",
  FREELANCER: "/freelancer/dashboard",
};
function ProfileForm({ user }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {},
  });
  useEffect(() => {
    if (user)
      reset({
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
  }, [user]);

  const onSubmit = async (values) => {
    try {
      const { message } = await updateProfileApi(values);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success(message);
      navigate(roleRoutes[user?.role] ?? "/");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "خطایی در آپدیت پروفایل رخ داد.",
      );
    }
  };
  return (
    <div className="w-full max-w-md">
      <div className=" p-4 sm:p-5 md:p-7 rounded-xl overflow-hidden shadow-sm bg-secondary-0 ">
        <h1 className="font-bold text-xl text-secondary-700 mb-7 ">
          اطلاعات حساب کاربری
        </h1>
        <form
          className="flex flex-col space-y-7"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            isRequired
            errors={errors}
            disabled={isSubmitting}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            dir="ltr"
            isRequired
            errors={errors}
            disabled={isSubmitting}
          />
          <TextField
            label="شماره موبایل"
            name="phoneNumber"
            isRequired
            register={register}
            dir="ltr"
            errors={errors}
            disabled={isSubmitting}
          />
          <Button
            variant="primary"
            type="submit"
            className="w-full"
            disabled={isSubmitting || !isDirty}
          >
            {isSubmitting ? <Loading width="50" height="25" /> : "تایید"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
