import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PublicRoute, ProtectedRoute } from "./CustomRoutes";
import SignIn from "./layouts/SignIn";
import LandingPage from "./layouts/LandingPage";
import Dashboard from "./layouts/Dashboard";

function App() {
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/" component={LandingPage} />
                <PublicRoute exact path="/signin" component={SignIn} />
                <ProtectedRoute path="/dashboard" component={Dashboard} /> 
                {/* {Routes beginning with '/dashboard' are private and have to undergo authentication by the backend on refresh } */}
            </Switch>
        </Router>
    );
}

export default App;
