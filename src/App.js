import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { PublicRoute, ProtectedRoute } from "./CustomRoutes";
import SignIn from "./layouts/SignIn";
import LandingPage from "./layouts/LandingPage";
import Dashboard from "./layouts/Dashboard";

const engine = new Styletron();

function App() {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <Router>
                    <Switch>
                        <PublicRoute exact path="/" component={LandingPage} />
                        <PublicRoute exact path="/signin" component={SignIn} />
                        <ProtectedRoute
                            path="/dashboard"
                            component={Dashboard}
                        />
                        {/* {Routes beginning with '/dashboard' are private and have to undergo authentication by the backend on refresh } */}
                    </Switch>
                </Router>
            </BaseProvider>
        </StyletronProvider>
    );
}

export default App;
