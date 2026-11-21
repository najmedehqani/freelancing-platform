import ProjectHeader from "../features/owner/project-details/ProjectHeader";
import ProposalsTable from "../features/owner/project-details/ProposalsTable";
import useProject from "../features/projects/useProject";
import EmptyState from "../ui/EmptyState";
import OwnerProjectDetailsSkeleton from "./OwnerProjectDetailsSkeleton";

function OwnerProjectDetails() {
  const { isLoading, project,isError } = useProject();

  if (isLoading) return <OwnerProjectDetailsSkeleton/>;
   if (isError || !project?._id) return <EmptyState description="مشکلی در بارگذاری پروژه پیش آمد." />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project?.proposals} />
    </div>
  );
}
export default OwnerProjectDetails;
