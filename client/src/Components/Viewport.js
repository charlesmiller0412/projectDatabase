import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import LoadingLogo from "../assets/loadingLogo.json";
import ErrorImage from "../assets/errorDino.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faChevronUp,
    faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import useProjectStore from "../appStore";

export default function Viewport() {
    const currentProject = useProjectStore((state) => state.project);
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [viewport, showViewport] = useState(true);

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
                `https://millerprojectdatabase.herokuapp.com/api/projects/${currentProject}`
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
            <div
                className="container p-0 p-md-3 d-flex flex-column d-md-inline flex-md-column"
                key={projects}
            >
                <button
                    className="viewport__button mb-2 d-block d-md-none border-light-blue"
                    onClick={() => {
                        showViewport(!viewport);
                    }}
                >
                    {viewport ? (
                        <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                        <FontAwesomeIcon icon={faChevronUp} />
                    )}{" "}
                </button>
                <div className="viewport__image d-flex align-items-center flex-column col-4 col-md-12 align-self-center">
                    {/* image */}
                    <img
                        src={projects.imgurl}
                        alt="weather app"
                        className="rounded-3"
                    />
                    {/* title */}
                    <h5 className="viewport__title text-center mt-2 mt-md-4 fw-bold">
                        {projects.title}
                        <span className="fw-normal ms-2 text-capitalize">
                            {projects.type}
                        </span>
                    </h5>
                </div>
                <div className="col-12">
                    {/* map through languages */}
                    <ul className="viewport__skills list-unstyled text-center list-inline mb-2">
                        {projects.languages.map((language) => (
                            <li
                                key={language}
                                className="list-inline-item bg-blue text-off-black my-0 px-2 my-md-1 px-md-3 rounded-pill"
                            >
                                {language.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                    {/*description */}
                    <p className="viewport__description px-3 px-md-0">
                        {projects.description}
                    </p>
                    {!projects.processurl ? (
                        <div className="viewport__links px-3 px-md-0 d-flex justify-content-between text-center">
                            <a
                                href={projects.codeurl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-decoration-none button text-blue fw-bold"
                            >
                                <span>See the code</span>
                                <FontAwesomeIcon
                                    icon={faLongArrowAltRight}
                                    className="ms-2"
                                />
                            </a>
                            <a
                                href={projects.siteurl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-decoration-none button text-blue fw-bold"
                            >
                                <span>See the site</span>
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
                                className="text-decoration-none text-off-white fw-bold"
                            >
                                <span>See the process</span>
                                <FontAwesomeIcon
                                    icon={faLongArrowAltRight}
                                    className="ms-2"
                                />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        );

        return (
            <div
                className={
                    viewport
                        ? "viewport bg-off-white col-12 col-md-4 col-xl-3 border-2 border-top border-light-blue border-md-start d-flex justify-content-center position-md-relative viewport__grow"
                        : "viewport bg-off-white col-12 col-md-4 col-xl-3 border-2 border-top border-light-blue border-md-start d-flex justify-content-center position-md-relative"
                }
            >
                {showContent}
            </div>
        );
    }
}
