import HelpOutLineIcon from "@material-ui/icons/HelpOutline";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../config/data/Request.js";
import "../styles/Banner.scss";

const Banner = () => {
    //on doit trouver un film aléatoire par rapport à l'ensemble des films
    const { movie, setMovie } = useState([]);

    //vu qu'on utilisé axios, besoin du useEffect
    useEffect(() => {
        async function fetchData() {
            //on recup notre url  qu'on stock dans request
            const request = await axios.get(requests.fetchTrending);

            //on va chercher un film
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

    console.log(movie);
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
