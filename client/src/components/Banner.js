import HelpOutLineIcon from "@material-ui/icons/HelpOutline";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../config/data/Request.js";
import "../styles/Banner.scss";
import QuickView from "./QuickView.js";

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    };

    //on doit trouver un film aléatoire par rapport à l'ensemble des films
    const [movie, setMovie] = useState([]);

    //pop up de quickview, par default false car elle sera fermé
    const [popUp, setPopUp] = useState(false);

    //vu qu'on utilisé axios, besoin du useEffect
    useEffect(() => {
        async function fetchData() {
            //on recup notre url  qu'on stock dans request
            const request = await axios.get(requests.fetchTrending);

            //on va chercher un film, puis celui choisit sera stocké dans movie
            setMovie(
                //le chemin au niveau des data de moviedb , ou il y'aura tout nos results
                request.data.results[
                    //aléatoire donc math avec floor + random
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        //on active la function
        fetchData();
    }, []);

    // pour réduire le nombre de caractère de mon texte "description"
    function truncateText(string, n) {
        return string?.length > n
            ? string.substr(0, n - 1) + "..."
            : "No Description";
    }

    //function pour affichert la quickview
    function handleClickPopup() {
        popUp ? setPopUp(false) : setPopUp(true);
    }

    console.log(movie);
    return (
        <header className="banner" style={bannerStyle}>
            <div className="banner__content">
                <h1 className="banner__title">
                    {" "}
                    {movie?.title || movie?.original_title || movie?.name}{" "}
                </h1>
                <p className="banner__description">
                    {" "}
                    {truncateText(movie?.overview, 100)}
                </p>
                <div className="banner__buttons">
                    <button className="banner__button banner__button__play">
                        {" "}
                        <PlayArrowIcon /> Lecture{" "}
                    </button>{" "}
                    <button className="banner__button" popUp={handleClickPopup}>
                        <HelpOutLineIcon /> Plus d'infos{" "}
                    </button>{" "}
                </div>
            </div>
            <QuickView
                bannerStyle={bannerStyle}
                movie={movie}
                popUp={handleClickPopup}
                popUpStatut={popUp}
            />
        </header>
    );
};

export default Banner;
