import { useForm } from "react-hook-form";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../../ui/Loading";
import Button from "../../../ui/Button";
import SelectForm from "../../../ui/SelectForm";
const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeProposalStatus({ proposal, onClose }) {
  const { _id: proposalId, status } = proposal;
  const { id: projectId } = useParams();

  const {
    handleSubmit,
    formState: { isDirty },
    control,
  } = useForm({ defaultValues: { status } });

  const { changeProposalStatus, isUpdating } = useChangeProposalStatus();

  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    changeProposalStatus(
      { proposalId, projectId, ...data }, // {projectId, proposalId, status}
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <SelectForm
        name="status"
        label="تغییر وضعیت"
        options={options}
        disabled={isUpdating}
        placeholder="یک وضعیت را انتخاب کنید"
        control={control}
      />
      <Button
        variant="primary"
        type="submit"
        className="w-full"
        disabled={!isDirty || isUpdating}
      >
        {isUpdating ? <Loading width="50" height="25" /> : "تایید"}
      </Button>
    </form>
  );
}
export default ChangeProposalStatus;
