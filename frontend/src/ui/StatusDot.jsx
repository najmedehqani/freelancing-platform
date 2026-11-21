import clsx from "clsx";

export default function StatusDot({
  color = "bg-success",
  size = "h-2 w-2",
  className,
}) {
  return (
    <span className={clsx("absolute flex", className)}>
      <span
        className={clsx(
          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
          color,
          size,
        )}
      ></span>
      <span
        className={clsx("relative inline-flex rounded-full", color, size)}
      ></span>
    </span>
  );
}
