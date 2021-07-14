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
      <About />
      <Router>
        <Switch>
          <Route path='/About' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </Router >
      <Footer />
    </div>
  );
}