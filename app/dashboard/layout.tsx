import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { LayoutDashboard, Trophy, Users, Tv } from 'lucide-react';
import { DASHBOARD_NAV } from '../../lib/constants';

// This component acts as a nested layout wrapper for dashboard routes
export default function DashboardLayout() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
      {/* Sidebar for Desktop / Topbar for Mobile */}
      <aside className="w-full md:w-64 bg-surface/30 border-r border-white/5 flex-shrink-0">
        <div className="p-4">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">Menu</h2>
          <nav className="space-y-1">
            {DASHBOARD_NAV.map((item) => {
               const Icon = 
                 item.name === 'Overview' ? LayoutDashboard :
                 item.name === 'Tournaments' ? Trophy :
                 item.name === 'Matches' ? Tv :
                 Users;

               return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
               )
            })}
          </nav>
        </div>
        
        <div className="p-4 mt-auto">
           <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-4">
              <h3 className="text-white text-sm font-bold mb-1">Upgrade to Pro</h3>
              <p className="text-xs text-gray-400 mb-3">Unlock advanced stats and custom domains.</p>
              <button className="w-full text-xs bg-primary text-background font-bold py-2 rounded hover:bg-highlight transition-colors">
                Upgrade Now
              </button>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}