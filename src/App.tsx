import { Topbar } from './components/topbar/Topbar';
import { Footer } from './components/footer/Footer';
import portal from './pages/solutions/solutions';

import './App.css';
import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Topbar />
      {/* <solutions /> */}
      <portal />
      <Footer />
    </div>
  );
}