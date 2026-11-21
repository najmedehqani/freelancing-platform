import { PiSignIn, PiList, PiX } from "react-icons/pi";
import HeaderNavLinks from "./HeaderNavLinks";
import { useEffect, useState } from "react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";
import useUser from "../features/authentication/useUser";
import UserInfo from "../ui/UserInfo";
import Logout from "../features/authentication/Logout";
import { Link } from "react-router-dom";
import DarkModeToggle from "../ui/DarkModeToggle";
import Logo from "../ui/Logo";
import Dropdown from "../ui/Dropdown";
import ButtonIcon from "../ui/ButtonIcon";
import Drawer from "../ui/Drawer";
import SideBar from "../ui/SideBar";

const roleRoutes = {
  ADMIN: "/admin/dashboard",
  OWNER: "/owner/dashboard",
  FREELANCER: "/freelancer/dashboard",
};
function Header() {
  const { isLoading, user } = useUser();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const userDropdownItems = [
    {
      id: 1,
      type: "label",
      content: (
        <div className="py-1 px-2">
          <UserInfo user={user} isLoading={isLoading} />
        </div>
      ),
    },
    { id: 2, type: "divider" },
    {
      id: 3,
      type: "link",
      href: roleRoutes[user?.role] ?? "/",
      content: (
        <>
          <UserIcon className="w-5 h-5" />
          <span>حساب کاربری</span>
        </>
      ),
      className:
        "flex items-center gap-x-2 font-medium py-2 pr-4 pl-5 text-secondary-700 w-full data-[focus]:text-primary-500 transition-colors duration-200 ease-out",
    },
    { id: 4, type: "component", content: <Logout /> },
  ];
  return (
    <header
      className={`z-10 sticky top-0 transition-all duration-300
         ${
           isScrolled
             ? "backdrop-blur-xl bg-secondary-0/75 border-b border-secondary-100 shadow-sm shadow-black/5"
             : "bg-transparent border-b border-transparent"
         }
         ${isLoading ? "opacity-70" : "opacity-100"}`}
    >
      <div className="container xl:max-w-screen-xl top-0 py-3">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-x-1">
              <ButtonIcon
                onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                className=" md:hidden border-none text-secondary-700 [&>svg]:w-8 [&>svg]:h-8 rounded-full p-2"
                variant="outline"
                aria-label={isOpenDrawer ? "بستن منو" : "باز کردن منو"}
              >
                {isOpenDrawer ? <PiX /> : <PiList />}
              </ButtonIcon>
              <Logo size="27px" />
            </div>
            <div className="hidden md:block">
              <HeaderNavLinks inline={true} />
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <DarkModeToggle />
            {user ? (
              <Dropdown
                button={
                  <span
                    className="flex border border-secondary-200 text-secondary-600 hover:bg-secondary-100
                 items-center rounded-2xl py-2 px-1"
                  >
                    <UserIcon className="w-5 h-5" />
                    <ChevronDownIcon className="w-3 h-3" />
                  </span>
                }
                items={userDropdownItems}
                className="px-2 py-3 shadow-lg rounded-lg bg-secondary-50 w-52 mt-1"
                buttonLabel="منوی کاربر"
              />
            ) : (
              <Link
                to="/auth"
                className={`btn btn--primary flex items-center gap-1 justify-center rounded-3xl 
                px-4 py-1.5 ${isLoading ? "pointer-events-none opacity-80" : ""}`}
              >
                <PiSignIn className="w-6 h-6 " />
                <p className="text-sm">ورود</p>
              </Link>
            )}
          </div>
        </nav>
        <Drawer
          open={isOpenDrawer}
          onClose={() => setIsOpenDrawer(false)}
          ariaLabel="منوی ناوبری"
        >
          <SideBar onClose={() => setIsOpenDrawer(false)}>
            <HeaderNavLinks inline={false} />
          </SideBar>
        </Drawer>
      </div>
    </header>
  );
}
export default Header;
