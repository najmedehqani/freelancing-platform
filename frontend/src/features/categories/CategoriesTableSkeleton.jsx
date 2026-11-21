import TableSkeleton from "../../ui/TableSkeleton";

const HEADERS = [
  "#",
  "عنوان",
  "عنوان انگلیسی",
  "توضیحات",
  "خدمات قابل ارائه",
  "عملیات",
];

const CELLS = [
  "h-6 w-6",
  "h-6 w-32",
  "h-6 w-32",
  "h-6 w-48",
   ["h-5 w-16 rounded-full", "h-5 w-14 rounded-full","h-5 w-16 rounded-full","h-5 w-12 rounded-full","h-5 w-20 rounded-full"],
   "h-6 w-16",,
];
export default function CategoriesTableSkeleton({rows=5}) {
  return <TableSkeleton headers={HEADERS} cells={CELLS} rows={rows} />;
}

