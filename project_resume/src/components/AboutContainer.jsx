import "../sass/components/aboutcontainer.sass"

const AboutContainer = () => {
  return (
    <section className="container-main__about">
            <div className="title-box">
                <h2 className="title-box__title">Sobre Mim</h2>
            </div>
            <div className="content-box">
                <p className="content-box__text">
                    Sou Desenvolvedor Frontend que busca sua primeira oportunidade no
                    mercado. Diariamente, estudo para obter mais conhecimento e competência
                    para ingressar na área. Tenho o objetivo de desenvolver bons layouts de
                    página, aplicações, e boas soluções web.
                </p>
            </div>
        </section>
  );
};

export default AboutContainer