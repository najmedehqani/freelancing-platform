import Skeleton from "./Skeleton";

function DashboardSkeleton() {
  return (
    <div>
      <div className="mb-8">
        <Skeleton className="h-7 sm:h-8 w-32 mb-2" />
        <Skeleton className="h-5 w-64 max-w-full" />
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-xl gap-x-4 shadow-sm"
          >
            <Skeleton className="row-span-2 rounded-full aspect-square" />
            <Skeleton className="h-5 w-24 self-center" />
            <Skeleton className="h-8 w-16" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default DashboardSkeleton;