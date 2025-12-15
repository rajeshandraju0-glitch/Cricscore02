import React from 'react';
import { Match } from '../types';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="bg-surface border border-white/5 rounded-xl p-4 hover:border-primary/30 transition-all shadow-lg shadow-black/20 group">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
          {match.tournament}
        </span>
        {match.status === 'LIVE' ? (
          <span className="flex items-center text-red-500 text-xs font-bold animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span> LIVE
          </span>
        ) : (
          <span className="flex items-center text-gray-400 text-xs">
            <Clock className="w-3 h-3 mr-1" /> {match.date}
          </span>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-gray-300 group-hover:bg-gray-600 transition-colors">
              {match.teamA.substring(0, 2).toUpperCase()}
            </div>
            <span className="font-medium text-white">{match.teamA}</span>
          </div>
          <span className="font-mono text-lg font-bold text-white">{match.scoreA || '-'}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold text-gray-300 group-hover:bg-gray-600 transition-colors">
              {match.teamB.substring(0, 2).toUpperCase()}
            </div>
            <span className="font-medium text-white">{match.teamB}</span>
          </div>
          <span className="font-mono text-lg font-bold text-white">{match.scoreB || '-'}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-white/5 text-center">
         <Link to={`/dashboard/matches/${match.id}`} className="text-xs text-primary hover:text-highlight font-medium transition-colors block w-full py-1">
            View Full Scorecard &rarr;
         </Link>
      </div>
    </div>
  );
}