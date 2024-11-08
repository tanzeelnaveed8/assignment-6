'use client'; 
import React from 'react';
import Navbar from '@/app/components/navbar';
import  Hero from './components/contain'; 
import About from './components/about';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
