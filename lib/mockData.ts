export const FEATURE_DATA = [
  {
    title: "Real-time Scoring",
    description: "Ball-by-ball updates with sub-second latency for live audiences.",
    icon: "Activity"
  },
  {
    title: "Tournament Mgmt",
    description: "Automated fixtures, points tables, and net run rate calculations.",
    icon: "Trophy"
  },
  {
    title: "Player Analytics",
    description: "Deep dive stats: Wagon wheels, pitch maps, and career tracking.",
    icon: "BarChart2"
  }
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "₹0",
    period: "/month",
    features: ["1 Tournament", "Live Scoring", "Basic Stats", "Ad-supported"],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Pro Club",
    price: "₹999",
    period: "/month",
    features: ["Unlimited Tournaments", "Advanced Analytics", "Live Streaming Overlay", "Custom Domain", "No Ads"],
    cta: "Go Pro",
    popular: true
  },
  {
    name: "Association",
    price: "₹4,999",
    period: "/month",
    features: ["White Label App", "API Access", "Priority Support", "Sponsor Management", "Dedicated Server"],
    cta: "Contact Sales",
    popular: false
  }
];

export const LIVE_MATCHES = [
  {
    id: 1,
    teamA: "Royal Strikers",
    teamB: "Thunder XI",
    scoreA: "145/3 (15.2)",
    scoreB: "Yet to bat",
    status: "LIVE",
    tournament: "Premier League 2024"
  },
  {
    id: 2,
    teamA: "Spartans",
    teamB: "Vikings CC",
    scoreA: "182/6 (20)",
    scoreB: "98/4 (12.1)",
    status: "LIVE",
    tournament: "City Championship"
  }
];

export const UPCOMING_MATCHES = [
  {
    id: 3,
    teamA: "Dynamos",
    teamB: "Warriors",
    date: "Tomorrow, 10:00 AM",
    tournament: "Premier League 2024"
  },
  {
    id: 4,
    teamA: "Eagles",
    teamB: "Sharks",
    date: "Oct 24, 2:00 PM",
    tournament: "City Championship"
  }
];

export const TEAMS = [
  { id: 1, name: "Royal Strikers", players: 15, wins: 12, losses: 3 },
  { id: 2, name: "Thunder XI", players: 14, wins: 10, losses: 5 },
  { id: 3, name: "Spartans", players: 16, wins: 8, losses: 8 },
  { id: 4, name: "Vikings CC", players: 13, wins: 5, losses: 10 },
  { id: 5, name: "Dynamos", players: 15, wins: 11, losses: 4 },
];

export const MATCH_DETAILS_MOCK = {
  id: 1,
  teams: {
    a: { name: "Royal Strikers", score: "145/3", overs: "15.2" },
    b: { name: "Thunder XI", score: "Yet to bat", overs: "" }
  },
  venue: "Wankhede Local Ground, Mumbai",
  toss: "Royal Strikers won the toss and elected to bat",
  batsmen: [
    { name: "V. Kohli (C)", runs: 72, balls: 45, fours: 8, sixes: 2, strikeRate: 160.0, status: "not out" },
    { name: "R. Sharma", runs: 45, balls: 32, fours: 5, sixes: 1, strikeRate: 140.6, status: "c & b Bumrah" },
    { name: "S. Gill", runs: 12, balls: 10, fours: 1, sixes: 0, strikeRate: 120.0, status: "lbw Ashwin" },
    { name: "S. Iyer", runs: 8, balls: 5, fours: 1, sixes: 0, strikeRate: 160.0, status: "not out" }
  ],
  bowlers: [
    { name: "J. Bumrah", overs: 3.2, maidens: 0, runs: 28, wickets: 1, economy: 8.4 },
    { name: "R. Ashwin", overs: 4, maidens: 0, runs: 32, wickets: 1, economy: 8.0 },
    { name: "R. Jadeja", overs: 4, maidens: 1, runs: 25, wickets: 1, economy: 6.25 },
    { name: "H. Pandya", overs: 4, maidens: 0, runs: 45, wickets: 0, economy: 11.25 }
  ],
  commentary: [
    { over: "15.2", text: "FOUR! Beautiful cover drive by Kohli. Finds the gap perfectly.", type: "four" },
    { over: "15.1", text: "1 run, pushed to long on.", type: "run" },
    { over: "15.0", text: "End of Over 15. Royal Strikers are 140/3.", type: "summary" },
    { over: "14.6", text: "SIX! Massive hit over deep mid-wicket!", type: "six" }
  ]
};