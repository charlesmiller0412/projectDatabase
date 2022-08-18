import Sidebar from "./Sidebar/Sidebar";
import Gallery from "./Gallery";
import Viewport from "./Viewport";

export default function Content() {
    return (
        <div className="content bg-blue d-flex">
            <Sidebar />
            <Gallery />
            <Viewport />
        </div>
    );
}
