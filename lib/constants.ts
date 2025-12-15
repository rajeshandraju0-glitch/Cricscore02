export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export const APP_NAME = "CricScore";
export const APP_DESCRIPTION = "The Future of Local Cricket Scoring";

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Dashboard', href: '/dashboard' },
];

export const DASHBOARD_NAV = [
  { name: 'Overview', href: '/dashboard' },
  { name: 'Tournaments', href: '/dashboard/tournaments' },
  { name: 'Matches', href: '/dashboard/matches' },
  { name: 'Teams', href: '/dashboard/teams' },
];