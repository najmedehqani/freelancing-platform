import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import { HiEye,} from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";
import ButtonIcon from "../../../ui/ButtonIcon";
import DeleteResourceButton from "../../../ui/DeleteResourceButton";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { removeProject, isDeleting } = useRemoveProject();

  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td> {project.category?.title || "-"}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-1 max-w-[210px]">
          {(project.tags || []).map((tag, tagIndex) => (
            <span
              className="badge badge--secondary text-xs font-medium"
              key={`${tag}-${tagIndex}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <>
            <ButtonIcon
              variant="primary"
              className="p-1"
              onClick={() => setIsEditOpen(true)}
              aria-label={`ویرایش ${project.title}`}
            >
              <TbPencilMinus />
            </ButtonIcon>
            <Modal
              title={`ویرایش ${project.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProjectForm
                projectToEdit={project}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          <>
            <DeleteResourceButton
              title={project.title}
              isDeleting={isDeleting}
              onDelete={(options) => removeProject(project._id, options)}
            />
          </>
        </div>
      </td>
      <td>
        <Link
          to={project._id}
          className="flex justify-center"
          aria-label={`مشاهده جزئیات ${project.title}`}
        >
          <HiEye className="w-5 h-5 text-secondary-500 hover:text-secondary-700" />
        </Link>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
