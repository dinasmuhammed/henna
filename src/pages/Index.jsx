import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import HeroImage from '../components/HeroImage';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-ivory text-emerald-900 font-serif">
      <header className="container mx-auto py-8">
        <Logo />
      </header>
      
      <HeroImage />
      
      <main className="container mx-auto px-4 py-16">
        <ComingSoon />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;