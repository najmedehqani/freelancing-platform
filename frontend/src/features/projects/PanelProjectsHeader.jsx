import useCategories from "../../hooks/useCategories";
import Filter from "../../ui/Filter";
import FilterDropDown from "../../ui/FilterDropDown";
import {
  getCategoryOptions,
  sortOptions,
  statusOptions,
} from "../../utils/filterOptions";

function PanelProjectsHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex flex-col gap-y-4 xl:flex-row items-center xl:justify-between text-secondary-700 mb-8">
      <h1 className="text-lg sm:text-xl font-bold">لیست پروژه‌ها</h1>
      <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4 items-center">
        <Filter
          filterField="status"
          options={statusOptions}
          filterLabel="وضعیت"
        />
        <FilterDropDown
          placeholder="مرتب سازی پروژه ها"
          filterField="sort"
          options={sortOptions}
        />
        <FilterDropDown
          placeholder="دسته بندی پروژه ها"
          filterField="category"
          options={getCategoryOptions(transformedCategories)}
        />
      </div>
    </div>
  );
}
export default PanelProjectsHeader;
