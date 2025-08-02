import '../../styles/home/Card.css'

import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import picture from '../../assets/images/pic.jpeg'

function Card() {
    return (
        <div className='body'>
            <div className="card">
                <ul className='social-list'>
                    <li>
                        <a href='https://www.facebook.com/share/1AxLjcxfCu/?mibextid=wwXIfr' target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className='social-icon' />
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/SrDrunkenstein' target="_blank" rel="noopener noreferrer">
                            <FaGithub className='social-icon' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/joseabrahamvaldezcruz/' target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='social-icon' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/jose-abraham-valdez-cruz-a20394356/' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='social-icon' />
                        </a>
                    </li>
                </ul>

                <div className='info'>
                    <h1 className='title'>
                        José Abraham Valdez Cruz
                    </h1>
                    <p className='text'>
                        Soy un estudiante de Ingeniería en
                        Computación con gran interés en el
                        aprendizaje autodidacta y continuo
                        en diversas áreas, incluyendo el
                        desarrollo de aplicaciones web,
                        electrónica, automatización y
                        firmware para proyectos que integran
                        software y hardware.

                    </p>
                </div>
                <img src={picture} alt="image" />
            </div>
        </div>
    );
}

export default Card