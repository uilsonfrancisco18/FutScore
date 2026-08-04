import Link from "next/link";
import { MapPin } from "lucide-react";

import { Crest, StatusChip } from "./Crest/Crest";
import { club as getClub } from "@/src/Lib/futscore-data";
import type { Fixture } from "@/src/types/football";

export default function FixtureCard({
  fixture,
}: {
  fixture: Fixture;
}) {
    const home = getClub(fixture.home) ?? {
  short: fixture.home,
};

const away = getClub(fixture.away) ?? {
  short: fixture.away,
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
              club={fixture.home}
              size="sm"
            />
            <span>{home.short || fixture.home}</span>
          </div>

          <span className="font-bold">
            {fixture.score?.[0] ?? "-"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crest
              club={fixture.away}
              size="sm"
            />
            <span>{away.short || fixture.away}</span>
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