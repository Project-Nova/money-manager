import React from 'react';
import './App.css';
import Header from './components/header/Header';
import PaperCard from './components/Paper/PaperCard';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <PaperCard />
      <Footer />
    </div>
  );
}

export default App;
