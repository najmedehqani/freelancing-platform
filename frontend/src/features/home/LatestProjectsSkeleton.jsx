import Skeleton from "../../ui/Skeleton";
import ProjectCardSkeleton from "../projects/ProjectCardSkeleton";

function LatestProjectsSkeleton() {
  return (
    <div className="md:mb-28 mb-20 rounded-xl p-3 md:p-6 bg-secondary-50">
      <div className="flex flex-col md:flex-row md:items-stretch gap-x-10 gap-y-8">
        <div className="flex flex-col items-center justify-start md:items-start md:justify-end gap-y-5 md:gap-y-6 flex-shrink-0 pb-0 md:pb-5">
          <Skeleton className="h-8 w-48 md:h-9 md:w-56" />
          <Skeleton className="h-11 w-32 rounded-lg" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex gap-6 overflow-x-auto py-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[315px] max-w-[85vw]"
              >
                <ProjectCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProjectsSkeleton;
