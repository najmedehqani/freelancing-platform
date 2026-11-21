import ProjectsList from "./ProjectsList";
import Search from "../../ui/Search";
import ProjectFilters from "./ProjectFilters";
import useProjects from "./useProjects";
import { useSearchParams } from "react-router-dom";
import ProjectFilterButtons from "./ProjectFilterButtons";
function ProjectsContainer() {
  const { isLoading, projects, isError } = useProjects();
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  return (
    <div className="mt-12 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-800 items-center mb-12">
        <h1 className="text-lg font-bold">لیست پروژه ها</h1>
        <div className="lg:col-span-2 lg:justify-self-center">
          <Search className="lg:w-[460px] lg:focus-within:w-[480px]" />
        </div>
        <ProjectFilterButtons />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
          <ProjectFilters />
        </div>
        <div className="col-span-1 lg:col-span-8 xl:col-span-9">
          {searchValue && !isLoading && (
            <div className="mb-6 text-secondary-700">
              {projects?.length ? (
                <>
                  {`نشان دادن ${projects.length} نتیجه برای `}
                  <span className="font-bold">&quot;{searchValue}&quot;</span>
                </>
              ) : null}
            </div>
          )}
          <ProjectsList
            projects={projects}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsContainer;
