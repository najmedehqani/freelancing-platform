import { useState } from "react";
import ChangeProposalStatus from "./ChangeProposalStatus";
import Table from "../../../ui/Table";
import truncateText from "../../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../utils/toPersianNumbers";
import Modal from "../../../ui/Modal";

// 0, 1, 2

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { status, user, description, duration, price } = proposal;
  const [open, setOpen] = useState(false);
  const statusInfo = statusStyle[status] ?? {
    label: "نامشخص",
    className: "badge--secondary",
  };
  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{user?.name || "-"}</td>
      <td>
        <p>{truncateText(description, 50)}</p>
      </td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={`badge ${statusInfo.className}`}>{statusInfo.label}</span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت درخواست"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposal={proposal}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button
          onClick={() => setOpen(true)}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
}
export default ProposalRow;
