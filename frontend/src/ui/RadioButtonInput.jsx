function RadioButtonInput({ label, id, value, onChange, checked, name }) {
  return (
    <div className="flex items-center gap-x-3 text-secondary-500">
      <input
        type="radio"
        id={id}
        value={value}
        onChange={onChange}
        className="cursor-pointer form-radio border-none bg-secondary-200 w-5 h-5 text-primary-600 focus:ring-primary-600 focus:ring-1"
        checked={checked}
        name={name}
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
}

export default RadioButtonInput;
