import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar';

function App() {
  return(
    <>
    <Navbar/>
    <button class="btn btn-primary">Prueba</button>
    </>
  );
}

export default App
