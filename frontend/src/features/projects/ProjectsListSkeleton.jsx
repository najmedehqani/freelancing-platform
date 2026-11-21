import ProjectCardSkeleton from "./ProjectCardSkeleton";

function ProjectsListSkeleton({ count = 6 }) {
  return (
    <div
      role="status"
      aria-label="در حال بارگذاری پروژه‌ها"
      className="grid grid-cols-1 sm:grid-cols-12 gap-8"
    >
      {[...Array(count)].map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}

export default ProjectsListSkeleton;