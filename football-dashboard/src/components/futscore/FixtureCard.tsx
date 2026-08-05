import Link from "next/link";
import { MapPin } from "lucide-react";

import { Crest, StatusChip } from "./Crest/Crest";
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

export default function FixtureCard({
  fixture,
}: {
  fixture: Fixture;
}) {
  const fixtureWithTeams = fixture as FixtureWithTeams;
  const homeTeam = fixtureWithTeams.homeTeam ?? {
    name: fixture.home,
    shortName: fixture.home,
  };
  const awayTeam = fixtureWithTeams.awayTeam ?? {
    name: fixture.away,
    shortName: fixture.away,
  };

  return (
    <Link
      href="/partida"
      className="block rounded-2xl bg-[#161D2F] p-5 transition hover:bg-[#1B2438]"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-gray-400">
          Rodada {fixture.round} • {fixture.date}
        </span>

        <StatusChip
          status={fixture.status}
          minute={fixture.minute}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crest
              club={homeTeam}
              size="sm"
            />
            <span>{homeTeam.shortName || homeTeam.name || fixture.home}</span>
          </div>

          <span className="font-bold">
            {fixture.score?.[0] ?? "-"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crest
              club={awayTeam}
              size="sm"
            />
            <span>{awayTeam.shortName || awayTeam.name || fixture.away}</span>
          </div>

          <span className="font-bold">
            {fixture.score?.[1] ?? "-"}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-gray-700 pt-3 text-sm text-gray-400">
        <MapPin size={15} />
        {fixture.stadium}
      </div>
    </Link>
  );
}