import ProjectDetailsContainer from "../features/projects/ProjectDetailsContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
function ProjectDetails() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container xl:max-w-screen-xl flex-1">
        <ProjectDetailsContainer />
      </div>
      <div className="hidden sm:block">
        <Footer />
      </div>
    </div>
  );
}

export default ProjectDetails;
