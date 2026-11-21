import TableSkeleton from "../../../ui/TableSkeleton";

const headers = [
  "#",
  "عنوان پروژه",
  "دسته بندی",
  "بودجه",
  "ددلاین",
  "مهارت های مورد نیاز",
  "فریلنسر",
  "وضعیت",
  "عملیات",
  "درخواست ها",
];

const cells = [
  "h-6 w-6",                
  "h-6 w-32",
  "h-6 w-24",
  "h-6 w-20",
  "h-6 w-20",
  ["h-5 w-16 rounded-full", "h-5 w-14 rounded-full"],
  "h-6 w-24",
  "h-6 w-20 rounded-full",
  "h-6 w-14",
  "h-5 w-5 rounded-full",
];
export default function ProjectsTableSkeleton({ rows = 5 }) {
  return <TableSkeleton headers={headers} cells={cells} rows={rows} />;
}
