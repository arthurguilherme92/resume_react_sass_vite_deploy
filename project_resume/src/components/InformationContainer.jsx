import  {AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import "../sass/components/informationcontainer.sass"

const InformationsIcons = [
    {name: "email", icon: <AiOutlineMail />},
    {name: "environment", icon: <AiFillEnvironment />},
]

const InformationContainer = () => {
  return (
    <section id="information-container">
        <div className="information-card">
            <AiOutlineMail id="email-icon"/>
            <div className='information-card__text'>
                <h3>E-mail</h3>
                <p>arthurguilhermecontato@gmail.com</p>
            </div>
        </div>
        <div className="information-card">
            <AiFillEnvironment id="pin-icon"/>
            <div className='information-card__text'>
                <h3>Endereço</h3>
                <p>Braga - Vila Nova de Famalicão</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer