import useProjects from "./useProjects";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
import EmptyState from "../../ui/EmptyState";
import ProjectsTableSkeleton from "./ProjectsTableSkeleton";

function ProjectsTable() {
  const { isLoading, projects, isError } = useProjects();

  if (isLoading) return <ProjectsTableSkeleton />;
  if (isError)
    return <EmptyState description="مشکلی در بارگذاری پروژه ها پیش آمد." />;

  if (!projects?.length) return <EmptyState description="پروژه ای یافت نشد." />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default ProjectsTable;
