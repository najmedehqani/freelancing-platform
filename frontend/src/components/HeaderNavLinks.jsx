import {
  HomeIcon,
  InformationCircleIcon,
  ChevronDownIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { SiInstagram, SiTelegram } from "react-icons/si";
import { CustomNavLink } from "../ui/CustomNavlLink";
import Dropdown from "../ui/Dropdown";
import Accordion from "../ui/Accordion";

const links = [
  {
    id: 1,
    title: "خانه",
    icon: <HomeIcon className="w-5 h-5" />,
    href: "/",
  },

  {
    id: 2,
    title: "پروژه ها",
    icon: <FolderIcon className="w-5 h-5" />,
    href: "/projects",
  },
];
const aboutClass =
  "flex items-center w-full gap-x-2 py-2 pr-4 pl-5 rounded-xl data-[focus]:bg-secondary-200 text-secondary-600";
const aboutItems = [
  {
    id: 1,
    type: "button",
    content: (
      <>
        <SiInstagram className="w-5 h-5" />
        <span>صفحه اینستاگرام</span>
      </>
    ),
    className: aboutClass,
  },
  {
    id: 2,
    type: "button",
    content: (
      <>
        <SiTelegram className="w-5 h-5" />
        <span>کانال تلگرام</span>
      </>
    ),
    className: aboutClass,
  },
  {
    id: 3,
    type: "link",
    href: "/about-us",
    content: (
      <>
        <InformationCircleIcon className="w-5 h-5" />
        <span>درباره ما</span>
      </>
    ),
    className: aboutClass,
  },
];

function HeaderNavLinks({ inline =false}) {
  return (
    <ul
      className="space-y-2 md:space-y-0 flex flex-col md:flex-row md:items-center gap-x-9 
    text-secondary-700 font-medium md:text-lg"
    >
      {links.map((link) => (
        <CustomNavLink key={link.id} link={link} inline={inline} />
      ))}
      <li>
        {inline ? (
          <Dropdown
            button={({ open }) => (
              <span className="flex items-center gap-x-2 py-1 hover:text-primary-500 w-full ">
                <span>ارتباط با ما</span>
                <ChevronDownIcon
                  className={clsx(
                    "w-4 h-4 duration-300 ease-out transition-transform",
                    open && "rotate-180",
                  )}
                />
              </span>
            )}
            items={aboutItems}
            className="px-2 py-3 rounded-lg shadow-lg bg-secondary-50 mt-1 "
          />
        ) : (
          <Accordion
            title="ارتباط با ما"
            buttonClass="flex items-center gap-x-2 py-3 pr-4 pl-5 hover:text-primary-500 w-full"
            iconClass="w-4 h-4"
          >
            {aboutItems.map((item) =>
              item.type === "link" ? (
                <Link
                  to={item.href}
                  key={item.id}
                  className="flex w-full items-center gap-x-2 py-2 pr-4 pl-5 text-secondary-600 hover:bg-secondary-200 rounded-xl"
                >
                  {item.content}
                </Link>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  className="flex w-full items-center gap-x-2 py-2 pr-4 pl-5 text-secondary-600 hover:bg-secondary-200 rounded-xl"
                >
                  {item.content}
                </button>
              ),
            )}
          </Accordion>
        )}
      </li>
    </ul>
  );
}

export default HeaderNavLinks;
