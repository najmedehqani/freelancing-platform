import { useMemo } from "react";
import { getAvatarColor } from "../utils/getAvatarColor";
import clsx from "clsx";

const SIZES = {
  sm: "w-6 h-6 text-xs border",
  md: "w-9 h-9 text-sm border-2",
  lg: "w-11 h-11 text-base border-2",
  xl: "w-20 h-20 text-xl border-4",
};

function Avatar({ name, size = "md", isLoading = false }) {
  const currentSize = SIZES[size] ?? SIZES.md;
  const cleanedName = name?.trim();
  const backgroundColor = useMemo(
    () => getAvatarColor(cleanedName),
    [cleanedName],
  );

  if (isLoading) {
    return (
      <div
        role="status"
        aria-label="در حال بارگذاری آواتار"
        className={clsx(
          "aspect-square rounded-full bg-secondary-200 animate-pulse",
          currentSize,
        )}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={cleanedName ? `آواتار ${cleanedName}` : "آواتار"}
      style={{ backgroundColor }}
      className={clsx(
        "rounded-full border-secondary-0 font-semibold text-secondary-0 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
        currentSize,
      )}
      title={cleanedName}
    >
      {cleanedName?.[0] ?? "?"}
    </div>
  );
}
export default Avatar;
