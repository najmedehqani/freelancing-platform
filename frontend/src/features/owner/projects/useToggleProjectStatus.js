import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { toggleProjectStatusApi } from "../../../services/projectService";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: toggleProjectStatus } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message || "وضعیت پروژه با موفقیت تغییر کرد.");

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },

    onError: (err) =>
      toast.error(
        err?.response?.data?.message ||
          "خطایی در تغییر وضعیت پروژه رخ داده است",
      ),
  });

  return { isUpdating, toggleProjectStatus };
}
