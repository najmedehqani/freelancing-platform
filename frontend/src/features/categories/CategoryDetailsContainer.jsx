import ProjectRegistrationSteps from "../../ui/ProjectRegistrationSteps";
import useCategory from "./useCategory";
import CreateProjectButton from "../owner/projects/CreateProjectButton";
import CategoryDetailsSkeleton from "./CategoryDetailsSkeleton";
import EmptyState from "../../ui/EmptyState";
function CategoryDetailsContainer() {
  const { isLoading, isError, category = {} } = useCategory();

  const { title, coverImageUrl, description, tags = [] } = category;

  if (isLoading) return <CategoryDetailsSkeleton />;
  if (isError || !category?._id)
    return <EmptyState description="مشکلی در بارگذاری دسته بندی پیش آمد." />;
  return (
    <div className="mt-2">
      <section className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-secondary-200 rounded-xl">
        <img
          src={coverImageUrl}
          key={coverImageUrl}
          alt={title || "تصویر دسته‌بندی"}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_45%,transparent_75%)]" />
        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
          <h1 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-md">
            {title}
          </h1>
        </div>
      </section>
      <p className="text-secondary-600 text-base sm:text-lg mt-6 leading-relaxed text-justify">
        {description}
      </p>
      <div className="mt-8">
        <h2 className="text-xl sm:text-2xl font-bold text-secondary-800 mb-4">
          خدمات قابل ارائه
        </h2>
        <ul className="flex flex-wrap gap-4 list-none">
          {tags.map((tag, index) => (
            <li
              key={`${tag}-${index}`}
              className="bg-secondary-200 text-secondary-700 text-sm sm:text-base px-4 sm:px-5 sm:py-3 py-2 font-medium rounded-xl"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-14">
        <h2 className="text-xl sm:text-2xl font-bold text-secondary-800 mb-4 sm:mb-8 sm:text-center">
          مراحل ثبت پروژه
        </h2>
        <ProjectRegistrationSteps />
      </div>
      <div className=" flex justify-center mb-16">
        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6 bg-secondary-50 rounded-2xl p-6 sm:p-8">
          <h2 className="text-base sm:text-lg md:text-xl whitespace-nowrap font-bold text-secondary-800">
            همین الان پروژه‌ی خود را ثبت کنید
          </h2>
          <CreateProjectButton />
        </div>
      </div>
    </div>
  );
}

export default CategoryDetailsContainer;
