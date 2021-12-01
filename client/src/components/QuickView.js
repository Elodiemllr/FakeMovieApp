import CancelIcon from "@material-ui/icons/Cancel";
import React from "react";
import "../styles/QuickView.scss";

const QuickView = ({ bannerStyle, movie, popUp, popUpStatut }) => {
    return (
        <div className={`quickView & ${popUpStatut && "open"}`}>
            <div className="quickView__banner" style={bannerStyle}>
                <div className="quickView__content">
                    <h3 className="quickView__title">
                        {" "}
                        {movie?.title || movie?.original_title || movie?.name}
                    </h3>
                    <p> {movie?.overview} </p>
                </div>
                <button className="quickView__close" onClick={popUp}>
                    <CancelIcon fontSize="large" />
                </button>
            </div>
        </div>
    );
};

export default QuickView;
