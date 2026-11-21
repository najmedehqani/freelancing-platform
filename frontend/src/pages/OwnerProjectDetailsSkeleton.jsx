import Skeleton from "../ui/Skeleton";
import ProposalsTableSkeleton from "../features/owner/project-details/ProposalsTableSkeleton";

export default function OwnerProjectDetailsSkeleton() {
  return (
    <div>
      <div className="flex items-center gap-x-4 mb-8">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-6 w-48" />
      </div>
      <ProposalsTableSkeleton />
    </div>
  );
}
