import {
  ClipboardDocumentListIcon,
  FolderOpenIcon,
} from "@heroicons/react/24/outline";
import { LuFolderCheck } from "react-icons/lu";
import Stat from "../../ui/Stat";

function StatsWrapper({ projects }) {
  const numOfActiveProjects = projects.filter(
    (p) => p.status === "OPEN",
  ).length;
  const numOfAcceptedProjects = projects.filter(
    (p) => p.status === "CLOSED",
  ).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0,
  );

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      <Stat
        color="blue"
        title="پروژه های فعال"
        value={numOfActiveProjects}
        icon={<FolderOpenIcon className="w-20 h-20" />}
      />
      <Stat
        color="primary"
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        icon={<LuFolderCheck className="w-20 h-20" />}
      />
      <Stat
        color="orange"
        title="پروپزال ها"
        value={numOfProposals}
        icon={<ClipboardDocumentListIcon className="w-20 h-20" />}
      />
    </div>
  );
}

export default StatsWrapper;
