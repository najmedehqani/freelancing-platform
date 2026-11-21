export default function toLocalDateShort(date) {
  if (!date) return "";
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return "";
  return new Date(date).toLocaleDateString("fa-IR", {});
}
