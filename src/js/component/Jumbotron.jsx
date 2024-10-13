import React from "react"
import PropTypes from "prop-types";

const Jumbotron = (props) => {
    return(
        <div className="jumbotron bg-light mt-3 mb-3  p-3 p-lg-5">
            <h1 className="display-4">{props.title}</h1>
            <p>{props.description}</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">{props.buttonLabel}</a>
        </div>
    );

};

Jumbotron.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string
}


export default Jumbotron;