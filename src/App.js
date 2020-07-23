import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import './styles/global.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
