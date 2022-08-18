import Logo from "../../assets/logo.png";
import Links from "./Links";

export default function Sidebar() {
    return (
        <div className="sidebar col-md-2 text-center">
            <img src={Logo} alt="logo" className="w-75 mt-5" />
            <h1 className="text-off-white text-uppercase my-4 fw-bold">
                Project Database
            </h1>
            <h2 className="w-75 fw-bold text-off-white m-auto border-bottom text-uppercase pb-2 mt-5 mb-2">
                Select a type
            </h2>
            <Links />
        </div>
    );
}
