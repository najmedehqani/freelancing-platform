import useCategories from "../../hooks/useCategories";
import CategoryRow from "./CategoryRow";
import Table from "../../ui/Table";
import EmptyState from "../../ui/EmptyState";
import CategoriesTableSkeleton from "./CategoriesTableSkeleton";

export default function CategoriesTable() {
  const { isLoading, rawCategories , isError } = useCategories();
console.log(rawCategories);
  if (isLoading) return <CategoriesTableSkeleton/>;
  if (isError) return <EmptyState description="خطایی در بارگذاری دسته بندی ها رخ داده است." />;
  if (!rawCategories?.length)
    return <EmptyState description="هنوز دسته بندی ای ثبت نشده است." />;

  return (
    <Table>
      <Table.Header>
       <th>#</th>
        <th>عنوان</th>
        <th>عنوان انگلیسی</th>
        <th>توضیحات</th>
        <th>خدمات قابل ارائه</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {rawCategories.map((category, index) => (
          <CategoryRow key={category._id} category={category} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
