import TableSkeleton from "../../ui/TableSkeleton";

const headers = ["#", "عنوان پروژه", "بودجه", "ددلاین", "وضعیت", "عملیات"];

const cells = [
  "h-6 w-6", // شماره ردیف
  "h-6 w-32", // عنوان
  "h-6 w-24", // بودجه
  "h-6 w-16", // ددلاین
  "h-5 w-10 rounded-full", // بج وضعیت
  "h-5 w-5 ", // دکمه‌ی عملیات
];

function ProjectsTableSkeleton({ rows }) {
  return <TableSkeleton headers={headers} cells={cells} rows={rows} />;
}

export default ProjectsTableSkeleton;
