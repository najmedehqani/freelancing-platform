import Table from "../../ui/Table";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import ButtonIcon from "../../ui/ButtonIcon";
import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/24/outline";
import DeleteResourceButton from "../../ui/DeleteResourceButton";
import useRemoveCategory from "./useRemoveCategory";
function CategoryRow({ category, index }) {
  const { title, englishTitle, description, tags, _id } = category;
  const { isDeleting, removeCategory } = useRemoveCategory();
  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{truncateText(englishTitle, 30)}</td>
      <td>{truncateText(description, 50)}</td>
      <td>
        <div className="flex items-center gap-1.5 flex-wrap max-w-[230px]">
          {(tags || []).map((tag, tagIndex) => (
            <span
              key={`${tag}-${tagIndex}`}
              className="badge badge--secondary text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <Link to={`/admin/categories/${_id}/edit`} aria-label={`ویرایش ${title}`}>
            <ButtonIcon variant="primary" className="p-1">
              <PencilIcon />
            </ButtonIcon>
          </Link>
          <DeleteResourceButton
            title={title}
            isDeleting={isDeleting}
            onDelete={(options) => removeCategory(_id, options)}
          />
        </div>
      </td>
    </Table.Row>
  );
}

export default CategoryRow;
