import FixtureCard from "@/src/components/futscore/FixtureCard";
import { getMatches } from "@/src/services/football";
import type { Fixture } from "@/src/types/football";

type FixtureWithTeams = Fixture & {
  homeTeam?: {
    name?: string;
    shortName?: string;
    crest?: string;
  };
  awayTeam?: {
    name?: string;
    shortName?: string;
    crest?: string;
  };
};

export default async function Fixtures() {
  const data = await getMatches();
  const fixtures: FixtureWithTeams[] = (data.matches ?? [])
    .filter((match) => match.status === "SCHEDULED" || match.status === "TIMED" || match.status === "LIVE")
    .slice(0, 5)
    .map((match) => {
      const date = new Date(match.utcDate);
      const dateLabel = date.toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "short",
      });

      return {
        id: String(match.id),
        home: match.homeTeam.name,
        away: match.awayTeam.name,
        homeTeam: {
          name: match.homeTeam.name,
          shortName: match.homeTeam.shortName || match.homeTeam.name,
          crest: match.homeTeam.crest,
        },
        awayTeam: {
          name: match.awayTeam.name,
          shortName: match.awayTeam.shortName || match.awayTeam.name,
          crest: match.awayTeam.crest,
        },
        date: `${dateLabel}`,
        day: "today",
        time: date.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        stadium: match.venue ?? "Estádio",
        round: match.matchday ?? 0,
        status: match.status === "LIVE" ? "live" : "upcoming",
        minute: match.status === "LIVE" ? "Ao vivo" : undefined,
      };
    });

  return (
    <div className="space-y-3">
      {fixtures.map((fixture) => (
        <FixtureCard key={fixture.id} fixture={fixture} />
      ))}
    </div>
  );
}
