import Skeleton from "../../ui/Skeleton";

function ProjectDetailsSkeleton() {
  return (
    <div className="mx-auto max-w-4xl mb-24 mt-10">
      <div className="overflow-hidden rounded-2xl border border-secondary-200">
        <div className="px-8 py-5">
          <div className="mb-4 flex items-center gap-2">
            <Skeleton className="h-8 w-24 rounded-full" />
            <Skeleton className="h-7 w-16 rounded-full" />
          </div>
          <Skeleton className="h-7 w-2/3 mb-3" />
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-8" />
            </div>
          </div>
        </div>

        <div className="px-8 py-5 border-t border-secondary-100">
          <Skeleton className="h-4 w-24 mb-2" />
          <div className="space-y-2 mb-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <Skeleton className="h-4 w-32 mb-2" />
          <div className="flex items-center flex-wrap gap-2">
            <Skeleton className="h-7 w-16 rounded-md" />
            <Skeleton className="h-7 w-20 rounded-md" />
            <Skeleton className="h-7 w-14 rounded-md" />
          </div>
        </div>

        <div className="px-8 py-5 border-t border-secondary-100 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="flex flex-col gap-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-14" />
            </div>
          </div>
          <div
            className="
              sm:static sm:block
              fixed inset-x-0 bottom-0 z-10 border-t border-secondary-200 bg-secondary-0/95
              px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3
              shadow-[0_-6px_24px_rgba(0,0,0,0.06)] backdrop-blur-md
              dark:shadow-[0_-6px_24px_rgba(255,255,255,0.03)]
              sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none"
          >
            <Skeleton className="h-10 w-full sm:w-32 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsSkeleton;
