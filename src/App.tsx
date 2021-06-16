import { Topbar } from './components/Topbar/Topbar'
import { Footer } from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Topbar />
      <Footer />
    </div>
  );
}