import { useEffect, useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { PiList, PiX } from "react-icons/pi";
import DarkModeToggle from "./DarkModeToggle";
import SideBar from "./SideBar";
import Drawer from "./Drawer";
import { useLocation } from "react-router-dom";
function PanelHeader({ children }) {
  const hour = new Date().getHours();
  const greeting =
    hour >= 5 && hour < 12
      ? "صبح بخیر ☀️"
      : hour >= 12 && hour < 18
        ? "عصر بخیر 🌤️"
        : "شب بخیر 🌙";

  const formattedDate = new Date().toLocaleDateString("fa-IR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpenDrawer(false);
  }, [location.pathname]);

  return (
    <header className="bg-secondary-0 sticky top-0 py-5 px-4 lg:px-8">
      <div className="flex items-center justify-between xl:max-w-screen-xl">
        <ButtonIcon
          className="block lg:hidden border-none text-secondary-700 [&>svg]:w-7 [&>svg]:h-7 !rounded-full p-2"
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          variant="outline"
          aria-label={isOpenDrawer ? "بستن منو" : "باز کردن منو"}
        >
          {isOpenDrawer ? <PiX /> : <PiList />}
        </ButtonIcon>
        <div className=" flex flex-col justify-start items-center gap-y-1 sm:flex-row gap-x-2 text-sm md:text-base">
          <span className="font-bold text-secondary-700">{greeting}</span>
          <span className="text-secondary-400 hidden sm:block">|</span>
          <span className="text-secondary-500 text-xs md:text-sm">
            امروز {formattedDate}
          </span>
        </div>
        <DarkModeToggle />
        <Drawer
          open={isOpenDrawer}
          onClose={() => setIsOpenDrawer(false)}
          ariaLabel="منوی ناوبری"
        >
          <SideBar onClose={() => setIsOpenDrawer(false)}>{children}</SideBar>
        </Drawer>
      </div>
    </header>
  );
}

export default PanelHeader;
