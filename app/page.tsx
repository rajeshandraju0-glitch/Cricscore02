import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import MatchCard from '../components/MatchCard';
import { FEATURE_DATA, LIVE_MATCHES } from '../lib/mockData';
import { ShieldCheck, Users, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Social Proof / Validation Section */}
      <section className="bg-surface/50 py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                 <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Users className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-2xl font-bold text-white">10,000+</h3>
                 <p className="text-gray-400">Matches Scored</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-2xl font-bold text-white">500+</h3>
                 <p className="text-gray-400">Clubs Registered</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Star className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="text-2xl font-bold text-white">4.9/5</h3>
                 <p className="text-gray-400">User Rating</p>
              </div>
           </div>
        </div>
      </section>

      {/* Live Matches Ticker Section */}
      <section className="py-12 bg-surface/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></span>
              Live Action
            </h2>
            <button className="text-primary text-sm hover:text-highlight transition-colors">View All &rarr;</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIVE_MATCHES.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything you need to run a league</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURE_DATA.map((feature, idx) => (
              <FeatureCard key={idx} title={feature.title} description={feature.description} iconName={feature.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}