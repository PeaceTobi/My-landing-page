import React from 'react';
import {
  ChakraProvider,
 
  theme,
} from '@chakra-ui/react';
import Navbar  from './components/Navbar';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from  './components/Footer';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Hero />
      <Testimonial />
      <Contact />
      <Footer  />
    </ChakraProvider>
  );
}

export default App;
