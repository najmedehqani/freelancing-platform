import TableSkeleton from "../../../ui/TableSkeleton";
const headers = ["#", "نام", "ایمیل", "شماره موبایل", "نقش", "وضعیت", "عملیات"];
const cells = [
  "h-6 w-6", // #
  "h-6 w-24",
  "h-6 w-60",
  "h-6 w-28",
  "h-6 w-24",
  "h-5 w-16 rounded-full", // وضعیت (شکل بج)
  "h-5 w-24 rounded-md",
];

function UsersTableSkeleton({ rows }) {
  return <TableSkeleton headers={headers} cells={cells} rows={rows} />;
}

export default UsersTableSkeleton;
