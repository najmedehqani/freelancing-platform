import {
  ArrowsUpDownIcon,
  AdjustmentsHorizontalIcon,
  LockClosedIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import useCategories from "../../hooks/useCategories";
import FilterAccordion from "../../ui/FilterAccordion";
import BottomSheet from "../../ui/BottomSheet";
import Button from "../../ui/Button";
import {
  getCategoryOptions,
  sortOptions,
  statusOptions,
} from "../../utils/filterOptions";

function ProjectFilterButtons() {
  const { transformedCategories } = useCategories();
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  return (
    <div className="flex gap-x-4 lg:hidden">
      <Button
        variant="outline"
        className="flex-1 flex items-center gap-x-2 justify-center rounded-2xl "
        onClick={() => setIsOpenSort(!isOpenSort)}
      >
        <span className="font-bold">مرتب سازی</span>
        <ArrowsUpDownIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <Button
        variant="outline"
        className="flex-1 flex items-center gap-x-2 justify-center rounded-2xl "
        onClick={() => setIsOpenFilters(!isOpenFilters)}
      >
        <span className="font-bold">فیلتر </span>
        <AdjustmentsHorizontalIcon className="w-5 h-5" aria-hidden="true" />
      </Button>
      <BottomSheet
        open={isOpenFilters}
        onClose={() => setIsOpenFilters(false)}
        title="فیلتر پروژه ها"
      >
        <div className="flex flex-col gap-1 w-full">
          <FilterAccordion
            filterField="category"
            icon={Squares2X2Icon}
            title="دسته بندی"
            options={getCategoryOptions(transformedCategories)}
            defaultValue="ALL"
          />
          <FilterAccordion
            filterField="status"
            icon={LockClosedIcon}
            title="وضعیت پروژه"
            options={statusOptions}
            defaultValue="ALL"
          />
        </div>
      </BottomSheet>
      <BottomSheet
        open={isOpenSort}
        onClose={() => setIsOpenSort(false)}
        title="مرتب سازی"
      >
        <FilterAccordion
          filterField="sort"
          icon={ArrowsUpDownIcon}
          title="مرتب سازی"
          options={sortOptions}
          defaultValue="earliest"
        />
      </BottomSheet>
    </div>
  );
}

export default ProjectFilterButtons;
