import React from "react";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import axios from "axios";

export const PublicRoute = ({ component: Component, ...rest }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get("/api/auth/verify");
                if (res.data.status === "Failed") {
                    setLoading(false);
                } else {
                    window.location.replace("/dashboard");
                }
            } catch (err) {
                alert(err.message);
            }
        })();
    }, []);
    if (loading === true) {
        return <Loader/>;
    }
    return (
        <Route
            {...rest}
            render={(props) => {
                return <Component {...props} />;
            }}
        />
    );
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get("/api/auth/verify");
                if (res.data.status === "Success") {
                    setLoading(false);
                } else {
                    window.location.replace("/signin");
                }
            } catch (err) {
                alert(err.message);
            }
        })();
    }, []);
    if (loading === true) {
        return <Loader/>;
    }
    return (
        <Route
            {...rest}
            render={(props) => {
                return <Component {...props} />;
            }}
        />
    );
};
