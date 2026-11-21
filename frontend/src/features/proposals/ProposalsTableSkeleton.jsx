import TableSkeleton from "../../ui/TableSkeleton";

const headers = [
  "#",
  "توضیحات",
  "زمان تحویل",
  "هزینه",
  "وضعیت",
];

const cells = [
  "h-6 w-6", // #
  "h-6 w-48", // توضیحات
  "h-6 w-14", // زمان تحویل
  "h-6 w-24", // هزینه
  "h-5 w-16 rounded-full", // وضعیت (شکل بج)
];

export default function ProposalsTableSkeleton({ rows }) {
  return <TableSkeleton headers={headers} cells={cells} rows={rows} />;
}
