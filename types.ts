export interface Match {
  id: number;
  teamA: string;
  teamB: string;
  scoreA?: string;
  scoreB?: string;
  status?: string;
  date?: string;
  tournament: string;
}

export interface Team {
  id: number;
  name: string;
  players: number;
  wins: number;
  losses: number;
}
