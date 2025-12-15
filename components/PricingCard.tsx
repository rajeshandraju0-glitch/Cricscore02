import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    period: string;
    features: string[];
    cta: string;
    popular: boolean;
  };
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`relative p-8 bg-surface rounded-2xl border ${plan.popular ? 'border-primary shadow-[0_0_30px_rgba(34,211,238,0.15)]' : 'border-white/10'} flex flex-col`}>
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-primary text-background text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          POPULAR
        </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-bold text-white">{plan.price}</span>
        <span className="text-gray-400 ml-1">{plan.period}</span>
      </div>
      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/signup" className={`w-full py-3 px-4 rounded-xl text-center font-semibold transition-all ${plan.popular ? 'bg-primary text-background hover:bg-highlight' : 'bg-white/10 text-white hover:bg-white/20'}`}>
        {plan.cta}
      </Link>
    </div>
  );
}