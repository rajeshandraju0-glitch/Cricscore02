import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative isolate pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/30 bg-primary/10 mb-6">
          <span>v2.0 is now live</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
          The Future of <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-highlight to-accent">
            Local Cricket Scoring
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
          Powering Every Match. Every Ball. A professional-grade scoring platform for local leagues, clubs, and schools.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/signup"
            className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-background shadow-sm hover:bg-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all flex items-center"
          >
            Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link to="/pricing" className="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors">
            View Pricing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

       <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-primary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  );
}