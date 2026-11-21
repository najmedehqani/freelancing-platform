import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import ChangeUserStatus from "./ChangeUserStatus";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";

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

function UserRow({ user, index }) {
  const [open, setOpen] = useState(false);
  const { status, email, name, role, phoneNumber } = user;
  const statusInfo = statusStyle[status] ?? {
    label: "نامشخص",
    className: "badge--secondary",
  };
  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{toPersianNumbers(phoneNumber)}</td>
      <td>{role}</td>
      <td>
        <span className={`badge ${statusInfo.className}`}>
          {statusInfo.label}
        </span>
      </td>
      <td>
        <Modal
          title="تغییر وضعیت کاربر"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeUserStatus user={user} onClose={() => setOpen(false)} />
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
export default UserRow;
