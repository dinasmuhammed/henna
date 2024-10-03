import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';
import CountdownTimer from '../components/CountdownTimer';

const Index = () => {
  // Calculate the date for the first day of next month
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  return (
    <div className="min-h-screen bg-ivory text-emerald-900 font-serif">
      <header className="container mx-auto py-8">
        <Logo />
      </header>
      
      <HeroImage />
      
      <main className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Coming Soon
        </motion.h1>
        
        <CountdownTimer targetDate={nextMonth} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;