import Skeleton from "../../ui/Skeleton";

function CategoryPreviewSkeleton() {
  return (
    <div className="mt-14 md:mb-24 mb-20">
      <Skeleton className="h-8 md:h-9 w-56 mb-8" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-3xl border border-secondary-200 p-7 lg:p-4 xl:p-7">
            <Skeleton className="h-16 w-16 lg:w-14 lg:h-14 xl:h-16 xl:w-16 rounded-2xl mb-5" />
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-11 w-11 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPreviewSkeleton;
