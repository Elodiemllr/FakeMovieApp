import "../styles/QuickView.scss";

const QuickView = () => {
    return (
        <div className="quickView">
            <div className="quickView__banner">
                <div className="quickView__content">
                    <h3 className="quickView__title"> Titre</h3>
                    <p> Lorem </p>
                </div>
                <button className="quickView__close">x</button>
            </div>
        </div>
    );
};

export default QuickView;
