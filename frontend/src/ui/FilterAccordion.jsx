import { useNavigate, useSearchParams } from "react-router-dom";
import Accordion from "../ui/Accordion";
import RadioButtonInput from "../ui/RadioButtonInput";
function FilterAccordion({
  filterField,
  title,
  icon: Icon,
  options = [],
  defaultValue,
}) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());
  const currentChecked = params.get(filterField) ?? defaultValue;

  const handleChange = (value) => {
    params.set(filterField, value);
    navigate(`?${params.toString()}`);
  };
  return (
    <Accordion
      wrapperClass="w-full bg-secondary-50 p-1 mb-5 rounded-2xl"
      buttonClass="flex items-center justify-between w-full px-4 "
      title={
        <div className="text-secondary-700 flex items-center gap-x-3 py-3">
          <Icon className="w-5 h-5" />
          <span className="font-bold ">{title}</span>
        </div>
      }
      iconClass="text-secondary-700 w-5 h-5"
      pannelClass="px-4 pt-2 pb-4"
      showDivider
    >
      <div className="flex flex-col gap-y-3">
        {options.map(({ value, label }) => (
          <RadioButtonInput
            key={value}
            checked={currentChecked === value}
            value={value}
            onChange={() => handleChange(value)}
            label={label}
            id={`${filterField}-${value}`}
            name={filterField}
          />
        ))}
      </div>
    </Accordion>
  );
}

export default FilterAccordion;
// LockClosedIcon
