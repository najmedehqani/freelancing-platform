import useOwnerProjects from "./projects/useOwnerProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import StatsWrapper from "./StatsWrapper";
import DashboardSkeleton  from "../../ui/DashboardSkeleton"
function DashboardLayout() {
  const { isLoading, projects = [] } = useOwnerProjects();

  if (isLoading) return <DashboardSkeleton />;

  return (
    <div>
      <DashboardHeader />
      <StatsWrapper projects={projects} />
    </div>
  );
}
export default DashboardLayout;
