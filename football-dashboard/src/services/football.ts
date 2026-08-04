import type {
  FootballMatch,
  MatchesResponse,
  ScorersResponse,
  StandingsResponse,
  TeamResponse,
} from "@/src/types/football";

const API_URL = "https://api.football-data.org/v4";

async function fetchFootball<T>(path: string): Promise<T> {
  const token = process.env.FOOTBALL_DATA_TOKEN ?? process.env.FOOTBALL_DATA_TOKE;

  if (!token) {
    throw new Error("FOOTBALL_DATA_TOKEN is not configured.");
  }

  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "X-Auth-Token": token,
    },
    cache: "no-store",
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }

  return data as T;
}

export async function getStandings(): Promise<StandingsResponse> {
  try {
    return await fetchFootball<StandingsResponse>("/competitions/BSA/standings");
  } catch (error) {
    console.error("Erro ao buscar standings:", error);
    return { standings: [] };
  }
}

export async function getMatches(): Promise<MatchesResponse> {
  try {
    const [scheduled, finished] = await Promise.all([
      fetchFootball<MatchesResponse>("/competitions/BSA/matches?status=SCHEDULED"),
      fetchFootball<MatchesResponse>("/competitions/BSA/matches?status=FINISHED"),
    ]);

    return {
      matches: [...(scheduled.matches ?? []), ...(finished.matches ?? [])],
    };
  } catch (error) {
    console.error("Erro ao buscar partidas:", error);
    return { matches: [] };
  }
}

export async function getScorers(): Promise<ScorersResponse> {
  try {
    return await fetchFootball<ScorersResponse>("/competitions/BSA/scorers");
  } catch (error) {
    console.error("Erro ao buscar artilheiros:", error);
    return { scorers: [] };
  }
}

export async function getAssisters(): Promise<ScorersResponse> {
  try {
    const data = await getScorers();

    return {
      scorers: [...data.scorers]
        .filter((scorer) => Number(scorer.assists ?? 0) > 0)
        .sort((a, b) => Number(b.assists ?? 0) - Number(a.assists ?? 0)),
    };
  } catch (error) {
    console.error("Erro ao buscar assistências:", error);
    return { scorers: [] };
  }
}

export async function getTeam(teamId: string | number): Promise<TeamResponse | null> {
  try {
    return await fetchFootball<TeamResponse>(`/teams/${teamId}`);
  } catch (error) {
    console.error("Erro ao buscar time:", error);
    return null;
  }
}

export async function getMatch(matchId: string | number): Promise<FootballMatch | null> {
  try {
    return await fetchFootball<FootballMatch>(`/matches/${matchId}`);
  } catch (error) {
    console.error("Erro ao buscar partida:", error);
    return null;
  }
}