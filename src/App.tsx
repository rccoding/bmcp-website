import { Topbar } from './components/Topbar/Topbar'
import { Footer } from './components/Footer/Footer';
import './App.css';
import React from 'react';
import { About } from './components/About/About';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './components/Home/Home';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Topbar />
      <Router>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          {/* <Route path='/srvices' component={Services} />
                <Route path='/footer' component={Footer} />
                <Route path='/footer' component={Footer} /> */}
          <Route path='/footer' component={Footer} />
        </Switch>
      </Router >
      <Footer />
    </div>
  );
}