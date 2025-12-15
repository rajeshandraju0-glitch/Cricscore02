import React from 'react';
import { TEAMS } from '../../../lib/mockData';

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Teams Directory</h1>
        <div className="relative">
           <input type="text" placeholder="Search teams..." className="bg-black/20 border border-white/10 rounded-lg pl-4 pr-10 py-2 text-sm text-white focus:ring-1 focus:ring-primary outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {TEAMS.map(team => (
            <div key={team.id} className="bg-surface border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all">
               <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-lg font-bold text-gray-300 mr-4">
                     {team.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-white">{team.name}</h3>
                     <span className="text-xs text-gray-400">{team.players} Players Registered</span>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-black/20 rounded-lg p-2">
                     <span className="block text-xs text-gray-500">Wins</span>
                     <span className="block text-lg font-bold text-green-400">{team.wins}</span>
                  </div>
                  <div className="bg-black/20 rounded-lg p-2">
                     <span className="block text-xs text-gray-500">Losses</span>
                     <span className="block text-lg font-bold text-red-400">{team.losses}</span>
                  </div>
               </div>
               <button className="w-full mt-4 py-2 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/5 transition-colors">
                  View Squad
               </button>
            </div>
         ))}
      </div>
    </div>
  );
}