import '../../styles/home/Card.css'

import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import picture from '../../assets/images/ex.jpg'

function Card() {
    return (
        <div className='body'>
            <div className="card">
                <ul className='social-list'>
                    <a href='https://www.facebook.com/share/1AxLjcxfCu/?mibextid=wwXIfr'><li><FaFacebookF /></li></a>
                    <a href='https://github.com/SrDrunkenstein'><li><FaGithub /></li></a>
                    <a href='https://www.instagram.com/joseabrahamvaldezcruz/'><li><FaInstagram /></li></a>
                    <a href='https://www.linkedin.com/in/jose-abraham-valdez-cruz-a20394356/'><li><FaLinkedin /></li></a>
                </ul>
                <div className='info'>
                    <h1 className='title'>
                        I'm web developer Abraham Cruz
                    </h1>
                    <p className='text'>
                        Computer Engineering student with a keen interest in self-directed and continuous
                        learning in various areas, including web application development, electronics, automation,
                        and firmware for projects that integrate software and hardware.
                    </p>
                </div>
                <img src={picture} alt="image" />
            </div>
        </div>
    );
}

export default Card