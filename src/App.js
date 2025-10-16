import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import { Routes, Route } from 'react-router-dom';
import MainNav from './Components/MainNav/MainNav';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MainNav />

       <div className="flex-grow-1 mt-5">
         <Routes>
          <Route path ="/" element = {<Profile />}> </Route>
          <Route path ="/about" element = {<About />}></Route>
          <Route path ="/skills" element = {<Skills />}></Route>
          <Route path ="/projects" element = {<Projects />}></Route>
          <Route path ="/contact" element = {<Contact />}></Route>
        </Routes>
       </div>

       <Footer />
      
    </div>
  );
}

export default App;
