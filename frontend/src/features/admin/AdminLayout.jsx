import {
  ClipboardDocumentListIcon,
  FolderIcon,
  HomeIcon,
  RectangleGroupIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import AppLayout from "../../ui/AppLayout";
import { CustomNavLink } from "../../ui/CustomNavlLink";
const links = [
  {
    id: 1,
    title: "صفحه اصلی",
    icon: <HomeIcon className="w-5 h-5" />,
    href: "/",
  },
  {
    id: 2,
    title: "داشبورد",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
    href: "/admin/dashboard",
  },

  {
    id: 3,
    title: "پروژه ها",
    icon: <FolderIcon className="w-5 h-5" />,
    href: "/admin/projects",
  },
  {
    id: 4,
    title: "پروپزال ها",
    icon: <ClipboardDocumentListIcon className="w-6 h-6" />,
    href: "/admin/proposals",
  },
  {
    id: 5,
    title: "دسته بندی ها",
    icon: <Squares2X2Icon className="w-5 h-5" />,
    href: "/admin/categories",
  },
  {
    id: 6,
    title: "کاربران",
    icon: <UserGroupIcon className="w-5 h-5" />,
    href: "/admin/users",
  },
];

function AdminLayout() {
  return (
    <AppLayout>
      <ul className="space-y-2">
        {links.map((link) => (
          <CustomNavLink key={link.id} link={link} />
        ))}
      </ul>
    </AppLayout>
  );
}
export default AdminLayout;
