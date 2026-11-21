import { useForm} from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../../ui/Loading";
import useChangeUserStatus from "./useChangeUserStatus";
import SelectForm from "../../../ui/SelectForm";
import Button from "../../../ui/Button";

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

function ChangeUserStatus({ user, onClose }) {
  const { _id: userId, status } = user;
  const {
    handleSubmit,
    control,
    formState: { isDirty },
  } = useForm({ defaultValues: { status } });
  const { changeUserStatus, isUpdating } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data }, // {userId, data: {status:0, 1, 2}}
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <SelectForm
        name="status"
        label="تغییر وضعیت"
        control={control}
        options={options}
        isRequired
        disabled={isUpdating}
        placeholder="یک وضعیت را انتخاب کنید"
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
export default ChangeUserStatus;
