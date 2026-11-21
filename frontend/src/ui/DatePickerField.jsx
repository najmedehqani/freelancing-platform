import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
function DatePickerField({
  label,
  value,
  onChange,
  isRequired,
  name,
  errors,
  onBlur,
  disabled,
}) {
  const errorMessages = errors?.[name];
  const hasError = !!errorMessages;
  return (
    <div className="relative">
      <span className="mb-2 block text-secondary-700">
        {label} {isRequired && <span className="text-error">*</span>}
      </span>
      <DatePicker
        containerClassName="w-full"
        inputClass={`textField__input ${hasError ? "border-red-500 focus:border-red-500" : ""}`}
        calendarPosition="bottom-center"
        value={value}
        onChange={onChange}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        className="green"
        name={name}
        onClose={onBlur}
        disabled={disabled}
        minDate={new Date()}
      />
      {hasError && (
        <span className="text-red-600 absolute right-0 -bottom-5 text-xs">
          {errorMessages?.message}
        </span>
      )}
    </div>
  );
}
export default DatePickerField;
