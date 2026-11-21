import Loading from "../../ui/Loading";
import Logo from "../../ui/Logo";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRight } from "react-icons/hi";
import Button from "../../ui/Button";
import TextField from "../../ui/TextField";
import useMoveBack from "../../hooks/useMoveBack";

function SendOTPForm({ onSubmit, isSendingOtp, register, errors }) {
  const onBack = useMoveBack();
  return (
    <div className="p-4 sm:p-5 md:p-8 border-0 md:border md:border-secondary-200 rounded-xl md:shadow-lg md:shadow-gray-200/50 dark:md:shadow-[0_4px_20px_rgba(0,0,0,.5),0_0_0_1px_rgba(255,255,255,.04)]">
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
        ورود یا ثبت نام
      </p>
      <p className="text-secondary-500 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
        لطفا برای ورود شماره همراه خود را وارد کنید.
      </p>

      <form className="space-y-[52px]" onSubmit={onSubmit}>
        <div className="relative">
          <TextField
            name="phoneNumber"
            register={register}
            placeholder="0912 345 6789"
            dir="ltr"
            errors={errors}
            disabled={isSendingOtp}
          />
          {!errors.phoneNumber && (
            <p className="absolute right-0 -bottom-7 text-xs sm:text-sm text-secondary-500 leading-relaxed">
              کد تایید به شماره‌ای که وارد می‌کنید ارسال می‌شود.
            </p>
          )}
        </div>
        <Button
          variant="primary"
          type="submit"
          className="w-full"
          disabled={isSendingOtp}
        >
          {isSendingOtp ? <Loading width="50" height="25" /> : "ادامه"}
        </Button>
      </form>
    </div>
  );
}
export default SendOTPForm;
