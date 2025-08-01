import { NavLink } from 'react-router-dom';
import '../../styles/Header.css'

function Header() {
    return (
        <div className="header-container">
            <div className='logo'>
            </div>

            <nav className="navbar">
                <ul>
                    <li><NavLink to="/" className="nav-link">HOME</NavLink></li>
                    <li><NavLink to="/resume" className="nav-link">RESUME</NavLink></li>
                    <li><NavLink to="/portfolio" className="nav-link">PORTFOLIO</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header