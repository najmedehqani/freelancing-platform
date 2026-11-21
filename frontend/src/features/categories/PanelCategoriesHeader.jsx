import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";
export default function PanelCategoriesHeader() {
  return (
    <div className="flex items-center justify-between mb-8 ">
      <h1 className="font-black text-secondary-700 text-xl">دسته بندی ها</h1>
      <Link
        to="/admin/categories/create"
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiOutlinePlus className="w-5 h-5" />
        <span className="hidden md:block">ایجاد دسته بندی</span>
      </Link>
    </div>
  );
}
