import { Topbar } from './components/Topbar/Topbar'
import { Footer } from './components/Footer/Footer';
import './App.css';
import React from 'react';
import { About } from './components/About/About';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Topbar />
      <About />
      <Footer />
    </div>
  );
}