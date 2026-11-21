function TextArea({
  label,
  name,
  dir = "rtl",
  register,
  validationSchema = {},
  isRequired,
  className,
  errors,
  disabled,
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!errorMessages;
  return (
    <div className={`relative ${hasError ? "textField--invalid" : ""}`}>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <textarea
        name={name}
        id={name}
        dir={dir}
        disabled={disabled}
        className={`textField__input min-h-[150px] leading-8 ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        {...register(name, validationSchema)}
        {...rest}
      ></textarea>
      {hasError && (
        <span className="text-red-600 absolute right-0 -bottom-5 text-xs">
          {errorMessages?.message}
        </span>
      )}
    </div>
  );
}
export default TextArea;
