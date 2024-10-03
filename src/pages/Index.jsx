import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import HeroImage from '../components/HeroImage';
import ComingSoon from '../components/ComingSoon';
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
        <ComingSoon />
        <CountdownTimer targetDate={nextMonth} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;