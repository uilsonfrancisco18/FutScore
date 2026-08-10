import FixtureCard from "@/src/components/futscore/FixtureCard";
import { getUpcomingMatches } from "@/src/services/football";
import type { Fixture } from "@/src/types/football";

type FixtureWithTeams = Fixture & {
  homeTeam: {
    name: string;
    shortName: string;
    crest: string;
  };
  awayTeam: {
    name: string;
    shortName: string;
    crest: string;
  };
};

export default async function Fixtures() {
  const data = await getUpcomingMatches();

  const fixtures: FixtureWithTeams[] = (data.matches ?? []).map((match) => {
    const date = new Date(match.utcDate);

    const dateLabel = date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
    });

    const homeScore = match.score?.fullTime?.home;
    const awayScore = match.score?.fullTime?.away;

    const score: [number, number] | undefined =
      homeScore != null && awayScore != null
        ? [homeScore, awayScore]
        : undefined;

    return {
      id: String(match.id),

      home: match.homeTeam.name,
      away: match.awayTeam.name,

      homeTeam: {
        name: match.homeTeam.name,
        shortName:
          match.homeTeam.shortName || match.homeTeam.name,
        crest: match.homeTeam.crest,
      },

      awayTeam: {
        name: match.awayTeam.name,
        shortName:
          match.awayTeam.shortName || match.awayTeam.name,
        crest: match.awayTeam.crest,
      },

      date: dateLabel,

      day: "weekend",

      time: date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),

      stadium: match.venue ?? "Estádio não informado",

      round: match.matchday ?? 0,

      status:
        match.status === "LIVE"
          ? "live"
          : "upcoming",

      minute:
        match.status === "LIVE"
          ? "Ao vivo"
          : undefined,

      score,
    };
  });

  return (
    <div className="space-y-4">
      {fixtures.length === 0 ? (
        <div className="rounded-xl border border-gray-700 bg-[#111827] p-6 text-center text-gray-400">
          Nenhum jogo da próxima rodada encontrado.
        </div>
      ) : (
        fixtures.map((fixture) => (
          <FixtureCard
            key={fixture.id}
            fixture={fixture}
          />
        ))
      )}
    </div>
  );
}