import React from "react";
import { useParams } from "react-router";
import "../styles/Video.scss";

const Video = () => {
    let { id } = useParams();
    return (
        <div className="video">
            {" "}
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="video"
                frameBorder="0"
                allowFullScreen
            >
                {" "}
            </iframe>
        </div>
    );
};

export default Video;
