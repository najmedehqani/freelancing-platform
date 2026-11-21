import  Skeleton from "./Skeleton.jsx";
function UserInfoSkeleton() {
  return (
    <div
      role="status"
      aria-label="در حال بارگذاری اطلاعات کاربر"
      className="flex items-center gap-x-1.5 w-full"
    >
      <Skeleton className="w-12 h-12 rounded-full flex-shrink-0" />
      <div className="flex flex-col flex-1 min-w-0 gap-y-1">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
}

export default UserInfoSkeleton;
