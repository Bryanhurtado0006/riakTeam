import { Link } from "react-router-dom";
import "./Navv.css"


const Nav: React.FC = () => {
    return (
        <nav className="nav">
            <ul className="nav-lista">
                <li className="nav-i">
                    <Link to="/" className="nav-link">HOME</Link>
                </li>
                <li className="nav-i">
                    <Link to="/InfoSobre" className="nav-link">Info sobre</Link>
                </li>
                <li className="nav-i">
                    <Link to="/paginas" className="nav-link">APIS Paginas</Link>
                </li>
                
                
            </ul>
        </nav>
    );
};

export default Nav;