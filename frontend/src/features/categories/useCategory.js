import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCategoryApi } from "../../services/categoryService";

export default function useCategory() {
  const { categoryId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["category", categoryId],
    queryFn: () => getCategoryApi(categoryId),
    retry: false,
  });

  const { category } = data || {};

  return { isLoading, category, isError };
}
