import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MATCH_DETAILS_MOCK } from '../../../lib/mockData';
import { ArrowLeft, Share2, Award, Info } from 'lucide-react';

export default function MatchDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'scorecard' | 'commentary' | 'info'>('scorecard');

  // In a real app, use id to fetch data.
  const match = MATCH_DETAILS_MOCK;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <Link to="/dashboard/matches" className="p-2 bg-surface hover:bg-white/10 rounded-lg transition-colors text-gray-300">
           <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-bold text-white">Match Center</h1>
      </div>

      {/* Live Score Header */}
      <div className="bg-surface border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-4">
            <span className="flex items-center text-red-500 text-xs font-bold animate-pulse bg-red-500/10 px-2 py-1 rounded-full">
               <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span> LIVE
            </span>
         </div>
         <div className="text-center sm:text-left mb-2">
            <span className="text-xs text-primary font-semibold uppercase tracking-wider">{match.venue}</span>
            <p className="text-gray-400 text-sm mt-1">{match.toss}</p>
         </div>

         <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-6">
            <div className="flex flex-col items-center md:items-start">
               <h2 className="text-3xl font-bold text-white">{match.teams.a.name}</h2>
               <p className="text-5xl font-black text-primary mt-2 font-mono tracking-tight">{match.teams.a.score} <span className="text-lg text-gray-400 font-sans font-normal">({match.teams.a.overs})</span></p>
            </div>
            <div className="text-2xl font-bold text-gray-600">VS</div>
            <div className="flex flex-col items-center md:items-end">
               <h2 className="text-3xl font-bold text-white text-right">{match.teams.b.name}</h2>
               <p className="text-xl text-gray-400 mt-2">{match.teams.b.score}</p>
            </div>
         </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-surface/50 p-1 rounded-xl border border-white/5">
         {['scorecard', 'commentary', 'info'].map((tab) => (
            <button
               key={tab}
               onClick={() => setActiveTab(tab as any)}
               className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all capitalize ${activeTab === tab ? 'bg-primary text-background shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            >
               {tab}
            </button>
         ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
         {activeTab === 'scorecard' && (
            <div className="space-y-6">
               {/* Batting Card */}
               <div className="bg-surface border border-white/5 rounded-xl overflow-hidden">
                  <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex justify-between items-center">
                     <h3 className="font-semibold text-white">Batting</h3>
                     <span className="text-xs text-gray-400">Royal Strikers</span>
                  </div>
                  <table className="w-full text-sm text-left text-gray-400">
                     <thead className="text-xs text-gray-500 uppercase bg-black/20">
                        <tr>
                           <th className="px-4 py-3">Batter</th>
                           <th className="px-4 py-3 text-right">R</th>
                           <th className="px-4 py-3 text-right hidden sm:table-cell">B</th>
                           <th className="px-4 py-3 text-right hidden sm:table-cell">4s</th>
                           <th className="px-4 py-3 text-right hidden sm:table-cell">6s</th>
                           <th className="px-4 py-3 text-right">SR</th>
                        </tr>
                     </thead>
                     <tbody>
                        {match.batsmen.map((batsman, idx) => (
                           <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3">
                                 <div className="font-medium text-white">{batsman.name}</div>
                                 <div className="text-xs text-gray-500">{batsman.status}</div>
                              </td>
                              <td className="px-4 py-3 text-right font-bold text-white">{batsman.runs}</td>
                              <td className="px-4 py-3 text-right hidden sm:table-cell">{batsman.balls}</td>
                              <td className="px-4 py-3 text-right hidden sm:table-cell">{batsman.fours}</td>
                              <td className="px-4 py-3 text-right hidden sm:table-cell">{batsman.sixes}</td>
                              <td className="px-4 py-3 text-right">{batsman.strikeRate}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               {/* Bowling Card */}
               <div className="bg-surface border border-white/5 rounded-xl overflow-hidden">
                  <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex justify-between items-center">
                     <h3 className="font-semibold text-white">Bowling</h3>
                     <span className="text-xs text-gray-400">Thunder XI</span>
                  </div>
                  <table className="w-full text-sm text-left text-gray-400">
                     <thead className="text-xs text-gray-500 uppercase bg-black/20">
                        <tr>
                           <th className="px-4 py-3">Bowler</th>
                           <th className="px-4 py-3 text-right">O</th>
                           <th className="px-4 py-3 text-right">M</th>
                           <th className="px-4 py-3 text-right">R</th>
                           <th className="px-4 py-3 text-right">W</th>
                           <th className="px-4 py-3 text-right hidden sm:table-cell">ECO</th>
                        </tr>
                     </thead>
                     <tbody>
                        {match.bowlers.map((bowler, idx) => (
                           <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                              <td className="px-4 py-3 font-medium text-white">{bowler.name}</td>
                              <td className="px-4 py-3 text-right">{bowler.overs}</td>
                              <td className="px-4 py-3 text-right">{bowler.maidens}</td>
                              <td className="px-4 py-3 text-right">{bowler.runs}</td>
                              <td className="px-4 py-3 text-right font-bold text-primary">{bowler.wickets}</td>
                              <td className="px-4 py-3 text-right hidden sm:table-cell">{bowler.economy}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         )}

         {activeTab === 'commentary' && (
            <div className="space-y-4">
               {match.commentary.map((comm, idx) => (
                  <div key={idx} className="bg-surface border border-white/5 rounded-xl p-4 flex gap-4 hover:border-white/10 transition-colors">
                     <div className="flex-shrink-0 w-12 text-center">
                        <div className="text-sm font-bold text-white">{comm.over}</div>
                     </div>
                     <div className="flex-1 border-l border-white/10 pl-4">
                        <div className="text-gray-300">{comm.text}</div>
                        {comm.type === 'four' && <span className="inline-block mt-2 text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">FOUR</span>}
                        {comm.type === 'six' && <span className="inline-block mt-2 text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/20">SIX</span>}
                        {comm.type === 'summary' && <span className="inline-block mt-2 text-xs bg-white/10 text-white px-2 py-0.5 rounded">OVER SUMMARY</span>}
                     </div>
                  </div>
               ))}
            </div>
         )}

         {activeTab === 'info' && (
            <div className="bg-surface border border-white/5 rounded-xl p-6 text-center text-gray-400">
               <Info className="w-12 h-12 mx-auto mb-4 text-gray-600" />
               <p>Match info details, squad lists, and umpire info would appear here.</p>
            </div>
         )}
      </div>
    </div>
  );
}