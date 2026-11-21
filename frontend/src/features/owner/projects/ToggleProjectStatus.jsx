import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../../ui/Loading";
import Toggle from "../../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const { status,_id } = project;
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({
      id:_id,
      data: { status: newStatus },
    });
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} variant="primary" />
      ) : (
        <Toggle
          enabled={status === "OPEN"}
          label={status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}
export default ToggleProjectStatus;
