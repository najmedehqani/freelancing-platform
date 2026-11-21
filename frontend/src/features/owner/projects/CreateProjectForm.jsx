import { TagsInput } from "react-tag-input-component";
import TextField from "../../../ui/TextField";
import { Controller, useForm } from "react-hook-form";
import DatePickerField from "../../../ui/DatePickerField";
import useCategories from "../../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../../ui/Loading";
import useEditProject from "./useEditProject";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../ui/Button";
import SelectForm from "../../../ui/SelectForm";

const schema = yup
  .object({
    title: yup
      .string()
      .required("عنوان ضروری است")
      .min(10, "حداقل 10 کاراکتر را وارد کنید"),
    description: yup
      .string()
      .required("توضیحات ضروری است")
      .min(15, "حداقل 15 کاراکتر را وارد کنید"),
    budget: yup
      .number()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value,
      )
      .required("بودجه ضروری است")
      .typeError("بودجه باید عدد باشد")
      .positive("بودجه باید مثبت باشد")
      .integer("بودجه باید عدد صحیح باشد"),
    category: yup.string().required("انتخاب دسته‌بندی ضروری است."),
    tags: yup
      .array()
      .min(1, "انتخاب حداقل یک مهارت ضروری است")
      .required("مهارت‌ها ضروری هستند"),

    deadline: yup
      .date()
      .typeError("لطفاً یک تاریخ معتبر انتخاب کنید")
      .required("انتخاب ددلاین ضروری است")
      .min(new Date(), "ددلاین باید در آینده باشد"),
  })
  .required();

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const { title, description, budget, category, deadline, tags } =
    projectToEdit;
  const editValues = isEditSession
    ? {
        title,
        description,
        budget,
        tags: tags || [],
        deadline: deadline ? new Date(deadline) : null,
        category: category?._id,
      }
    : {
        tags: [],
        deadline: null,
      };

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: editValues,
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { editProject, isEditing } = useEditProject();
  const isSubmitting = isCreating || isEditing;
  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: data.deadline?.toISOString(),
    };
    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            reset();
            onClose();
          },
        },
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          reset();
          onClose();
        },
      });
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان"
        name="title"
        register={register}
        isRequired
        errors={errors}
        disabled={isSubmitting}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        isRequired
        errors={errors}
        disabled={isSubmitting}
      />
      <TextField
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        isRequired
        errors={errors}
        disabled={isSubmitting}
      />
      <SelectForm
        label="دسته بندی"
        isRequired
        name="category"
        control={control}
        disabled={isSubmitting}
        options={categories}
        placeholder="یک دسته بندی را انتخاب کنید"
      />
      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <div className={`relative ${errors.tags ? "tags-error" : ""}`}>
            <label className="mb-2 block text-secondary-700">
              مهارت های مورد نیاز <span className="text-error">*</span>
            </label>
            <TagsInput
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              disabled={isSubmitting}
            />
            {errors.tags && (
              <span className="text-red-600 absolute right-0 -bottom-5 text-xs">
                {errors.tags.message}
              </span>
            )}
          </div>
        )}
      />
      <Controller
        name="deadline"
        control={control}
        render={({ field }) => (
          <DatePickerField
            value={field.value}
            onChange={(date) => field.onChange(date ? date.toDate() : null)}
            onBlur={field.onBlur}
            label="ددلاین"
            errors={errors}
            isRequired
            name="deadline"
            disabled={isSubmitting}
          />
        )}
      />
      <Button
        variant="primary"
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Loading width="50" height="25" /> : "تایید"}
      </Button>
    </form>
  );
}
export default CreateProjectForm;
