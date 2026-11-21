import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import ConfirmDelete from "./ConfirmDelete";
import Modal from "./Modal";

export default function DeleteResourceButton({
  title,
  resourceName = title,
  isDeleting,
  onDelete,
}) {
  const [open, setOpen] = useState(false);

  const handleConfirm = (e) => {
    e.preventDefault();
    onDelete({
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <>
      <ButtonIcon
        variant="red"
        className="p-1"
        onClick={() => setOpen(true)}
        aria-label={`حذف ${title}`}
      >
        <TrashIcon />
      </ButtonIcon>
      <Modal title={`حذف ${title}`} open={open} onClose={() => setOpen(false)}>
        <ConfirmDelete
          resourceName={resourceName}
          onClose={() => setOpen(false)}
          onConfirm={handleConfirm}
          disabled={isDeleting}
        />
      </Modal>
    </>
  );
}
