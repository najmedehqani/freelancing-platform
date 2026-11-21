import ProjectRow from "./ProjectRow";
import EmptyState from "../../../ui/EmptyState";
import useOwnerProjects from "./useOwnerProjects";
import Table from "../../../ui/Table";
import ProjectsTableSkeleton from "./ProjectsTableSkeleton";

function ProjectsTable() {
  const { isLoading, projects, isError } = useOwnerProjects();

  if (isLoading) return <ProjectsTableSkeleton />;
  if (isError)
    return <EmptyState description="مشکلی در بارگذاری پروژه ها پیش آمد." />;

  if (!projects?.length)
    return <EmptyState description="هنوز هیچ پروژه ای ثبت نشده است." />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>مهارت های مورد نیاز</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
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
