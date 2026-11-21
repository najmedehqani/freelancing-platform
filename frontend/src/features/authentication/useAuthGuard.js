import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useUser from "./useUser";

export default function useAuthGuard() {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();
  function checkAccess({ requiredRole } = {}) {
    if (isLoading) return false;
    if (!user) {
      toast.error("لطفاً ابتدا وارد حساب کاربری خود شوید");
      navigate("/auth");
      return false;
    }
    if (!user.isActive) {
      toast.error("لطفاً ابتدا پروفایل خود را تکمیل کنید");
      navigate("/complete-profile");
      return false;
    }
    if (Number(user.status) === 1) {
      toast("پروفایل شما در انتظار تایید است", { icon: "⏳" });
      return false;
    }
    if (Number(user.status) === 0) {
      toast.error("پروفایل شما رد شده است.");
      return false;
    }
    if (Number(user.status) !== 2) {
      toast.error("پروفایل شما در وضعیت نامعتبری قرار دارد");
      return false;
    }
    if (requiredRole && user.role !== requiredRole) {
      toast.error("شما به این بخش دسترسی ندارید");
      return false;
    }

    return true;
  }

  return { checkAccess, isLoading };
}
