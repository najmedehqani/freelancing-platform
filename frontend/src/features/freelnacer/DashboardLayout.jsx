import DashboardHeader from "../../ui/DashboardHeader";
import useProposals from "../proposals/useProposals";
import StatsWrapper from "./StatsWrapper";
import DashboardSkeleton from "../../ui/DashboardSkeleton";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <DashboardSkeleton/>;

  return (
    <div>
      <DashboardHeader />
      <StatsWrapper proposals={proposals} />
    </div>
  );
}
export default DashboardLayout;
