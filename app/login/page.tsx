import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-surface p-8 rounded-2xl border border-white/10 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400">Sign in to manage your team</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input 
                type="email" 
                className="block w-full pl-10 bg-black/20 border border-white/10 rounded-lg py-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input 
                type="password" 
                className="block w-full pl-10 bg-black/20 border border-white/10 rounded-lg py-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <button className="w-full bg-primary text-background font-bold py-3 rounded-xl hover:bg-highlight transition-colors">
            Sign In
          </button>
        </form>

        <div className="mt-6">
           <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
             <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-3" alt="Google" />
             Sign in with Google
           </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-primary hover:text-highlight">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}