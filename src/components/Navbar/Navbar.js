import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "../../Auth";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>
                    Sprinklr Developer Dashboard
                </Link>

                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/signin"}>
                                SignIn
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
