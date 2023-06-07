import { Link } from "react-router-dom"
import '../index.css';

export default function Nav() {
    return (
        <nav className="bg-gray-800 lg:flex">
            {/*Navigation contents */}
            {/*Navigation contents */}
        <ul className="lg:flex">
            <li className="text-white p-4   text-[18px]"><Link to="/">Home</Link></li>
            <li className="text-white p-4   text-[18px]"><Link to="/about">About</Link></li>
            <li className="text-white p-4   text-[18px]"><Link tos="/contact">Contact</Link></li>
            <li className="text-white p-4   text-[18px]"><Link to="/projects"> Project</Link></li>
            <li className="text-white p-4   text-[18px]"><Link to="/products">Services</Link></li>
        </ul>

        {/* portfolio logo || name */}
        {/* portfolio logo || name */}
        <div className="ml-auto "> 
            <p className="text-white text-[18px] p-4">PORTFOLIO</p>
        </div>

        </nav>
    );
}