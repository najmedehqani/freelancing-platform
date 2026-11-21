import { Outlet } from "react-router-dom";
import PanelHeader from "./PanelHeader";
import SideBar from "./SideBar";

function AppLayout({ children }) {
  return (
    <div className="bg-secondary-0">
      <div className="grid grid-cols-12 h-screen ">
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block">
          <SideBar>{children}</SideBar>
        </aside>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 flex flex-col h-screen ">
          <PanelHeader>{children}</PanelHeader>
          <main className="bg-secondary-100 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto ">
            <div className="xl:max-w-screen-xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
