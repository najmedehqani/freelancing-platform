import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createCategoryApi } from "../../services/categoryService";

export default function useCreateCategory() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createCategory } = useMutation({
    mutationFn: createCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: (err) =>
      toast.error(
        err?.response?.data?.message || "خطایی در ثبت دسته بندی رخ داده است",
      ),
  });

  return { isCreating, createCategory };
}
