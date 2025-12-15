import React from 'react';
import PricingCard from '../../components/PricingCard';
import { PRICING_PLANS } from '../../lib/mockData';

export default function PricingPage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-300">
            Start with a 1-month free trial. No credit card required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>
        
        <div className="mt-16 bg-surface/30 rounded-2xl p-8 border border-white/5 text-center">
           <h3 className="text-xl font-semibold text-white mb-2">Need a custom enterprise solution?</h3>
           <p className="text-gray-400 mb-6">We support regional cricket boards with custom integrations and dedicated support.</p>
           <button className="text-primary font-semibold hover:text-highlight transition-colors">Contact Sales &rarr;</button>
        </div>
      </div>
    </div>
  );
}