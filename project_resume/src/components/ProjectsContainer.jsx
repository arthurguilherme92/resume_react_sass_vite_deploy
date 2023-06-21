import "../sass/components/projectscontainer.sass";

const ProjectsContainer = () => {
    return (
        <section className="container-main__projects">
        <div className="title-box">
            <h2 className="title-box__title">Projetos</h2>        </div>
        <div className="content-box">
            <p className="title-cta">
                Veja em meu website os projetos que desenvolvi.
            </p>
        </div>
        <a href="" className="btn-website">
            Ver Projetos
        </a>
        </section>
    );
  };
  
  export default ProjectsContainer