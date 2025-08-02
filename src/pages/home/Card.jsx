import '../../styles/home/Card.css';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import picture from '../../assets/images/pic.jpg';

function Card({ onContactClick }) {
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
                    <h2 className='subtitle'>Frontend Developer</h2>
                    <p className='text'>
                        I am a Computer Engineering student with a keen interest in self-taught and continuous learning in various areas, including web application development with experience building web applications using frameworks such as React and Vue.js and runtime environments such as Node.js.
                    </p>
                    <button className='contact-button' onClick={onContactClick}>
                        Let's work together!
                    </button>
                </div>
                <img src={picture} alt="image" />
            </div>
        </div>
    );
}

export default Card;