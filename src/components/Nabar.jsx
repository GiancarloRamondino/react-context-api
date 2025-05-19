import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Homepage</NavLink>
                </li>
                <li>
                    <NavLink to="/personaggi">Personaggi</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Contatti</NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;