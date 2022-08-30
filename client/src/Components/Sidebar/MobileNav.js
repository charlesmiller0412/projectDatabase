import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.png";
import Links from "./Links";

export default function MobileNav() {
    const [mobileNav, hideMobileNav] = useState(true);
    return (
        <div className="sidebar d-inline d-md-none col-md-2 text-center">
            <img src={Logo} alt="logo" className="w-25 mt-2" />
            <h1 className="text-off-white text-uppercase mt-3 fw-bold">
                Project Database
            </h1>
            <h2
                onClick={() => hideMobileNav(!mobileNav)}
                className="w-75 fw-bold text-off-white m-auto text-uppercase pb-2 d-flex align-content-center justify-content-center"
            >
                Select a type
                {mobileNav ? (
                    <FontAwesomeIcon icon={faSortDown} className="ms-2" />
                ) : (
                    <FontAwesomeIcon icon={faSortUp} className="ms-2 mt-1" />
                )}
            </h2>
            {mobileNav ? "" : <Links />}
        </div>
    );
}
