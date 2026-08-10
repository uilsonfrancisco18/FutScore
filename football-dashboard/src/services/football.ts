import type {
  FootballMatch,
  MatchesResponse,
  ScorersResponse,
  StandingsResponse,
  TeamResponse,
} from "@/src/types/football";

const API_URL = "https://api.football-data.org/v4";

async function fetchFootball<T>(path: string): Promise<T> {
  const token =
    process.env.FOOTBALL_DATA_TOKEN ??
    process.env.FOOTBALL_DATA_TOKE;

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

/* =========================================================
   CLASSIFICAÇÃO
========================================================= */

export async function getStandings(): Promise<StandingsResponse> {
  try {
    return await fetchFootball<StandingsResponse>(
      "/competitions/BSA/standings"
    );
  } catch (error) {
    console.error("Erro ao buscar standings:", error);

    return {
      standings: [],
    };
  }
}

/* =========================================================
   TODAS AS PARTIDAS
========================================================= */

export async function getMatches(): Promise<MatchesResponse> {
  try {
    const data = await fetchFootball<MatchesResponse>(
      "/competitions/BSA/matches?limit=100"
    );

    const matches = [...(data.matches ?? [])];

    const seenIds = new Set<number>();

    const uniqueMatches = matches.filter((match) => {
      if (seenIds.has(match.id)) {
        return false;
      }

      seenIds.add(match.id);
      return true;
    });

    uniqueMatches.sort(
      (a, b) =>
        new Date(a.utcDate).getTime() -
        new Date(b.utcDate).getTime()
    );

    return {
      matches: uniqueMatches,
    };
  } catch (error) {
    console.error("Erro ao buscar partidas:", error);

    return {
      matches: [],
    };
  }
}

/* =========================================================
   PRÓXIMA RODADA
========================================================= */

export async function getNextRoundMatches(): Promise<MatchesResponse> {
  try {
    /*
     * Busca todas as partidas futuras da competição.
     *
     * O limit=100 evita que a API devolva somente
     * uma pequena quantidade de partidas.
     */
    const data = await fetchFootball<MatchesResponse>(
      "/competitions/BSA/matches?status=SCHEDULED&limit=100"
    );

    const now = Date.now();

    /*
     * Apenas partidas que ainda não começaram.
     */
    const futureMatches = (data.matches ?? [])
      .filter((match) => {
        const matchDate = new Date(match.utcDate).getTime();

        return (
          matchDate >= now &&
          (
            match.status === "SCHEDULED" ||
            match.status === "TIMED"
          )
        );
      })
      .sort(
        (a, b) =>
          new Date(a.utcDate).getTime() -
          new Date(b.utcDate).getTime()
      );

    if (futureMatches.length === 0) {
      console.log("Nenhum jogo futuro encontrado.");

      return {
        matches: [],
      };
    }

    /*
     * A primeira partida futura determina
     * a próxima rodada.
     */
    const nextMatchday = futureMatches[0].matchday;

    /*
     * Agora pegamos TODOS os jogos dessa rodada.
     *
     * Não existe slice(0, 5) aqui.
     */
    const nextRound = futureMatches
      .filter(
        (match) => match.matchday === nextMatchday
      )
      .sort(
        (a, b) =>
          new Date(a.utcDate).getTime() -
          new Date(b.utcDate).getTime()
      );

    /*
     * Remove possíveis duplicados.
     */
    const seenIds = new Set<number>();

    const uniqueNextRound = nextRound.filter((match) => {
      if (seenIds.has(match.id)) {
        return false;
      }

      seenIds.add(match.id);
      return true;
    });

    console.log(
      "===================================="
    );
    console.log(
      "PRÓXIMA RODADA:",
      nextMatchday
    );
    console.log(
      "TOTAL DE JOGOS:",
      uniqueNextRound.length
    );
    console.log(
      "JOGOS:",
      uniqueNextRound.map(
        (match) =>
          `${match.homeTeam.name} x ${match.awayTeam.name}`
      )
    );
    console.log(
      "===================================="
    );

    return {
      matches: uniqueNextRound,
    };
  } catch (error) {
    console.error(
      "Erro ao buscar jogos da próxima rodada:",
      error
    );

    return {
      matches: [],
    };
  }
}

/* =========================================================
   PRÓXIMOS JOGOS
========================================================= */

export async function getUpcomingMatches(): Promise<MatchesResponse> {
  try {
    const data = await getNextRoundMatches();

    return {
      matches: data.matches ?? [],
    };
  } catch (error) {
    console.error(
      "Erro ao buscar próximos jogos:",
      error
    );

    return {
      matches: [],
    };
  }
}

/* =========================================================
   ÚLTIMOS RESULTADOS
========================================================= */

export async function getLatestResults(): Promise<MatchesResponse> {
  try {
    const data = await fetchFootball<MatchesResponse>(
      "/competitions/BSA/matches?status=FINISHED&limit=100"
    );

    /*
     * Somente partidas realmente encerradas.
     */
    const finishedMatches = (data.matches ?? [])
      .filter(
        (match) =>
          match.status === "FINISHED" ||
          match.status === "AWARDED"
      )
      .sort(
        (a, b) =>
          new Date(b.utcDate).getTime() -
          new Date(a.utcDate).getTime()
      );

    return {
      matches: finishedMatches,
    };
  } catch (error) {
    console.error(
      "Erro ao buscar resultados recentes:",
      error
    );

    return {
      matches: [],
    };
  }
}

/* =========================================================
   ARTILHEIROS
========================================================= */

export async function getScorers(): Promise<ScorersResponse> {
  try {
    return await fetchFootball<ScorersResponse>(
      "/competitions/BSA/scorers"
    );
  } catch (error) {
    console.error(
      "Erro ao buscar artilheiros:",
      error
    );

    return {
      scorers: [],
    };
  }
}

/* =========================================================
   ASSISTÊNCIAS
========================================================= */

export async function getAssisters(): Promise<ScorersResponse> {
  try {
    const data = await getScorers();

    return {
      scorers: [...data.scorers]
        .filter(
          (scorer) =>
            Number(scorer.assists ?? 0) > 0
        )
        .sort(
          (a, b) =>
            Number(b.assists ?? 0) -
            Number(a.assists ?? 0)
        ),
    };
  } catch (error) {
    console.error(
      "Erro ao buscar assistências:",
      error
    );

    return {
      scorers: [],
    };
  }
}

/* =========================================================
   TIME
========================================================= */

export async function getTeam(
  teamId: string | number
): Promise<TeamResponse | null> {
  try {
    return await fetchFootball<TeamResponse>(
      `/teams/${teamId}`
    );
  } catch (error) {
    console.error(
      "Erro ao buscar time:",
      error
    );

    return null;
  }
}

/* =========================================================
   PARTIDA
========================================================= */

export async function getMatch(
  matchId: string | number
): Promise<FootballMatch | null> {
  try {
    return await fetchFootball<FootballMatch>(
      `/matches/${matchId}`
    );
  } catch (error) {
    console.error(
      "Erro ao buscar partida:",
      error
    );

    return null;
  }
}