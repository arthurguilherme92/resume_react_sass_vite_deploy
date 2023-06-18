import {FaLinkedinIn, FaGithub, FaWhatsapp} from "react-icons/fa/";

import '../sass/components/socialmedia.sass'

const SocialMediaIcons = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/arthurguilherme92/"}, 
    { name: "github", icon: <FaGithub />, link: "https://github.com/arthurguilherme92"}, 
    { name: "whatsapp", icon: <FaWhatsapp />,  link: "https://wa.link/cxnxvq"} 
]

const SocialMedia = () => {
  return (
    <div className="container-sidebar__socialmedia-box">
        {
            SocialMediaIcons.map((network) => (
                <a target="_blank" href={network.link} key={network.name} id={network.name} className="socialmedia-btn">
                    {network.icon}
                </a>
            ))
        }
    </div>
  )
}

export default SocialMedia