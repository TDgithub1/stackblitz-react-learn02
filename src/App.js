import React from 'react';
import './style.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Contactdetails from './Components/Contactdetails';
import User from './Components/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'contact/details',
    element: <Contactdetails />,
  },
  {
    path: 'contact/:id',
    element: <User />,
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

/*
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/details" element={<Contactdetails />} />
        /*nested routing (above in an same page differant component(eg -contactdetails in contact))*/
//<Route path="/contact/:id" element={<User />} />
{
  /*when url changing userid*/
}

/*
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Contactdetails from './Components/Contactdetails';
import User from './Components/User';

*/
