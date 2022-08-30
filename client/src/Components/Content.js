import Sidebar from "./Sidebar/Sidebar";
import Gallery from "./Gallery";
import Viewport from "./Viewport";
import MobileNav from "./Sidebar/MobileNav";

export default function Content() {
    return (
        <div className="content bg-blue d-flex flex-column flex-md-row position-relative">
            <Sidebar />
            <MobileNav />
            <Gallery />
            <Viewport />
        </div>
    );
}
