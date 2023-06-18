import InformationContainer from './InformationContainer'
import SocialMedia from './SocialMedia'

const SideBar = () => {
  return (
    <div id="container-sidebar">
        <div className="container-sidebar__image">
            <p>Image Here!</p>
        </div>
        <div className="container-sidebar__frontend">
            <p>Frontend Developer</p>
        </div>
        <SocialMedia />
        <InformationContainer />
        <a href="" className="btn">
            Curriculum Download
        </a>
    </div>
  )
}

export default SideBar