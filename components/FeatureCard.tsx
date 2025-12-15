import React from 'react';
import { Activity, Trophy, BarChart2, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
}

const iconMap: { [key: string]: LucideIcon } = {
  Activity,
  Trophy,
  BarChart2
};

export default function FeatureCard({ title, description, iconName }: FeatureCardProps) {
  const Icon = iconMap[iconName];

  return (
    <div className="p-6 bg-surface border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        {Icon && <Icon className="w-6 h-6 text-primary" />}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}