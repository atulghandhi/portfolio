import NavbarItem from "./navbar-item";
import {Link} from "react-router-dom";
import "../style/NavBar.css"
import NavbarName from "./navbar-name";

function Navbar() {
    return (
        <div className={'navbar'}>
            <ul>
                <li>
                    <Link to={'/'}> <NavbarName/> </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={'/youtube'}> <NavbarItem itemText="Youtube"/> </Link>
                </li>
                <li>
                    <Link to={'/books'}> <NavbarItem itemText="Books"/> </Link>
                </li>
                <li>
                    <Link to={'/about'} className='special-item'> <NavbarItem itemText="About me"/> </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;