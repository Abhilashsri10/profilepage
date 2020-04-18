import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {Box} from '@material-ui/core';
import Header from './Components/header';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Skills from './Components/Skills';
//


function App() {
  return (
    <div className="App">
      <Header />
        <hr />
        <Navbar />
        <br />
        <Banner />
        <br />
        <Skills />
        <hr />
        <Portfolio />
        <hr />
        <Contact />
        <hr/>

    </div>
  );
}

export default App;
