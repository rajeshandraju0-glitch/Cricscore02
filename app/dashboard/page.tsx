import React from 'react';
import { useRole } from '../../components/RoleSwitcher';
import { UserRole } from '../../lib/constants';
import { BarChart, Users, DollarSign, Activity, AlertCircle } from 'lucide-react';
import { LIVE_MATCHES } from '../../lib/mockData';
import MatchCard from '../../components/MatchCard';

export default function DashboardPage() {
  const { role } = useRole();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 text-sm">Welcome back, {role.replace('_', ' ')}</p>
         </div>
         <div className="flex space-x-2">
            <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
              System Operational
            </span>
         </div>
      </div>

      {/* Role-Based Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* Common Widget */}
        <div className="bg-surface border border-white/5 overflow-hidden rounded-xl p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-primary/20 p-3 rounded-lg">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-400 truncate">Live Matches</dt>
                <dd>
                  <div className="text-lg font-bold text-white">12</div>
                </dd>
              </dl>
            </div>
          </div>
        </div>

        {/* User Specific */}
        {(role === UserRole.USER || role === UserRole.ADMIN || role === UserRole.SUPER_ADMIN) && (
           <div className="bg-surface border border-white/5 overflow-hidden rounded-xl p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-500/20 p-3 rounded-lg">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-400 truncate">My Teams</dt>
                  <dd>
                    <div className="text-lg font-bold text-white">2</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        )}

        {/* Admin Specific */}
        {(role === UserRole.ADMIN || role === UserRole.SUPER_ADMIN) && (
           <div className="bg-surface border border-white/5 overflow-hidden rounded-xl p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-orange-500/20 p-3 rounded-lg">
                <BarChart className="h-6 w-6 text-orange-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-400 truncate">Tournament Views</dt>
                  <dd>
                    <div className="text-lg font-bold text-white">45.2k</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        )}

        {/* Super Admin Specific */}
        {role === UserRole.SUPER_ADMIN && (
           <div className="bg-surface border border-white/5 overflow-hidden rounded-xl p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-500/20 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-400 truncate">Total Revenue</dt>
                  <dd>
                    <div className="text-lg font-bold text-white">$12,450</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface border border-white/5 rounded-xl p-6">
           <h3 className="text-lg font-bold text-white mb-4">Live Activity</h3>
           <div className="space-y-4">
             {LIVE_MATCHES.map(match => (
                <MatchCard key={match.id} match={match} />
             ))}
           </div>
        </div>

        <div className="space-y-6">
           {/* Admin Notifications */}
           {(role === UserRole.ADMIN || role === UserRole.SUPER_ADMIN) && (
             <div className="bg-surface border border-white/5 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                   <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />
                   Pending Approvals
                </h3>
                <div className="space-y-3">
                   <div className="flex justify-between items-center bg-black/20 p-3 rounded-lg">
                      <span className="text-sm text-gray-300">New Team Registration: <span className="text-white font-semibold">Falcons CC</span></span>
                      <button className="text-xs bg-primary/10 text-primary px-2 py-1 rounded hover:bg-primary/20">Approve</button>
                   </div>
                   <div className="flex justify-between items-center bg-black/20 p-3 rounded-lg">
                      <span className="text-sm text-gray-300">Score Correction Request: Match #204</span>
                      <button className="text-xs bg-primary/10 text-primary px-2 py-1 rounded hover:bg-primary/20">Review</button>
                   </div>
                </div>
             </div>
           )}

           {/* User Quick Actions */}
           <div className="bg-surface border border-white/5 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                 <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 transition-colors text-left">
                    + Start New Match
                 </button>
                 <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 transition-colors text-left">
                    + Create Tournament
                 </button>
                 <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 transition-colors text-left">
                    Manage Players
                 </button>
                 <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 transition-colors text-left">
                    Team Settings
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}