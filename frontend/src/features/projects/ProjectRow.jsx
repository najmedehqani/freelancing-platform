import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateProposalForm from "../proposals/CreateProposalForm";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);
  const statusInfo = projectStatus[status] ?? {
    label: "نامشخص",
    className: "badge--secondary",
  };
  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{toPersianNumbersWithComma(budget)}</td>
      <td>{toLocalDateShort(deadline)}</td>
      <td>
        <span className={`badge ${statusInfo.className}`}>
          {statusInfo.label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title={`درخواست انجام پروژه ${title}`}
        >
          <CreateProposalForm
            projectId={project._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button
          onClick={() => setOpen(true)}
          aria-label={`ثبت درخواست برای ${title}`}
          type="button"
        >
          <MdAssignmentAdd className="w-5 h-5 text-secondary-500 hover:text-secondary-600" />
        </button>
      </td>
    </Table.Row>
  );
}
export default ProjectRow;
