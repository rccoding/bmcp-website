import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/home";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/footer' component={Footer} />
            </Switch>
        </Router >
    );
};


