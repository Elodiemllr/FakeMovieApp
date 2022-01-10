import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Row.scss";

const Row = ({ title, fetchUrl, isPoster }) => {
    const baseUrl = "https://image.tmdb.org/t/p/original";

    //on recup tout les films
    const [movies, setMovies] = useState([]);

    //vu qu'on utilisé axios, besoin du useEffect
    useEffect(() => {
        async function fetchData() {
            //on recup notre url  qu'on stock dans request
            const request = await axios.get(fetchUrl);

            //on va chercher un film, puis celui choisit sera stocké dans movie
            setMovies(
                //le chemin au niveau des data de moviedb , ou il y'aura tout nos results
                request.data.results
            );
        }
        //on active la function
        fetchData();
    }, []);

    return (
        <div className="row">
            <h2 className="row__title">{title} </h2>
            <div className="row__images">
                {movies.map((movie) => (
                    <div key={movie.id}>
                        {" "}
                        <Link to={`/video/${movie?.id}`}>
                            {isPoster ? (
                                <img
                                    src={`${baseUrl}/${movie.poster_path}`}
                                    alt="{
                                movie?.title ||
                                movie?.original_title ||
                                movie?.name
                            }"
                                    className="row__image"
                                />
                            ) : (
                                <img
                                    src={`${baseUrl}/${movie.backdrop_path}`}
                                    alt="{
                                movie?.title ||
                                movie?.original_title ||
                                movie?.name
                            }"
                                    className="row__image"
                                />
                            )}{" "}
                        </Link>
                    </div>
                ))}
            </div>{" "}
        </div>
    );
};

export default Row;
