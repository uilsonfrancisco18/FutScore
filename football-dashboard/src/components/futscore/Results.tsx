import { ScoreRow } from "./Pieces/pieces";
import { getMatches } from "@/src/services/football";

export default async function Results() {
  const data = await getMatches();
  const results = (data.matches ?? [])
    .filter((match) => match.status === "FINISHED" || match.status === "AWARDED")
    .slice(0, 5)
    .map((match) => ({
      home: match.homeTeam.name,
      away: match.awayTeam.name,
      score: [
        match.score?.fullTime?.home ?? 0,
        match.score?.fullTime?.away ?? 0,
      ] as [number, number],
      round: match.matchday ?? 0,
    }));

  return (
    <div className="space-y-3">
      {results.map((result, index) => (
        <ScoreRow
          key={`${result.home}-${result.away}-${index}`}
          home={result.home}
          away={result.away}
          score={result.score}
          round={result.round}
        />
      ))}
    </div>
  );
}