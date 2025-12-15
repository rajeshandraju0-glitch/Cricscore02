import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoleSwitcher, { RoleProvider } from './components/RoleSwitcher';

// Import Pages (mapped from app/ directory structure)
import LandingPage from './app/page';
import LoginPage from './app/login/page';
import SignupPage from './app/signup/page';
import PricingPage from './app/pricing/page';

// Dashboard Components
import DashboardLayout from './app/dashboard/layout';
import DashboardHome from './app/dashboard/page';
import TournamentsPage from './app/dashboard/tournaments/page';
import MatchesPage from './app/dashboard/matches/page';
import MatchDetailPage from './app/dashboard/matches/detail';
import TeamsPage from './app/dashboard/teams/page';

// Layout Wrapper to mimic root layout.tsx
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <div className="pt-16 flex-grow">
        {children}
      </div>
      <Footer />
      <RoleSwitcher />
    </div>
  );
};

export default function App() {
  return (
    <RoleProvider>
      <Router>
        <RootLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            
            {/* Nested Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="tournaments" element={<TournamentsPage />} />
              <Route path="matches" element={<MatchesPage />} />
              <Route path="matches/:id" element={<MatchDetailPage />} />
              <Route path="teams" element={<TeamsPage />} />
            </Route>

            {/* Catch all redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </RootLayout>
      </Router>
    </RoleProvider>
  );
}