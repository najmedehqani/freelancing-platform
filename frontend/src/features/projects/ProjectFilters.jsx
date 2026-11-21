import useCategories from "../../hooks/useCategories";
import FilterAccordion from "../../ui/FilterAccordion";
import {
  ArrowsUpDownIcon,
  LockClosedIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import {
  getCategoryOptions,
  sortOptions,
  statusOptions,
} from "../../utils/filterOptions";

function ProjectFilters() {
  const { transformedCategories } = useCategories();
  return (
    <>
      <FilterAccordion
        filterField="category"
        icon={Squares2X2Icon}
        title="دسته بندی"
        options={getCategoryOptions(transformedCategories)}
        defaultValue="ALL"
      />
      <FilterAccordion
        filterField="sort"
        icon={ArrowsUpDownIcon}
        title="مرتب سازی"
        options={sortOptions}
        defaultValue="earliest"
      />
      <FilterAccordion
        filterField="status"
        icon={LockClosedIcon}
        title="وضعیت پروژه"
        options={statusOptions}
        defaultValue="ALL"
      />
    </>
  );
}

export default ProjectFilters;
