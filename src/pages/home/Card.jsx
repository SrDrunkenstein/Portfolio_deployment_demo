import '../../styles/home/Card.css'

import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import picture from '../../assets/images/ex.jpg'

function Card() {
    return (
        <div className="card">
            <ul className='social-list'>
                <li><FaFacebookF /></li>
                <li><FaGithub /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
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
    );
}

export default Card