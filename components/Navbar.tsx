import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { APP_NAME, NAVIGATION } from '../lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="w-8 h-8 bg-gradient-to-tr from-primary to-highlight rounded-lg flex items-center justify-center">
             <span className="text-background font-bold text-xl">C</span>
          </div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white tracking-tight">
            {APP_NAME}
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
          <Link to="/login">
            <button type="button" className="text-white hover:text-primary font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button type="button" className="text-background bg-primary hover:bg-highlight font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              Get Started
            </button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-800 rounded-lg bg-gray-900/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {NAVIGATION.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`block py-2 px-3 md:p-0 transition-colors ${
                    isActive(item.href) ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}