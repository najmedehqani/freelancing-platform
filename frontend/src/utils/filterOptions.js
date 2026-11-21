export const sortOptions = [
  { label: "جدیدترین پروژه ها", value: "latest" },
  { label: "قدیمی ترین پروژه ها", value: "earliest" },
];

export const statusOptions = [
  { label: "همه", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];

export const getCategoryOptions = (transformedCategories = []) => [
  { value: "ALL", label: "همه پروژه ها" },
  ...transformedCategories,
];