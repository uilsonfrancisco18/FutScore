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

export async function getUpcomingMatches(): Promise<MatchesResponse> {
  try {
    const [scheduled, timed, live, inPlay] = await Promise.all([
      fetchFootball<MatchesResponse>("/competitions/BSA/matches?status=SCHEDULED"),
      fetchFootball<MatchesResponse>("/competitions/BSA/matches?status=TIMED"),
      fetchFootball<MatchesResponse>("/competitions/BSA/matches?status=LIVE"),
      fetchFootball<MatchesResponse>("/competitions/BSA/matches?status=IN_PLAY"),
    ]);

    const matches = [
      ...(scheduled.matches ?? []),
      ...(timed.matches ?? []),
      ...(live.matches ?? []),
      ...(inPlay.matches ?? []),
    ];

    const seenIds = new Set<string | number>();
    const uniqueMatches = matches.filter((match) => {
      const matchId = match.id;

      if (seenIds.has(matchId)) {
        return false;
      }

      seenIds.add(matchId);
      return true;
    });

    uniqueMatches.sort((a, b) => new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime());

    return {
      matches: uniqueMatches.slice(0, 5),
    };
  } catch (error) {
    console.error("Erro ao buscar próximos jogos:", error);
    return { matches: [] };
  }
}

export async function getLatestResults(): Promise<MatchesResponse> {
  try {
    const data = await fetchFootball<MatchesResponse>("/competitions/BSA/matches?status=FINISHED");
    const matches = [...(data.matches ?? [])].sort(
      (a, b) => new Date(b.utcDate).getTime() - new Date(a.utcDate).getTime(),
    );

    return {
      matches: matches.slice(0, 5),
    };
  } catch (error) {
    console.error("Erro ao buscar resultados recentes:", error);
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