import React from "react";

const Banner = () => {
    return (
        <header className="banner">
            <div className="banner__content">
                <h1 className="banner__title"> title </h1>
                <p className="banner__description">lorem </p>
                <div className="banner__buttons">
                    <button className="banner__button"> Lecture </button>{" "}
                    <button className="banner__button"> Plus d'infos </button>{" "}
                </div>
            </div>
        </header>
    );
};
