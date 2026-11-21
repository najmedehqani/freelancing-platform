import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../../hooks/useMoveBack";
import ButtonIcon from "../../../ui/ButtonIcon";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <ButtonIcon onClick={moveBack} variant="outline" className="p-1.5" aria-label="بازگشت">
        <HiArrowRight />
      </ButtonIcon>
      <h1 className="font-black text-secondary-700 text-base sm:text-xl">
        لیست درخواست های {project?.title}
      </h1>
    </div>
  );
}
export default ProjectHeader;
