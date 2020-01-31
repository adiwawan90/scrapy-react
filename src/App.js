import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Test from './test';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import Footer from './components/Footer';
// import Datascrap from './DataScrap'

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Carousel />
      <Banner />
      {/* <Datascrap /> */}
      <Test />
      <Footer />
    </div>
  );
}

export default App;
