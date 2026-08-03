import { ScoreRow } from "./Pieces/pieces";
import { results } from "@/src/Lib/futscore-data";

export default function Results() {
  return (
    <div className="space-y-3">
      {results.map((result, index) => (
        <ScoreRow
          key={index}
          home={result.home}
          away={result.away}
          score={result.score}
          round={result.round}
        />
      ))}
    </div>
  );
}