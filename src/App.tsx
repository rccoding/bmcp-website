import { Topbar } from './components/Topbar/Topbar';
import { Footer } from './components/Footer/Footer';
import Portal from './pages/solutions/solutions';

import './App.css';
import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Topbar />
      <Portal />
      <Footer />
    </div>
  );
}