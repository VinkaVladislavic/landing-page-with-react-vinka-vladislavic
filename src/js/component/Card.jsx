import React from "react"
import PropTypes from "prop-types"

const Card = (props) => {
    return(
        <div className="card m-0 p-0">
            <div style={{backgroundColor: "#CCCCCC", height: "250px"}}></div>
            <div className="card-body text-center">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardDescription}</p>
            </div>
            <div className="card-footer text-muted text-center">
                <a href="#" className="btn btn-primary">{props.cardButtonLabel}</a>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardTitle: PropTypes.string,
    cardDescription: PropTypes.string,
    cardButtonLabel: PropTypes.string
};

export default Card;