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
                <p className="content-box__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </section>
  );
};

export default AboutContainer