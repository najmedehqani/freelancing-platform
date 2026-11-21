import CreateCategoryForm from "../features/categories/CreateCategoryForm";
import CreateCategoryFormSkeleton from "../features/categories/CreateCategoryFormSkeleton";
import useCategory from "../features/categories/useCategory";
import Breadcrumbs from "../ui/BreadCrumbs";
import EmptyState from "../ui/EmptyState";

function AdminEditCategory() {
  const { category = {}, isLoading, isError } = useCategory();
  if (isLoading) {
    return (
      <div>
        <Breadcrumbs
          breadcrumbs={[
            { label: "دسته بندی ها", href: "/admin/categories" },
            { label: "ویرایش دسته بندی", href: "#", active: true },
          ]}
        />
        <CreateCategoryFormSkeleton />
      </div>
    );
  }
  if (isError || !category?._id)
    return <EmptyState description="مشکلی در بارگذاری دسته بندی پیش آمد." />;
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "دسته بندی ها",
            href: "/admin/categories",
          },
          {
            label: "ویرایش دسته بندی",
            href: `/admin/categories/${category._id}/edit`,
            active: true,
          },
        ]}
      />
      <CreateCategoryForm categoryToEdit={category} />
    </div>
  );
}

export default AdminEditCategory;
