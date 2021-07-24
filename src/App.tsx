import { Topbar } from './components/Topbar/Topbar';
import { Footer } from './components/Footer/Footer';

import './App.css';
import React from 'react';
import { About } from './components/About/About';
import { Route, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home/Home';
import Solutions from './pages/Solutions/Solutions';
import Service from './pages/Solutions/Services';
export const App: React.FC = () => {
  return (
    <div className="App">


      <BrowserRouter>
      <Topbar />
        <Switch>
          <Route path='/About' exact component={About} />
          <Route path ='/Solutions' exact component={Solutions} />
          <Route path ='/Service' exact component={Service} />
          <Route path='/' exact component={Home} />
          
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}