import Avatar from "../ui/Avatar";
import { toPersianNumbers } from "../utils/toPersianNumbers";

function UserInfo({ user, isLoading }) {
  return (
    <div className="flex items-center gap-x-1.5">
      <div className="flex-shrink-0">
        <Avatar name={user?.name} size="lg" isLoading={isLoading} />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <div className="font-bold text-secondary-700 text-sm mb-1 truncate">
          {user?.name}
        </div>
        <span className="text-secondary-500 text-xs">
          {toPersianNumbers(user?.phoneNumber)}
        </span>
      </div>
    </div>
  );
}

export default UserInfo;
