import { HiCurrencyDollar } from "react-icons/hi";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import Stat from "../../ui/Stat";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

function StatsWrapper({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      <Stat
        color="blue"
        title="پروپزال ها"
        value={numOfProposals}
        icon={<ClipboardDocumentListIcon className="w-20 h-20" />}
      />
      <Stat
        color="primary"
        title="پروپزال های تایید شده"
        value={acceptedProposals.length}
        icon={<ClipboardDocumentCheckIcon className="w-20 h-20" />}
      />
      <Stat
        color="orange"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCurrencyDollar className="w-20 h-20" />}
      />
    </div>
  );
}

export default StatsWrapper;
