import useProposals from "./useProposals";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import EmptyState from "../../ui/EmptyState";
import ProposalsTableSkeleton from "./ProposalsTableSkeleton";
function ProposalsTable() {
  const { isLoading, proposals, isError } = useProposals();

  if (isLoading) return <ProposalsTableSkeleton />;
  if (isError)
    return <EmptyState description="مشکلی در بارگذاری پروپزال ها پیش آمد." />;

  if (!proposals?.length)
    return <EmptyState description="هنوز هیچ پروپوزالی ثبت نکرده‌اید." />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default ProposalsTable;
