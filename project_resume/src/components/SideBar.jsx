import InformationContainer from './InformationContainer'
import SocialMedia from './SocialMedia'
import Arthur from '../assets/Arthur_Guilherme_front_end_developer.jpg'
import Curriculum from '../assets/Curriculum Vitae - Arthur Guilherme -.pdf'
const SideBar = () => {
  return (
    <div id="container-sidebar">
        <div className="container-sidebar__image">
            <img src={Arthur} alt="Arthur Guilherme - Frontend Developer" />
        </div>
        <div className="container-sidebar__frontend">
            <p>Frontend Developer</p>
        </div>
        <SocialMedia />
        <InformationContainer />
        <a href={Curriculum} download className="btn">
            Curriculum Download
        </a>
    </div>
  )
}

export default SideBar