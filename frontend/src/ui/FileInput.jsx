import { forwardRef } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

const FileInput = forwardRef(function FileInput(
  {
    label,
    name,
    dir = "rtl",
    onChange,
    isRequired,
    className,
    validationSchema = {},
    errors,
    disabled,
    onBlur,
  },
  ref,
) {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={` cursor-pointer border-2 border-primary-600
        rounded-lg px-3 py-2 text-primary-600 flex items-center justify-center gap-x-2 ${className}`}
      >
        {label}
        <ArrowUpTrayIcon className="w-5 h-5" />
        <input
          ref={ref}
          id={name}
          type="file"
          className="sr-only"
          name={name}
          dir={dir}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>

      {errors && errors[name] && (
        <span className="text-red-600 absolute right-0 -bottom-5 text-xs">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
});

export default FileInput;
