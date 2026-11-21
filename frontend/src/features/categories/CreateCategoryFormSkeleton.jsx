import Skeleton from "../../ui/Skeleton";

function CreateCategoryFormSkeleton() {
  return (
    <div className="form">
      {/* title */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-12 w-full" />
      </div>

      {/* englishTitle */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-12 w-full" />
      </div>

      {/* description */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-36 w-full" />
      </div>

      {/* tags */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-12 w-full" />
      </div>

      {/* cover image input */}
      <Skeleton className="h-10 w-full" />
      {/* cover image preview (aspect-video, matches real preview) */}
      <Skeleton className="aspect-video w-full rounded-lg" />

      {/* submit button */}
      <Skeleton className="h-12 w-full" />
    </div>
  );
}

export default CreateCategoryFormSkeleton;