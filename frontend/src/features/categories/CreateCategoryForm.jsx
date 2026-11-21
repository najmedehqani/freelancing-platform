import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import TextField from "../../ui/TextField";
import TextArea from "../../ui/TextArea";
import { TagsInput } from "react-tag-input-component";
import FileInput from "../../ui/FileInput";
import { imageUrlToFile } from "../../utils/fileFormatter";
import ButtonIcon from "../../ui/ButtonIcon";
import useCreateCategory from "./useCreateCategory";
import useEditCategory from "./useEditCategory";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Loading from "../../ui/Loading";
const schema = yup
  .object({
    title: yup
      .string()
      .required("عنوان ضروری است")
      .min(5, "حداقل 5 کاراکتر را وارد کنید"),
    description: yup
      .string()
      .required("توضیحات ضروری است")
      .min(20, "حداقل 20 کاراکتر را وارد کنید"),
    englishTitle: yup
      .string()
      .required("عنوان انگلیسی ضروری است")
      .min(5, "حداقل 5 کاراکتر را وارد کنید")
      .matches(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "حروف انگلیسی کوچک، عدد و خط تیره استفاده کنید",
      ),
    tags: yup
      .array()
      .required("خدمات ضروری هستند")
      .min(1, "انتخاب حداقل یک خدمات ضروری است"),
    coverImage: yup.mixed().required("کاور دسته بندی الزامی است"),
  })
  .required();
const VALID_IMAGE_TYPES = ["image/jpeg", "image/png"];
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
function CreateCategoryForm({ categoryToEdit = {} }) {
  const navigate = useNavigate();
  const { isCreating, createCategory } = useCreateCategory();
  const { isEditing, editCategory } = useEditCategory();
  const isSubmitting = isCreating || isEditing;
  const { _id: editId } = categoryToEdit;
  const isEditSession = Boolean(editId);
  const [coverImageUrl, setCoverImageUrl] = useState(
    categoryToEdit?.coverImageUrl || null,
  );
  const { title, description, englishTitle, tags } = categoryToEdit;
  const editValues = isEditSession
    ? {
        title,
        description,
        englishTitle,
        tags: tags || [],
      }
    : {
        tags: [],
      };
  const {
    control,
    setValue,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: editValues,
  });
  const onSubmit = (data) => {
    const formData = new FormData();

    for (const key in data) {
      if (key === "tags") {
        formData.append(key, JSON.stringify(data[key]));
      } else {
        formData.append(key, data[key]);
      }
    }

    if (isEditSession) {
      editCategory(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            reset();
            setCoverImageUrl(null);
            navigate("/admin/categories");
          },
        },
      );
    } else {
      createCategory(formData, {
        onSuccess: () => {
          reset();
          setCoverImageUrl(null);
          navigate("/admin/categories");
        },
      });
    }
  };
  const handleCoverImageChange = (event, onChange) => {
    const file = event.target.files[0];
    if (!file) return;
    event.target.value = "";
    if (!VALID_IMAGE_TYPES.includes(file.type)) {
      toast.error("لطفاً فقط فایل PNG یا JPG انتخاب کنید");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      toast.error("حجم تصویر نباید بیشتر از 5 مگابایت باشد");
      return;
    }
    onChange(file);
    setCoverImageUrl(URL.createObjectURL(file));
  };
  useEffect(() => {
    if (editId && categoryToEdit?.coverImageUrl) {
      imageUrlToFile(categoryToEdit?.coverImageUrl)
        .then((file) => {
          setValue("coverImage", file, { shouldValidate: true });
        })
        .catch(() => {
          toast.error("دریافت تصویر ناموفق بود.");
          setCoverImageUrl(null);
        });
    }
  }, [editId,setValue]);

  useEffect(() => {
    return () => {
      if (coverImageUrl && coverImageUrl.startsWith("blob:")) {
        URL.revokeObjectURL(coverImageUrl);
      }
    };
  }, [coverImageUrl]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="title"
        label="عنوان"
        register={register}
        errors={errors}
        isRequired
        disabled={isSubmitting}
      />
      <TextField
        name="englishTitle"
        label="عنوان انگلیسی"
        register={register}
        errors={errors}
        isRequired
        dir="ltr"
        disabled={isSubmitting}
      />
      <TextArea
        name="description"
        label="توضیحات"
        register={register}
        errors={errors}
        isRequired
        disabled={isSubmitting}
      />
      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <div className={`relative ${errors.tags ? "tags-error" : ""}`}>
            <label className="mb-2 block text-secondary-700">
              خدمات قابل ارائه<span className="text-error">*</span>
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
        name="coverImage"
        control={control}
        render={({ field: { onChange, ref, onBlur } }) => {
          return (
            <FileInput
              ref={ref}
              onBlur={onBlur}
              name="coverImage"
              errors={errors}
              disabled={isSubmitting}
              label="انتخاب کاور دسته بندی"
              onChange={(event) => handleCoverImageChange(event, onChange)}
            />
          );
        }}
      />
      {coverImageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img
            src={coverImageUrl}
            alt="cover-image"
            className="object-cover object-center w-full h-full"
          />
          <ButtonIcon
          aria-label="حذف تصویر"
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null, { shouldValidate: true });
            }}
            variant="red"
            className="absolute left-1 top-1 w-6 h-6"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}
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

export default CreateCategoryForm;
