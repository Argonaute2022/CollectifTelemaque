import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Convictions from './components/Convictions';
import About from './components/About';
import Actions from './components/Actions';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Nav />
      <Convictions />
      <About />
      <Actions />
      <ContactUs />
      <Footer />
  </div>
  );
}

export default App;
