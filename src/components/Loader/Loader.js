import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loader() {
    return (
        <div className="loader">
            <Spinner animation="border" role="status"></Spinner>
        </div>
    );
}

export default Loader;
