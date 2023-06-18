const MainPage = () => {
  return (
    <div id="container-mainpage">
        <section className="container-main__about">
            <div className="title-box">
                <h2 className="title-box__title">Sobre Mim <span class="title-box__divisor">divisor</span></h2>
            </div>
            <div className="content-box">
                <p className="content-box__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <br />
                <p className="content-box__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </section>
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
        <section className="container-main__projects">
            <div className="title-box">
                <h2 className="title-box__title">Projetos</h2>
                <span class="title-box__divisor">divisor</span>
            </div>
            <div className="content-box">
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                    <li>Project 4</li>
                    <li>Project 5</li>
                </ul>
            </div>
            <button>Ver Projetos</button>
        </section>
    </div>
  )
}

export default MainPage