import { twMerge } from "tailwind-merge";
const btnType = {
  primary:
    "bg-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white",
  secondary:
    "bg-secondary-200  text-secondary-500 hover:bg-secondary-500 hover:text-secondary-0",
  outline:
    "border border-secondary-200 text-secondary-500 hover:bg-secondary-200",
  red: "bg-red-100  text-red-500 hover:bg-red-500 hover:text-white",
  danger: "border border-red-100 text-red-500",
};

function ButtonIcon({ children, onClick, className, variant, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        btnType[variant],
        ` flex items-center justify-center gap-x-1 rounded-md p-0.5
        [&>svg]:w-4  [&>svg]:h-4 [&>svg]:text-inherit
        text-xs lg:text-sm
        transition-all duration-300 ease-out`,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
