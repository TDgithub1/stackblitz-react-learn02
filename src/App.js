import React from 'react';
import './style.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Contactdetails from './Components/Contactdetails';
import User from './Components/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/details" element={<Contactdetails />} />
        {/*nested routing (above in an same page differant component(eg -contactdetails in contact))*/}
        <Route path="/contact/:id" element={<User />} />
        {/*when url changing userid*/}
      </Routes>
    </BrowserRouter>
  );
}
