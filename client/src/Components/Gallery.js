import Favorites from "./Pages/Favorites";
import All from "./Pages/All";
import Web from "./Pages/Web";
import Apps from "./Pages/Apps";
import Designs from "./Pages/Designs";
import { Route, Routes } from "react-router-dom";

export default function Gallery() {
    return (
        <div className="gallery bg-off-white py-4 col-md-6 col-xl-7 d-flex justify-content-center align-items-center">
            <Routes>
                <Route path="/" element={<Favorites />} />
                <Route path="/All" element={<All />} />
                <Route path="/web" element={<Web />} />
                <Route path="/apps" element={<Apps />} />
                <Route path="/designs" element={<Designs />} />
            </Routes>
        </div>
    );
}
