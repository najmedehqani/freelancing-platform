import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { editCategoryApi } from "../../services/categoryService";

export default function useEditCategory() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editCategory } = useMutation({
    mutationFn: editCategoryApi,
    onSuccess: (data, variables) => {
  toast.success(data.message);

  queryClient.invalidateQueries({
    queryKey: ["categories"],
  });

  queryClient.invalidateQueries({
    queryKey: ["category", variables.id],
  });
},

    onError: (err) =>
      toast.error(
        err?.response?.data?.message || "خطایی در ویرایش دسته بندی رخ داده است",
      ),
  });

  return { isEditing, editCategory };
}
