import { PencilIcon } from "@heroicons/react/24/outline";
import ButtonIcon from "./ButtonIcon";
import UserInfo from "./UserInfo";
import useUser from "../features/authentication/useUser";
import { Link } from "react-router-dom";
import StatusDot from "./StatusDot";
import Logout from "../features/authentication/Logout";
import { PiSignIn, PiX } from "react-icons/pi";
import clsx from "clsx";
import UserInfoSkeleton from "./UserInfoSkeleton";

function SideBar({ children, onClose }) {
  const { isLoading, user } = useUser();
  return (
    <div className="flex flex-col p-5 h-[100dvh] pt-5 lg:pt-8">
      <div className="flex justify-end w-full mb-4">
        <ButtonIcon
          onClick={onClose}
          variant="outline"
          className="block border-none [&>svg]:w-5 [&>svg]:h-5 lg:hidden ml-1.5 p-1"
          aria-label="بستن منو"
        >
          <PiX />
        </ButtonIcon>
      </div>
      {/* Drawer header */}
      <div className=" border-b border-b-secondary-200 pb-2 mb-6 w-full">
        {isLoading ? (
          <UserInfoSkeleton />
        ) : user ? (
          <Link
            aria-label={`ویرایش پروفایل ${user?.name ?? ""}`}
            to="profile"
            className="group flex items-center justify-between gap-x-1"
          >
            <div className="flex-1 relative min-w-0">
              <UserInfo user={user} isLoading={isLoading} />
              <StatusDot className="bottom-1 right-0.5" />
            </div>
            <span
              aria-hidden="true"
              className={clsx(
                "p-2 rounded-xl border border-secondary-200 text-secondary-600",
                "group-hover:bg-secondary-200 transition-colors duration-300 ease-out",
                "flex items-center justify-center",
              )}
            >
              <PencilIcon className="w-4 h-4" />
            </span>
          </Link>
        ) : (
          <Link
            to="/auth"
            className="btn btn--primary flex items-center gap-1 justify-center"
          >
            <PiSignIn className="w-6 h-6" />
            <span className="font-bold text-sm">ورود</span>
          </Link>
        )}
      </div>
      {/* Drawer content */}
      <div className="overflow-y-auto flex-auto">{children}</div>
      <Logout />
    </div>
  );
}
export default SideBar;
