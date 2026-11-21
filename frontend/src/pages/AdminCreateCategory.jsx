import CreateCategoryForm from "../features/categories/CreateCategoryForm"
import Breadcrumbs from "../ui/BreadCrumbs"

function AdminCreateCategory() {
  return (
    <div>
        <Breadcrumbs
        breadcrumbs={[
          {
            label: "دسته بندی ها",
            href: "/admin/categories",
          },
          {
            label: "ایجاد دسته بندی",
            href: "/admin/categories/create",
            active: true,
          },
        ]}
      />
      <CreateCategoryForm/>
    </div>
  )
}

export default AdminCreateCategory