import React from 'react';
import MatchCard from '../../../components/MatchCard';
import { LIVE_MATCHES, UPCOMING_MATCHES } from '../../../lib/mockData';
import { Link } from 'react-router-dom';

export default function MatchesPage() {
  return (
    <div className="space-y-6">
       <div className="flex justify-between items-center">
         <h1 className="text-2xl font-bold text-white">All Matches</h1>
         <div className="flex space-x-2">
           <select className="bg-black/20 text-sm text-white border border-white/10 rounded-lg p-2 outline-none focus:border-primary">
             <option>All Tournaments</option>
             <option>Premier League 2024</option>
           </select>
         </div>
       </div>
       
       <h2 className="text-lg font-semibold text-gray-300">Live Now</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {LIVE_MATCHES.map(match => (
            <MatchCard key={match.id} match={match} />
         ))}
       </div>

       <h2 className="text-lg font-semibold text-gray-300 mt-8">Upcoming</h2>
       <div className="bg-surface border border-white/5 rounded-xl overflow-hidden">
          <table className="w-full text-sm text-left text-gray-400">
             <thead className="text-xs text-gray-500 uppercase bg-black/20">
                <tr>
                   <th className="px-6 py-3">Teams</th>
                   <th className="px-6 py-3">Tournament</th>
                   <th className="px-6 py-3">Date</th>
                   <th className="px-6 py-3">Action</th>
                </tr>
             </thead>
             <tbody>
                {UPCOMING_MATCHES.map(match => (
                   <tr key={match.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">
                         {match.teamA} vs {match.teamB}
                      </td>
                      <td className="px-6 py-4">{match.tournament}</td>
                      <td className="px-6 py-4">{match.date}</td>
                      <td className="px-6 py-4">
                         <Link to={`/dashboard/matches/${match.id}`} className="text-primary hover:text-white mr-4">View</Link>
                         <button className="text-gray-400 hover:text-white">Edit</button>
                      </td>
                   </tr>
                ))}
             </tbody>
          </table>
       </div>
    </div>
  );
}