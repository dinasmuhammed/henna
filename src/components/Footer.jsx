import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-ivory py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2023 Henna by Fathima. All rights reserved.</p>
        <p className="text-sm">
          Website developed by{' '}
          <a 
            href="https://adwebcomicagency.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-blush-pink transition-colors"
          >
            AD Web Comic Agency
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;