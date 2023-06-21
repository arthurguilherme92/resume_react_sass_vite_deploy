import "../sass/components/technologiescontainer.sass";

import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiSass,
    DiReact
 } from 'react-icons/di';

 import { SiTypescript } from 'react-icons/si';

 const technologies = [
    {id: "html5", name: "html5", icon: <DiHtml5/>},
    {id: "css3", name: "css3", icon: <DiCss3/>},
    {id: "javascript", name: "javascript", icon: <DiJavascript1/>},
    {id: "sass", name: "sass", icon: <DiSass/>},
    {id: "react", name: "react", icon: <DiReact/>},
    {id: "typescript", name: "typescript", icon: <SiTypescript/>},
 ]

const TechnologiesContainer = () => {
  return (
    <section className="container-main__skills">
            <div className="title-box">
                <h2 className="title-box__title">Skills</h2>
            </div>
            <div className="content-box">
                <div className="skills-grid">
                    {technologies.map((technology) => (
                        <div id={technology.id} key={technology.id} className="skills-grid__card">
                            {technology.icon}
                            <div className="skills-grid__card__info">
                                <h3 className="card__info__title">{technology.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  );
};

export default TechnologiesContainer