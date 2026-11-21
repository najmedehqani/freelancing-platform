import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeProposalStatusApi } from "../../../services/proposalService";

export default function useChangeProposalStatus() {
  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message || "وضعیت با موفقیت تغییر کرد.");
    },
    onError: (err) =>
      toast.error(
        err?.response?.data?.message ||
          "خطایی در تغییر وضعیت پروپوزال رخ داده است",
      ),
  });

  return { isUpdating, changeProposalStatus };
}
