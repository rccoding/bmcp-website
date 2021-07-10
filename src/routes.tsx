import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/home";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                 <Route path='/about' component={About} />
               {/* <Route path='/srvices' component={Services} />
                <Route path='/footer' component={Footer} />
                <Route path='/footer' component={Footer} /> */}
                <Route path='/footer' component={Footer} />
            </Switch>
        </Router >
    );
};


