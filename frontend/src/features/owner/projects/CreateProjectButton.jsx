import { useState } from "react";
import useAuthGuard from "../../authentication/useAuthGuard";
import Modal from "../../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import Button from "../../../ui/Button";
import Loading from "../../../ui/Loading";

function CreateProjectButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { checkAccess, isLoading } = useAuthGuard();

  function handleClick() {
    if (checkAccess({ requiredRole: "OWNER" })) {
      setIsModalOpen(true);
    }
  }

  return (
    <>
      <Button onClick={handleClick} className="px-11 py-3" disabled={isLoading}>
        {isLoading ? <Loading width="50" height="25" /> : "ثبت پروژه"}
      </Button>
      <Modal
        title="اضافه کردن پروژه جدید"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <CreateProjectForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}

export default CreateProjectButton;
