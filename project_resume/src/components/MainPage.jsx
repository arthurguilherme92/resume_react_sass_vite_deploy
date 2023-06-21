import AboutContainer from "./AboutContainer"
import TechnologiesContainer from "./TechnologiesContainer"
import ProjectsContainer from "./ProjectsContainer"

import "../sass/components/mainpage.sass"

const MainPage = () => {
  return (
    <div id="container-mainpage">
        <AboutContainer />
        <TechnologiesContainer />
        <ProjectsContainer />
    </div>
  );
};

export default MainPage;