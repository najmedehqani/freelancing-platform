import Skeleton from "../../ui/Skeleton";

function ProjectCardSkeleton() {
  return (
    <div className="col-span-1 sm:col-span-6 rounded-2xl border border-secondary-200 p-4 flex h-full flex-col">
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="mt-2.5 h-4 w-full" />
      <Skeleton className="mt-1.5 h-4 w-3/4" />

      <div className="mt-4 flex items-center flex-wrap gap-2">
        <Skeleton className="h-5 w-16 rounded-md" />
        <Skeleton className="h-5 w-14 rounded-md" />
        <Skeleton className="h-5 w-12 rounded-md" />
      </div>

      <div className="my-4 h-px bg-secondary-100"></div>

      <div className="flex items-center justify-between gap-4 mb-6">
        {[...Array(3)].map((_, i) => (
          <div key={i}>
            <Skeleton className="h-3 w-12" />
            <Skeleton className="mt-1.5 h-4 w-16" />
          </div>
        ))}
      </div>

      <Skeleton className="mt-auto h-10 w-full rounded-lg" />
    </div>
  );
}

export default ProjectCardSkeleton;