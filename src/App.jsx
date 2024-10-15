import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import Privacy from './views/Privacy/Privacy';
import Contact from './views/Contact/Contact';


function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <div>
      <Routes>
    <Route path="/" element={<HomeView/>} />
    <Route path='/privacy' element={<Privacy/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
