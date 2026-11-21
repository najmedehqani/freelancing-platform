import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createProposalApi } from "../../services/proposalService";

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProposal } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data, variables) => {
      toast.success(data?.message || "درخواست با موفقیت ثبت شد.");
      queryClient.invalidateQueries({ queryKey: ["proposals"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({
        queryKey: ["project", variables.projectId],
      });
    },
    onError: (err) =>
      toast.error(
        err?.response?.data?.message || "خطایی در ثبت درخواست رخ داده است",
      ),
  });

  return { isCreating, createProposal };
}
