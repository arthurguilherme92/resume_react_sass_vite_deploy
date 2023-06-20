import "../sass/components/technologiescontainer.sass";

const TechnologiesContainer = () => {
  return (
    <section className="container-main__skills">
            <div className="title-box">
                <h2 className="title-box__title">Skills</h2>
                <span class="title-box__divisor">divisor</span>
            </div>
            <div className="content-box">
                <div className="content-box__technologies-box">
                    <div className="technology">
                        <div className="technology__icon">icon</div>
                        <div className="technology__text">
                            <h3>Technology Text</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default TechnologiesContainer