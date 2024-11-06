import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import Privacy from './views/Privacy/Privacy';
import Footer from './components/Footer/Footer';


function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <div>
      <Routes>
    <Route path="/" element={<HomeView/>} />
    <Route path='/privacy' element={<Privacy/>}/>
    </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
