export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  venue?: string;
  founded?: number;
  clubColors?: string;
}

export interface Standing {
  position: number;
  team: Team;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form?: string;
}

export interface StandingsResponse {
  standings?: Array<{
    table: Standing[];
  }>;
}

export interface ScoreValue {
  home: number | null;
  away: number | null;
}

export interface MatchScore {
  fullTime?: ScoreValue;
  halfTime?: ScoreValue;
  winner?: string | null;
}

export type FixtureStatus = "upcoming" | "live" | "finished";

export interface Fixture {
  id: string;
  home: string;
  away: string;
  date: string;
  day: "today" | "tomorrow" | "weekend";
  time: string;
  stadium: string;
  round: number;
  status: FixtureStatus;
  minute?: string;
  score?: [number, number];
}

export interface FootballMatch {
  id: number;
  utcDate: string;
  status: string;
  matchday?: number;
  stage?: string;
  group?: string;
  homeTeam: Team;
  awayTeam: Team;
  score: MatchScore;
  venue?: string;
}

export interface MatchesResponse {
  matches: FootballMatch[];
}

export interface Scorer {
  player: {
    name: string;
    firstName?: string;
    lastName?: string;
  };
  team: Team;
  goals: number;
  assists?: number;
}

export interface ScorersResponse {
  scorers: Scorer[];
}

export interface TeamResponse extends Team {
  venue?: string;
  founded?: number;
  clubColors?: string;
}