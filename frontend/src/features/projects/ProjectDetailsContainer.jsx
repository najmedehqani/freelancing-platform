import {
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import toLocalDateShort from "../../utils/toLocalDateShort";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import useProject from "./useProject";
import Avatar from "../../ui/Avatar";
import CreateProposalButton from "../proposals/CreateProposalButton";
import ProjectDetailsSkeleton from "./ProjectDetailsSkeleton";
import EmptyState from "../../ui/EmptyState";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success py-1 text-sm",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger py-1 text-sm",
  },
};
function ProjectDetailsContainer() {
  const { isLoading, project = {} ,isError} = useProject();
  const {
    status,
    owner,
    category,
    title,
    budget,
    deadline,
    proposals,
    description,
    tags=[],
  } = project;

  const statusInfo = projectStatus[status] ?? {
    label: "نامشخص",
    className: "badge--secondary py-1 text-sm",
  };

  if (isLoading) return <ProjectDetailsSkeleton />;
  if (isError || !project?._id) return <EmptyState description="مشکلی در بارگذاری پروژه پیش آمد." />;
  return (
    <div className="mx-auto max-w-4xl mb-24 mt-10">
      <div
        className="overflow-hidden rounded-2xl border border-secondary-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200
        dark:shadow-[0_2px_12px_rgba(255,255,255,0.02)]"
      >
        <div className="px-8 py-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-secondary-200 px-4 py-2 text-sm font-medium text-secondary-700">
              {category?.title}
            </span>

            <span className={`badge ${statusInfo.className}`}>
              {statusInfo.label}
            </span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-secondary-800 sm:text-2xl mb-3">
            {title}
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <p className="text-base font-medium text-secondary-600 flex items-center gap-1.5">
                <WalletIcon aria-hidden="true" className="w-4 h-4" />
                <span>بودجه:</span>
              </p>
              <p className="text-base font-semibold text-secondary-700">
                {toPersianNumbersWithComma(budget)} تومان
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base font-medium text-secondary-600 flex items-center gap-1.5">
                <CalendarDaysIcon aria-hidden="true" className="w-4 h-4" />
                <span>ددلاین:</span>
              </p>
              <p className="text-base font-semibold text-secondary-700">
                {toLocalDateShort(deadline)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base font-medium text-secondary-600 flex items-center gap-1.5">
                <ClipboardDocumentListIcon
                  aria-hidden="true"
                  className="w-4 h-4"
                />
                <span>پروپزال ها:</span>
              </p>
              <p className="text-base font-semibold text-secondary-700">
                {toPersianNumbers(proposals?.length)}
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 py-5 border-t border-secondary-100 ">
          <p className="text-secondary-700 text-sm mb-2 font-semibold">
            توضیح پروژه:
          </p>
          <p className="text-secondary-500 mb-4">{description}</p>

          <p className="font-semibold text-sm text-secondary-700 mb-2">
            مهارت های مورد نیاز:
          </p>
          <div className="flex items-center flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <span
                className="rounded-md bg-secondary-200 px-3 py-1.5 text-sm font-medium text-secondary-700"
                key={`${tag}-${index}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="px-8 py-5 border-t border-secondary-100 flex items-center justify-between ">
          <div className="flex items-center gap-1.5">
            <Avatar name={owner?.name} size="lg" />
            <div className="flex flex-col gap-1">
              <p className="text-secondary-700 font-semibold">{owner?.name} </p>
              <p className="text-secondary-600 text-sm">کارفرما</p>
            </div>
          </div>
          <div
            className="
    sm:static sm:block
    fixed inset-x-0 bottom-0 z-10 border-t border-secondary-200 bg-secondary-0/95
    px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3
    shadow-[0_-6px_24px_rgba(0,0,0,0.06)] backdrop-blur-md
    dark:shadow-[0_-6px_24px_rgba(255,255,255,0.03)]
    sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none"
          >
            <CreateProposalButton
              titleProject={title}
              projectId={project?._id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsContainer;
