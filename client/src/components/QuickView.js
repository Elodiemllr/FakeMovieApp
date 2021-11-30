import CancelIcon from "@material-ui/icons/Cancel";
import "../styles/QuickView.scss";

const QuickView = (bannerStyle, movie, popUp, popUpStatut) => {
    return (
        <div className="quickView">
            <div className="quickView__banner">
                <div className="quickView__content">
                    <h3 className="quickView__title"> Titre</h3>
                    <p> Lorem </p>
                </div>
                <button className="quickView__close" onClick={popUp}>
                    <CancelIcon />
                </button>
            </div>
        </div>
    );
};

export default QuickView;
