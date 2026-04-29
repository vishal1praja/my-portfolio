import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-foreground/5 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-foreground/60 text-sm flex items-center justify-center gap-1">
          Designed & Built with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by Vishal Prajapati
        </p>
        <p className="text-foreground/40 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
