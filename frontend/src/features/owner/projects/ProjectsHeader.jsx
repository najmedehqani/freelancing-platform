import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import CreateProjectForm from "./CreateProjectForm";
import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";

function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8 ">
      <h1 className="font-black text-secondary-700 text-xl">پروژه های شما</h1>
      <Modal
        title="اضافه کردن پروژه جدید"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <Button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2"
        aria-label="ایجاد پروژه"
      >
        <HiOutlinePlus className="w-5 h-5" />
        <span className="hidden md:block">ایجاد پروژه</span>
      </Button>
    </div>
  );
}
export default ProjectsHeader;
