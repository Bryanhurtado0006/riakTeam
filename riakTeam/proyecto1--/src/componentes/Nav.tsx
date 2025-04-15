import { Link } from "react-router-dom";
import  "../nav.css" 

const Nav: React.FC = () => {
    return (
        <nav className="nav">
            <ul className="nav-lista">
                <li className="nav-i">
                    <Link to="/" className="nav-link">HOME</Link>
                </li>
                <li className="nav-i">
                    <Link to="/about" className="nav-link">ABOUT</Link>
                </li>

                <li className="nav-i">
          <Link to="/store" className="nav-link">TIENDA</Link> 
        </li>
                <li className="nav-i">
                    <Link to="/error" className="nav-link">ERROR</Link>
                </li>
                <li className="nav-i">
                    <Link to="/user/bryan" className="nav-link">USER</Link>
                </li>
                <li className="nav-i">
                    <Link to="/profile" className="nav-link">PROFILE</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;