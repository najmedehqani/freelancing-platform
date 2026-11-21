import { twMerge } from "tailwind-merge";
// shadcn/ui Skeleton primitive, ported to this project's design tokens.
// shadcn uses `animate-pulse rounded-md bg-muted`; here `bg-muted` maps to the
// neutral placeholder tone `secondary-200`, which reads on both card
// (secondary-0) surfaces and in dark mode. Pulse is disabled for users who
// prefer reduced motion.
export default function Skeleton({ className, ...props }) {
  return (
    <div
      aria-hidden="true"
      className={twMerge(
        "animate-pulse motion-reduce:animate-none rounded-md bg-secondary-200",
        className,
      )}
      {...props}
    />
  );
}
