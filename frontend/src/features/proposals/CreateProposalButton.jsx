import { useState } from "react";
import useAuthGuard from "../authentication/useAuthGuard";
import Button from "../../ui/Button";
import Loading from "../../ui/Loading";
import CreateProposalForm from "./CreateProposalForm";
import Modal from "../../ui/Modal";

function CreateProposalButton({ projectId, titleProject }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { checkAccess, isLoading } = useAuthGuard();

  function handleClick() {
    if (checkAccess({ requiredRole: "FREELANCER" })) {
      setIsModalOpen(true);
    }
  }

  return (
    <>
      <Button onClick={handleClick} className="px-11 py-3 w-full" disabled={isLoading}>
        {isLoading ? <Loading width="50" height="25" /> : "ارسال پروپزال"}
      </Button>
      <Modal
        title={`درخواست انجام پروژه ${titleProject}`}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <CreateProposalForm
          projectId={projectId}
            onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
}

export default CreateProposalButton;
