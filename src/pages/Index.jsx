import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Logo from '../components/Logo';
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';

const Index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Thank you for subscribing!');
  };

  return (
    <div className="min-h-screen bg-ivory text-emerald-900 font-serif">
      <header className="container mx-auto py-8">
        <Logo />
      </header>
      
      <HeroImage />
      
      <main className="container mx-auto px-4 py-16 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Timeless Elegance
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Henna by Fathima is the embodiment of traditional artistry blended with modern sophistication. Our bespoke bridal henna designs are meticulously crafted to make every bride feel extraordinary.
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our website is launching soon, bringing you closer to the artistry that celebrates your most cherished moments.
        </motion.p>
        
        <motion.form 
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Join our mailing list</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            />
            <Button type="submit" className="bg-emerald-700 hover:bg-emerald-800 text-white">
              Subscribe
            </Button>
          </div>
          {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
        </motion.form>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;