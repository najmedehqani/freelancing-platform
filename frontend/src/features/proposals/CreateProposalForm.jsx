import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../ui/Button";

const schema = yup
  .object({
    description: yup
      .string()
      .required("توضیحات ضروری است")
      .min(15, "حداقل 15 کاراکتر را وارد کنید"),
    price: yup
      .number()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value,
      )
      .required("قیمت ضروری است.")
      .typeError("قیمت باید عدد باشد.")
      .positive("قیمت باید مثبت باشد.")
      .integer("قیمت باید عدد صحیح باشد."),
    duration: yup
      .number()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value,
      )
      .required("مدت زمان ضروری است.")
      .typeError("مدت زمان باید عدد باشد.")
      .positive("مدت زمان باید مثبت باشد.")
      .integer("مدت زمان باید عدد صحیح باشد."),
  })
  .required();

function CreateProposalForm({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const { createProposal, isCreating } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => onClose(),
      },
    );
  };

  return (
    <form className="space-y-8 " onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        isRequired
        errors={errors}
        disabled={isCreating}
      />
      <TextField
        label="قیمت"
        name="price"
        type="number"
        register={register}
        isRequired
        errors={errors}
        disabled={isCreating}
      />
      <TextField
        label="مدت زمان"
        name="duration"
        type="number"
        register={register}
        isRequired
        errors={errors}
        disabled={isCreating}
      />
      <Button
        variant="primary"
        type="submit"
        className="w-full"
        disabled={isCreating}
      >
        {isCreating ? <Loading width="50" height="25" /> : "تایید"}
      </Button>
    </form>
  );
}
export default CreateProposalForm;
