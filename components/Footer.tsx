import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { APP_NAME } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-surface/50 border-t border-white/5 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
             <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-tr from-primary to-highlight rounded flex items-center justify-center">
                   <span className="text-background font-bold text-xs">C</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">{APP_NAME}</span>
             </div>
             <p className="text-gray-400 text-sm max-w-xs">
               Powering the next generation of cricket tournaments with real-time data and advanced analytics.
             </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-8 text-center md:text-left text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}