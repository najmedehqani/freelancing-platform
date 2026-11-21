import ProjectsContainer from "../features/projects/ProjectsContainer";
import Header from "../components/Header"
import Footer from "../components/Footer";

function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header/>
      <div className="container xl:max-w-screen-xl flex-1">
        <ProjectsContainer />
      </div>
      <Footer/>
    </div>
  );
}

export default Projects;
