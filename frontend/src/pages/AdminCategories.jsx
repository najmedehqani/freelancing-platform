import CategoriesTable from "../features/categories/CategoriesTable";
import PanelCategoriesHeader from "../features/categories/PanelCategoriesHeader";
function AdminCategories() {
  return (
    <div>
      <PanelCategoriesHeader />
      <CategoriesTable/>
    </div>
  );
}

export default AdminCategories;
