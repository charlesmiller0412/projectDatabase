import { NavLink } from "react-router-dom";

export default function Links() {
    return (
        <ul className="links w-100 list-unstyled">
            <NavLink to="/" className="py-3">
                Favorites
            </NavLink>
            <NavLink to="/all" className="py-3">
                All
            </NavLink>
            <NavLink to="/web" className="py-3">
                Web
            </NavLink>
            <NavLink to="/apps" className="py-3">
                Applications
            </NavLink>
            <NavLink to="/designs" className="py-3">
                Designs
            </NavLink>
        </ul>
    );
}
