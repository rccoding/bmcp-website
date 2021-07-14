import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
export const Routes = () => {
    return (
        <Router>
            <Switch>
                {/* <Route path='/about' component={About} />
                <Route path='/services' component={Services} /> */}
                <Route path='/footer' component={Footer} />
            </Switch>
        </Router >
    );
};


