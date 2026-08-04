import Image from "next/image";
import Link from "next/link";

import { FormPills } from "@/src/components/futscore/Crest/Crest";
import { cn } from "@/src/Lib/utils";

import { getStandings } from "@/src/services/football";
import type { Standing } from "@/src/types/football";

export default async function StandingsTable({
  compact = false,
}: {
  compact?: boolean;
}) {
  const data = await getStandings();

  const table: Standing[] = data?.standings?.[0]?.table ?? [];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-155 border-collapse text-sm">
        <thead>
          <tr className="text-[11px] uppercase tracking-wider text-muted-foreground">
            <th className="px-3 py-2.5 text-left font-medium">#</th>
            <th className="px-3 py-2.5 text-left font-medium">Clube</th>
            <th className="px-2 py-2.5 text-center font-medium">J</th>
            <th className="px-2 py-2.5 text-center font-medium">V</th>
            <th className="px-2 py-2.5 text-center font-medium">E</th>
            <th className="px-2 py-2.5 text-center font-medium">D</th>
            <th className="px-2 py-2.5 text-center font-medium">SG</th>

            {!compact && (
              <th className="hidden px-3 py-2.5 text-left font-medium lg:table-cell">
                Forma
              </th>
            )}

            <th className="px-3 py-2.5 text-center font-medium">P</th>
          </tr>
        </thead>

        <tbody>
          {table.map((club) => (
            <tr
              key={club.team.id}
              className={cn(
                "group border-t border-border/60 transition-colors",
                club.position % 2 === 0 && "bg-secondary/25",
                "hover:bg-accent/60"
              )}
            >
              <td className="px-3 py-2.5">
                <span className="font-display text-xs font-bold tabular-nums">
                  {club.position}
                </span>
              </td>

              <td className="px-3 py-2.5">
                <Link
                  href="/times"
                  className="flex min-w-0 items-center gap-2.5 transition-colors group-hover:text-primary"
                >
                  {club.team.crest ? (
                    <Image
                      src={club.team.crest}
                      alt={`Escudo de ${club.team.name}`}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-contain"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-muted-foreground">
                      {club.team.tla || "CL"}
                    </div>
                  )}

                  <span className="truncate font-semibold">
                    {club.team.shortName || club.team.name}
                  </span>
                </Link>
              </td>

              <td className="px-2 py-2.5 text-center tabular-nums text-muted-foreground">
                {club.playedGames}
              </td>

              <td className="px-2 py-2.5 text-center tabular-nums">
                {club.won}
              </td>

              <td className="px-2 py-2.5 text-center tabular-nums text-muted-foreground">
                {club.draw}
              </td>

              <td className="px-2 py-2.5 text-center tabular-nums text-muted-foreground">
                {club.lost}
              </td>

              <td
                className={cn(
                  "px-2 py-2.5 text-center tabular-nums",
                  club.goalDifference > 0
                    ? "text-primary"
                    : club.goalDifference < 0
                    ? "text-destructive"
                    : "text-muted-foreground"
                )}
              >
                {club.goalDifference > 0
                  ? `+${club.goalDifference}`
                  : club.goalDifference}
              </td>

              {!compact && (
                <td className="hidden px-3 py-2.5 lg:table-cell">
                  <FormPills
                    form={
                      club.form
                        ? (club.form
                            .split(",")
                            .map((v) => v.trim()) as ("W" | "D" | "L")[])
                        : []
                    }
                  />
                </td>
              )}

              <td className="px-3 py-2.5 text-center">
                <span className="font-display text-sm font-bold tabular-nums">
                  {club.points}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}