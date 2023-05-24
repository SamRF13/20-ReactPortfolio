import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import {Routes,Route,  } from "react-router-dom"
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import React from 'react';

function App() {

  return (
    <>
    <Header/>
      <Container>
<Routes>

<Route path='/about' element={<About/>} />
<Route path='/resume' element={<Resume/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/portfolio' element={<Portfolio/>} />

</Routes>

      </Container>
      

      <Footer/>
    </>
  )
}

export default App
