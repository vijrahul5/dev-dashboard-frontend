import React from "react";
import { Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { useVerifyPublicRoute, useVerifyPrivateRoute } from "./Api";

export const PublicRoute = ({ component: Component, ...rest }) => {
    const [loading, error] = useVerifyPublicRoute(true, false);
    if (error !== false) {
        return <h1>{error}</h1>;
    }
    if (loading === true) {
        return <Loader />;
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
    const [loading, error] = useVerifyPrivateRoute(true, false);
    if (error !== false) {
        return <h1>{error}</h1>;
    }
    if (loading === true) {
        return <Loader />;
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
