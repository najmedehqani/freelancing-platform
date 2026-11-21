import Stat from "../../ui/Stat";
import {
  ClipboardDocumentListIcon,
  FolderIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

function StatsWrapper({ proposals, users, projects }) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="پروژه ها"
        value={projects}
        icon={<FolderIcon className="w-20 h-20" />}
      />
      <Stat
        color="blue"
        title="درخواست ها"
        value={proposals}
        icon={<ClipboardDocumentListIcon className="w-20 h-20" />}
      />
      <Stat
        color="orange"
        title="کاربران"
        value={users}
        icon={<UserGroupIcon className="w-20 h-20" />}
      />
    </div>
  );
}

export default StatsWrapper;
