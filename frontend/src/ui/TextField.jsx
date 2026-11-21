function TextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  validationSchema = {},
  isRequired,
  errors,
  className,
  disabled,
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!errorMessages;
  const errorId = `${name}-error`;
  return (
    <div className={`relative ${hasError ? "textField--invalid" : ""}`}>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {hasError && (
        <span
          id={errorId}
          className="text-red-600 absolute right-0 -bottom-5 text-xs"
        >
          {errorMessages?.message}
        </span>
      )}
    </div>
  );
}
export default TextField;
