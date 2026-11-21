import {
  ClipboardDocumentListIcon,
  FolderIcon,
  HomeIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import AppLayout from "../../ui/AppLayout";
import { NavLink } from "react-router-dom";
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
    href: "/freelancer/dashboard",
  },

  {
    id: 3,
    title: "پروژه ها",
    icon: <FolderIcon className="w-5 h-5" />,
    href: "/freelancer/projects",
  },
  {
    id: 4,
    title: "پروپزال ها",
    icon: <ClipboardDocumentListIcon className="w-6 h-6" />,
    href: "/freelancer/proposals",
  },
];

function OwnerLayout() {
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
export default OwnerLayout;
