import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserRole } from '../lib/constants';
import { Shield, ShieldCheck, User } from 'lucide-react';

interface RoleContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>(UserRole.USER);
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};

export default function RoleSwitcher() {
  const { role, setRole } = useRole();
  const [isOpen, setIsOpen] = useState(false);

  // Auto-close after selection
  const handleSetRole = (r: UserRole) => {
    setRole(r);
    setIsOpen(false);
  }

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <div className={`absolute bottom-full right-0 mb-4 bg-surface border border-white/10 p-2 rounded-lg shadow-2xl transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col space-y-1 w-40">
           <div className="text-xs text-gray-500 uppercase font-bold px-2 py-1">Simulate Role</div>
           <button 
            onClick={() => handleSetRole(UserRole.SUPER_ADMIN)}
            className={`flex items-center px-3 py-2 text-sm rounded-md hover:bg-white/5 ${role === UserRole.SUPER_ADMIN ? 'text-primary bg-primary/10' : 'text-gray-300'}`}
           >
            <ShieldCheck className="w-4 h-4 mr-2" /> Super Admin
           </button>
           <button 
            onClick={() => handleSetRole(UserRole.ADMIN)}
            className={`flex items-center px-3 py-2 text-sm rounded-md hover:bg-white/5 ${role === UserRole.ADMIN ? 'text-primary bg-primary/10' : 'text-gray-300'}`}
           >
            <Shield className="w-4 h-4 mr-2" /> Admin
           </button>
           <button 
            onClick={() => handleSetRole(UserRole.USER)}
            className={`flex items-center px-3 py-2 text-sm rounded-md hover:bg-white/5 ${role === UserRole.USER ? 'text-primary bg-primary/10' : 'text-gray-300'}`}
           >
            <User className="w-4 h-4 mr-2" /> User
           </button>
        </div>
      </div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-background font-bold py-2 px-4 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:bg-highlight transition-colors flex items-center"
      >
        {role === UserRole.SUPER_ADMIN && <ShieldCheck className="w-4 h-4 mr-2" />}
        {role === UserRole.ADMIN && <Shield className="w-4 h-4 mr-2" />}
        {role === UserRole.USER && <User className="w-4 h-4 mr-2" />}
        {role.replace('_', ' ')}
      </button>
    </div>
  );
}