import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import LoadingLogo from "../assets/loadingLogo.json";
import ErrorImage from "../assets/errorDino.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import useProjectStore from "../appStore";

export default function Viewport() {
    const currentProject = useProjectStore((state) => state.project);
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const logoOptions = {
        loop: true,
        autoplay: true,
        animationData: { LoadingLogo },
    };
    const errorOptions = {
        loop: true,
        autoplay: true,
        animationData: ErrorImage,
    };

    const fetchProjects = async () => {
        try {
            const response = await fetch(
                `http://localhost:5001/api/projects/${currentProject}`
            );
            const json = await response.json();
            setProjects(json);
            setLoading(false);
            return;
        } catch (err) {
            console.error(err.message);
            setError(true);
        }
        return;
    };

    useEffect(() => {
        fetchProjects();
        return;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentProject]);

    let showContent;

    if (loading) {
        showContent = <Lottie options={logoOptions} />;
    } else if (error) {
        showContent = <Lottie options={errorOptions} />;
    } else {
        showContent = (
            <div className="container p-3" key={projects}>
                {/* image */}
                <img
                    src={projects.imgurl}
                    alt="weather app"
                    className="rounded-3"
                />
                {/* title */}
                <h5 className="viewport__title text-center mt-4 fw-bold">
                    {projects.title},{/* type */}
                    <span className="fw-normal ms-2 text-capitalize">
                        {projects.type}
                    </span>
                </h5>
                {/* map through languages */}
                <ul className="viewport__skills list-unstyled text-center list-inline">
                    {projects.languages.map((language) => (
                        <li
                            key={language}
                            className="list-inline-item bg-blue text-off-black m-2 px-3 rounded-pill"
                        >
                            {language.toUpperCase()}
                        </li>
                    ))}
                </ul>
                {/*description */}
                <p className="viewport__description">{projects.description}</p>
                {!projects.processurl ? (
                    <div className="viewport__links d-flex justify-content-between text-center">
                        <a
                            href={projects.codeurl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none text-blue fw-bold"
                        >
                            See the code
                            <FontAwesomeIcon
                                icon={faLongArrowAltRight}
                                className="ms-2"
                            />
                        </a>
                        <a
                            href={projects.siteurl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none text-blue fw-bold"
                        >
                            See the site
                            <FontAwesomeIcon
                                icon={faLongArrowAltRight}
                                className="ms-2"
                            />
                        </a>
                    </div>
                ) : (
                    <div id="viewport__links d-flex justify-content-between">
                        <a
                            href={projects.processurl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-decoration-none text-blue fw-bold "
                        >
                            See the process
                            <FontAwesomeIcon
                                icon={faLongArrowAltRight}
                                className="ms-2"
                            />
                        </a>
                    </div>
                )}
            </div>
        );

        return (
            <div className="viewport bg-off-white col-4 col-xl-3 border-start d-flex justify-content-center align-items-center position-relative">
                {showContent}
            </div>
        );
    }
}
