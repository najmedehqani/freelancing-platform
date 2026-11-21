import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeUserStatusApi } from "../../../services/authService";

export default function useChangeUserStatus() {
  const { isPending: isUpdating, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message || "وضعیت با موفقیت تغییر کرد.");
    },
    onError: (err) =>
      toast.error(
        err?.response?.data?.message ||
          "خطایی در تغییر وضعیت کاربر رخ داده است",
      ),
  });

  return { isUpdating, changeUserStatus };
}
