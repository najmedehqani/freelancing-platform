import Button from "./Button";

function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8 text-secondary-700">
        آیا از حذف {resourceName} مطمین هستید؟
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <Button
          variant="outline"
          className="flex-1"
          onClick={onClose}
          disabled={disabled}
        >
          لغو
        </Button>
        <Button
          onClick={onConfirm}
          disabled={disabled}
          className="flex-1 py-3"
          variant="danger"
        >
          تایید
        </Button>
      </div>
    </div>
  );
}
export default ConfirmDelete;
