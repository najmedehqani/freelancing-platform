import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  WalletIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
function ProjectCard({ project }) {
  return (
    <div
      className="col-span-1 sm:col-span-6 group overflow-hidden rounded-2xl border 
    border-secondary-200 p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200
    hover:border-secondary-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]
     flex h-full flex-col dark:shadow-[0_2px_12px_rgba(255,255,255,0.02)]
    dark:hover:shadow-[0_4px_12px_rgba(255,255,255,0.06)] bg-secondary-0"
    >
      <h3 className="text-lg font-bold leading-6 tracking-tight text-secondary-800 ">
        {project?.title}
      </h3>
      <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-secondary-500">
        {project?.description}
      </p>

      <div className="mt-4 flex items-center flex-wrap gap-2">
        <p className="font-semibold text-xs text-secondary-700">مهارت ها:</p>
        {project?.tags?.slice(0, 3).map((tag, index) => (
          <span
            className="rounded-md bg-secondary-200 px-2.5 py-1 text-xs font-medium text-secondary-700"
            key={`${tag}-${index}`}
          >
            {tag}
          </span>
        ))}

        {project?.tags?.length > 3 && (
          <span className="rounded-md bg-secondary-200 px-2.5 py-1 text-xs font-medium text-secondary-500">
            +{toPersianNumbers(project?.tags?.length - 3)}
          </span>
        )}
      </div>
      <div className="my-4 h-px bg-secondary-200"></div>

      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-xs font-medium text-secondary-600 flex items-center gap-1">
            <span>بودجه</span>
            <WalletIcon aria-hidden="true" className="w-4 h-4" />
          </p>
          <p className="mt-1.5 text-xs font-semibold text-secondary-700">
            {toPersianNumbersWithComma(project?.budget)}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-secondary-600 flex items-center gap-1">
            <span>ددلاین</span>
            <CalendarDaysIcon aria-hidden="true" className="w-4 h-4" />
          </p>
          <p className="mt-1.5 text-sm font-semibold text-secondary-700">
            {toLocalDateShort(project?.deadline)}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-secondary-600 flex items-center gap-1">
            <span>پروپزال ها</span>
            <ClipboardDocumentListIcon aria-hidden="true" className="w-4 h-4" />
          </p>
          <p className="mt-1.5 text-sm font-semibold text-secondary-700">
            {toPersianNumbers(project?.proposals?.length)}
          </p>
        </div>
      </div>
      <Link
        to={`/projects/${project?._id}`}
        className=" mt-auto btn btn--primary flex w-full items-center justify-center gap-2"
      >
        مشاهده پروژه
        <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

export default ProjectCard;
