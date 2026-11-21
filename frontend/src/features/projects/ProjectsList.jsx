import ProjectCard from "./ProjectCard";
import EmptyState from "../../ui/EmptyState";
import ProjectsListSkeleton from "./ProjectsListSkeleton";
function ProjectsList({ projects = [], isLoading, isError }) {
  if (isLoading) return <ProjectsListSkeleton />;
  if (isError)
    return <EmptyState description="مشکلی در بارگذاری پروژه ها پیش آمد." />;
  if (!projects?.length)
    return <EmptyState description="پروژه ای برای نمایش وجود ندارد." />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
      {projects.map((project) => (
        <ProjectCard project={project} key={project._id} />
      ))}
    </div>
  );
}

export default ProjectsList;
