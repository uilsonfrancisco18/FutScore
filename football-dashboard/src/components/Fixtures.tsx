import FixtureCard from "@/src/components/futscore/FixtureCard";
import { fixtures } from "@/src/Lib/futscore-data";

export default function Fixtures() {
  return (
    <div className="space-y-3">
      {fixtures.map((fixture) => (
        <FixtureCard key={fixture.id} fixture={fixture} />
      ))}
    </div>
  );
}
