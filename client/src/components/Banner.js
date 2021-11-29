import HelpOutLineIcon from "@material-ui/icons/HelpOutline";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import "../styles/Banner.scss";

const Banner = () => {
    return (
        <header className="banner">
            <div className="banner__content">
                <h1 className="banner__title"> title </h1>
                <p className="banner__description">lorem </p>
                <div className="banner__buttons">
                    <button className="banner__button banner__button__play">
                        {" "}
                        <PlayArrowIcon /> Lecture{" "}
                    </button>{" "}
                    <button className="banner__button">
                        <HelpOutLineIcon /> Plus d'infos{" "}
                    </button>{" "}
                </div>
            </div>
        </header>
    );
};

export default Banner;
