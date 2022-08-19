import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Loading from "../../assets/loadingLogo.json";
import Error from "../../assets/errorDino.json";
import useProjectStore from "../../appStore";

export default function Web() {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const updateProject = useProjectStore((state) => state.updateProject);

    const logoOptions = {
        loop: true,
        autoplay: true,
        animationData: Loading,
    };
    const errorOptions = {
        loop: true,
        autoplay: true,
        animationData: Error,
    };

    const fetchProjects = async () => {
        try {
            const response = await fetch(
                "https://millerprojectdatabase.herokuapp.com/api/projects/web"
            );
            const json = await response.json();
            setProjects(json);
            setLoading(false);
            return;
        } catch (err) {
            console.error(err.message);
            setError(true);
        }
    };

    const handleClick = (event, key) => {
        updateProject(key);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    let showContent;

    if (loading) {
        showContent = (
            <div>
                <Lottie options={logoOptions} height={60} width={200} />
            </div>
        );
    } else if (error) {
        showContent = (
            <div>
                <Lottie options={errorOptions} />
            </div>
        );
    } else {
        showContent = projects.map((project) => (
            <div
                key={project._id}
                onClick={(event) => handleClick(event, project._id)}
                className="gallery__card col-3 col-sm-1 col-md-4 me-1 mb-2 rounded-3 overflow-hidden border-off-black border position-relative"
            >
                <div className="gallery__card--top">
                    <img src={project.imgurl} alt="Weather" className="w-100" />
                </div>
                <div className="gallery__card--bottom text-center bg-white">
                    <h2 className="fw-bold pt-2 mb-3 m-auto">
                        {project.title}
                    </h2>
                    <div className="w-100 h-25 mb-2">
                        <h3 className="fw-bold m-0">Type</h3>
                        <span className="text-capitalize">{project.type}</span>
                    </div>
                    <div className="bg-white h-75 w-100 px-1">
                        <h3 className="fw-bold m-0">Skills Used</h3>
                        <ul className="list-unstyled">
                            {project.languages.map((language) => (
                                <li
                                    key={language}
                                    className="d-inline-block me-1"
                                >
                                    {language.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ));

        return (
            <div className="w-100 h-100 d-flex flex-wrap justify-content-evenly align-items-center">
                {showContent}
            </div>
        );
    }
}
