import "../sass/components/projectscontainer.sass";

const ProjectsContainer = () => {
    return (
        <section className="container-main__projects">
        <div className="title-box">
            <h2 className="title-box__title">Projetos</h2>        </div>
        <div className="content-box">
            <p className="title-project">
                Title Project
            </p>
            <p className="about-project">
                About Project
            </p>
        </div>
        <a href="" className="btn">
            Ver Projetos
        </a>
    </section>
    );
  };
  
  export default ProjectsContainer