import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({ options, filterField, placeholder }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || "";

  function handleChange(value) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set(filterField, value);
      return next;
    });
  }

  return (
    <div className="w-full sm:w-40">
      <Select
        onChange={handleChange}
        value={filterValue}
        options={options}
        placeholder={placeholder}
        buttonClassName="py-2 px-3 bg-secondary-0 font-medium text-xs"
        optionsClassName="text-xs"
      />
    </div>
  );
}
export default FilterDropDown;
