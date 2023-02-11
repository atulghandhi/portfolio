import NavbarItem from "./navbar-item";
import {Link} from "react-router-dom";
import "../style/NavBar.css"

function Navbar() {
    return (
        <div className={'navbar'}>
            <ul>
                <li>
                    <Link to={'/'}> <NavbarItem itemText="Home"/> </Link>
                </li>
                <li>
                    <Link to={'/youtube'}> <NavbarItem itemText="Youtube"/> </Link>
                </li>
                <li>
                    <Link to={'/books'}> <NavbarItem itemText="Books"/> </Link>
                </li>
                <li>
                    <Link to={'/about'}> <NavbarItem itemText="About me"/> </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;