import Link from "next/link";

import { Crest, FormPills } from "../Crest/Crest";
import {
  club as getClub,
  standings,
  zoneMeta,
  zoneOf,
} from "@/src/Lib/futscore-data";
import { cn } from "@/src/Lib/utils";

export default function StandingsTable({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[620px] border-collapse text-sm">
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
          {standings.map((r) => {
            const zone = zoneOf(r.pos);
            const meta = zone ? zoneMeta[zone] : null;
            const c = getClub(r.club);
            const gd = r.gf - r.ga;

            return (
              <tr
                key={r.club}
                className={cn(
                  "group border-t border-border/60 transition-colors",
                  r.pos % 2 === 0 && "bg-secondary/25",
                  "hover:bg-accent/60"
                )}
              >
                <td className={cn("px-3 py-2.5", meta?.text)}>
                  <span className="zone-bar flex items-center pl-3">
                    <span className="font-display text-xs font-bold tabular-nums text-foreground">
                      {r.pos}
                    </span>
                  </span>
                </td>

                <td className="px-3 py-2.5">
                  <Link
                    href="/times"
                    className="flex min-w-0 items-center gap-2.5 transition-colors group-hover:text-primary"
                  >
                    <Crest club={r.club} size="sm" />
                    <span className="truncate font-semibold">
                      {c.short}
                    </span>
                  </Link>
                </td>

                <td className="px-2 py-2.5 text-center tabular-nums text-muted-foreground">
                  {r.p}
                </td>

                <td className="px-2 py-2.5 text-center tabular-nums">
                  {r.w}
                </td>

                <td className="px-2 py-2.5 text-center tabular-nums text-muted-foreground">
                  {r.d}
                </td>

                <td className="px-2 py-2.5 text-center tabular-nums text-muted-foreground">
                  {r.l}
                </td>

                <td
                  className={cn(
                    "px-2 py-2.5 text-center tabular-nums",
                    gd > 0
                      ? "text-primary"
                      : gd < 0
                      ? "text-destructive"
                      : "text-muted-foreground"
                  )}
                >
                  {gd > 0 ? `+${gd}` : gd}
                </td>

                {!compact && (
                  <td className="hidden px-3 py-2.5 lg:table-cell">
                    <FormPills form={r.form} />
                  </td>
                )}

                <td className="px-3 py-2.5 text-center">
                  <span className="font-display text-sm font-bold tabular-nums">
                    {r.pts}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}