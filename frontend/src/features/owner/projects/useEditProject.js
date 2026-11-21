import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { editProjectApi } from "../../../services/projectService";

export default function useEditProject() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
      toast.success(data?.message || "پروژه با موفقیت ویرایش شد.");

      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },

    onError: (err) =>
      toast.error(
        err?.response?.data?.message || "خطایی در ویرایش پروژه رخ داده است",
      ),
  });

  return { isEditing, editProject };
}
