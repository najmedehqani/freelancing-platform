import useLogout from "./useLogout";
import Loading from "../../ui/Loading";
import { PiSignOut } from "react-icons/pi";
function Logout() {
  const { isPending, logout } = useLogout();

  return isPending ? (
    <Loading variant="danger" width="60" height="30"/>
  ) : (
     <button
        onClick={logout}
        className="flex items-center gap-x-2 font-medium text-red-500 hover:text-red-600
         cursor-pointer w-full  py-3 pr-4 pl-5 mt-auto transition-colors duration-200 ease-out"
      >
        <PiSignOut className="h-5 w-5" />
        <span>خروج</span>
      </button>
  );
}
export default Logout;
