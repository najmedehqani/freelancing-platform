import Skeleton from "../../ui/Skeleton";

function CategoryDetailsSkeleton() {
  return (
    <div className="mt-2">
      <Skeleton className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-xl" />

      <div className="mt-6 space-y-3">
        <Skeleton className="h-5 sm:h-6 w-full" />
        <Skeleton className="h-5 sm:h-6 w-full" />
        <Skeleton className="h-5 sm:h-6 w-2/3" />
      </div>

      <div className="mt-8">
        <Skeleton className="h-7 sm:h-8 w-40 mb-4" />
        <div className="flex flex-wrap gap-4">
          <Skeleton className="h-11 w-24 rounded-xl" />
          <Skeleton className="h-11 w-32 rounded-xl" />
          <Skeleton className="h-11 w-20 rounded-xl" />
          <Skeleton className="h-11 w-28 rounded-xl" />
          <Skeleton className="h-11 w-20 rounded-xl" />
          <Skeleton className="h-11 w-24 rounded-xl" />
        </div>
      </div>

      <div className="my-14">
        <Skeleton className="h-7 sm:h-8 w-48 mb-4 sm:mb-8 sm:mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-5 flex flex-col gap-3">
              <Skeleton className=" w-14 h-14 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-16">
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6 bg-secondary-50 rounded-2xl p-6 sm:p-8">
          <Skeleton className="h-6 sm:h-7 w-64" />
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default CategoryDetailsSkeleton;
