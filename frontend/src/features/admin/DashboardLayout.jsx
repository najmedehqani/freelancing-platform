import useProposals from "../proposals/useProposals";
import DashboardHeader from "../../ui/DashboardHeader";
import useProjects from "../projects/useProjects";
import StatsWrapper from "./StatsWrapper";
import useUsers from "./users/useUsers";
import DashboardSkeleton from "../../ui/DashboardSkeleton";

function DashboardLayout() {
  const { isLoading: isLoading1, proposals } = useProposals();
  const { isLoading: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, users } = useUsers();

  if (isLoading1 || isLoading2 || isLoading3) return <DashboardSkeleton/>;

  return (
    <div>
      <DashboardHeader />
      <StatsWrapper
        proposals={proposals.length}
        users={users.length}
        projects={projects.length}
      />
    </div>
  );
}
export default DashboardLayout;
