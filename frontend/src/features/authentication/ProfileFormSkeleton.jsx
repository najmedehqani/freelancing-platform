import Skeleton from "../../ui/Skeleton";

function ProfileFormSkeleton() {
  return (
    <div className="w-full max-w-md"  role="status" aria-label="در حال بارگذاری اطلاعات حساب کاربری">
      <div className="p-4 sm:p-5 md:p-7 rounded-xl overflow-hidden shadow-sm bg-secondary-0">
        {/* عنوان */}
        <Skeleton className="h-6 w-40 mb-7" />

        <div className="flex flex-col space-y-7">
          {/* نام و نام خانوادگی */}
          <div className="flex flex-col space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* ایمیل */}
          <div className="flex flex-col space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* شماره موبایل */}
          <div className="flex flex-col space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* دکمه */}
          <Skeleton className="h-11 w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default ProfileFormSkeleton;