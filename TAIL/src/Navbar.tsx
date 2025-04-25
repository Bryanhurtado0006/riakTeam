import { Link } from "react-router-dom";


const Navbar:React.FC=()=>{
    return(
        <div>
                <nav className="bg-white-200" p-4>
                    <ul className="space-x-4  text-black">
                        <li className="hover:text-blue-300">Home</li>
                        <li className="hover:text-blue-300">Contact</li>
                        <li className="hover:text-blue-300">About</li>
                    </ul>
                </nav>
        </div>
    );

}

export default Navbar;