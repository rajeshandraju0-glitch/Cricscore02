import React, { useState } from 'react';
import { Filter, MoreVertical, Calendar, Trophy, ChevronRight } from 'lucide-react';

export default function TournamentsPage() {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
           <h1 className="text-2xl font-bold text-white">Tournaments</h1>
           <p className="text-sm text-gray-400">Manage your leagues and cups</p>
        </div>
        <button className="bg-primary text-background px-4 py-2 rounded-lg font-semibold text-sm hover:bg-highlight shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
          + Create Tournament
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-4 border-b border-white/10 pb-1 overflow-x-auto">
         {['active', 'upcoming', 'completed'].map((tab) => (
            <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`pb-3 text-sm font-medium capitalize whitespace-nowrap px-2 transition-colors relative ${activeTab === tab ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
            >
               {tab} Tournaments
               {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></span>}
            </button>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Tournament Card 1 */}
         <div className="bg-surface border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4 shadow-lg">
                     <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Premier League 2024</h3>
                     <p className="text-xs text-gray-400">T20 Format • 8 Teams</p>
                  </div>
               </div>
               <button className="text-gray-500 hover:text-white">
                  <MoreVertical className="w-5 h-5" />
               </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6 bg-black/20 p-3 rounded-lg text-center">
               <div>
                  <div className="text-xs text-gray-500 mb-1">Matches</div>
                  <div className="text-sm font-bold text-white">24/56</div>
               </div>
               <div>
                  <div className="text-xs text-gray-500 mb-1">Runs</div>
                  <div className="text-sm font-bold text-white">4,285</div>
               </div>
               <div>
                  <div className="text-xs text-gray-500 mb-1">Wickets</div>
                  <div className="text-sm font-bold text-white">312</div>
               </div>
            </div>

            <div className="space-y-3 mb-6">
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Next Match</span>
                  <span className="text-white flex items-center"><Calendar className="w-3 h-3 mr-1 text-primary" /> Today, 4 PM</span>
               </div>
               <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: '45%' }}></div>
               </div>
            </div>

            <div className="flex justify-between items-center border-t border-white/5 pt-4">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-surface flex items-center justify-center text-xs font-bold text-white">
                        {String.fromCharCode(64 + i)}
                     </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-surface flex items-center justify-center text-xs text-gray-400">
                     +4
                  </div>
               </div>
               <button className="text-sm text-primary font-medium flex items-center hover:text-highlight">
                  Manage <ChevronRight className="w-4 h-4 ml-1" />
               </button>
            </div>
         </div>

         {/* Tournament Card 2 */}
         <div className="bg-surface border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
               <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white mr-4 shadow-lg">
                     <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">City Championship</h3>
                     <p className="text-xs text-gray-400">ODI Format • 12 Teams</p>
                  </div>
               </div>
               <button className="text-gray-500 hover:text-white">
                  <MoreVertical className="w-5 h-5" />
               </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6 bg-black/20 p-3 rounded-lg text-center">
               <div>
                  <div className="text-xs text-gray-500 mb-1">Matches</div>
                  <div className="text-sm font-bold text-white">12/30</div>
               </div>
               <div>
                  <div className="text-xs text-gray-500 mb-1">Runs</div>
                  <div className="text-sm font-bold text-white">3,100</div>
               </div>
               <div>
                  <div className="text-xs text-gray-500 mb-1">Wickets</div>
                  <div className="text-sm font-bold text-white">180</div>
               </div>
            </div>

            <div className="space-y-3 mb-6">
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Next Match</span>
                  <span className="text-white flex items-center"><Calendar className="w-3 h-3 mr-1 text-primary" /> Tomorrow, 10 AM</span>
               </div>
               <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-accent h-full" style={{ width: '30%' }}></div>
               </div>
            </div>

            <div className="flex justify-between items-center border-t border-white/5 pt-4">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-surface flex items-center justify-center text-xs font-bold text-white">
                        {String.fromCharCode(70 + i)}
                     </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-surface flex items-center justify-center text-xs text-gray-400">
                     +9
                  </div>
               </div>
               <button className="text-sm text-primary font-medium flex items-center hover:text-highlight">
                  Manage <ChevronRight className="w-4 h-4 ml-1" />
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}