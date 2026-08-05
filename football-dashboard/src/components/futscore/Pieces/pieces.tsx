import { MapPin } from "lucide-react";
import { Crest, StatusChip } from "../Crest/Crest";
import { cn } from "@/src/Lib/utils";
import Link from "next/link";
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

export function SectionCard({
  title,
  action,
  children,
  className,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("surface p-5", className)}>
      <header className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <h2 className="truncate font-display text-base font-bold">{title}</h2>
        {action}
      </header>
      {children}
    </section>
  );
}

export function StatCard({
  icon,
  label,
  value,
  sub,
  tone = "primary",
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  tone?: "primary" | "info" | "warning" | "destructive";
}) {
  const tones = {
    primary: "text-primary bg-primary/12 ring-primary/25",
    info: "text-info bg-info/12 ring-info/25",
    warning: "text-warning bg-warning/12 ring-warning/25",
    destructive: "text-destructive bg-destructive/12 ring-destructive/25",
  };
  return (
    <div className="glass lift p-4">
      <div className="flex items-center gap-3">
        <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1", tones[tone])}>
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="truncate font-display text-lg font-bold">{value}</p>
        </div>
      </div>
      {sub && <p className="mt-3 text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function FixtureCard({ f }: { f: Fixture }) {
  const fixtureWithTeams = f as FixtureWithTeams;
  const homeTeam = fixtureWithTeams.homeTeam ?? {
    name: f.home,
    shortName: f.home,
  };
  const awayTeam = fixtureWithTeams.awayTeam ?? {
    name: f.away,
    shortName: f.away,
  };

  return (
    <Link
      href="/partida"
      className="surface lift block p-4"
    >
      <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
        <p className="truncate text-xs text-muted-foreground">
          Rodada {f.round} · {f.date}
        </p>
        <StatusChip status={f.status} minute={f.minute} />
      </div>

      <div className="space-y-2.5">
        <TeamLine club={homeTeam} name={homeTeam.shortName || homeTeam.name || f.home} score={f.score?.[0]} dim={f.status === "finished" && (f.score?.[0] ?? 0) < (f.score?.[1] ?? 0)} />
        <TeamLine club={awayTeam} name={awayTeam.shortName || awayTeam.name || f.away} score={f.score?.[1]} dim={f.status === "finished" && (f.score?.[1] ?? 0) < (f.score?.[0] ?? 0)} />
      </div>

      <div className="mt-3 flex items-center gap-3 border-t border-border/70 pt-3 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">{f.time}</span>
        <span className="flex min-w-0 items-center gap-1">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{f.stadium}</span>
        </span>
      </div>
    </Link>
  );
}

function TeamLine({
  club,
  name,
  score,
  dim,
}: {
  club: string | { crest?: string; name?: string; shortName?: string };
  name: string;
  score?: number | undefined;
  dim?: boolean | undefined;
}) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
      <Crest club={club} size="sm" />
      <span className={cn("truncate text-sm font-semibold", dim && "text-muted-foreground")}>
        {name}
      </span>
      <span
        className={cn(
          "font-display text-sm font-bold tabular-nums",
          score === undefined ? "text-muted-foreground" : dim ? "text-muted-foreground" : "text-foreground",
        )}
      >
        {score ?? "–"}
      </span>
    </div>
  );
}

export function ScoreRow({
  home,
  away,
  score,
  round,
}: {
  home: string | { crest?: string; name?: string; shortName?: string };
  away: string | { crest?: string; name?: string; shortName?: string };
  score: [number, number];
  round: number;
}) {
  const homeTeam = typeof home === "string" ? { name: home, shortName: home } : home;
  const awayTeam = typeof away === "string" ? { name: away, shortName: away } : away;

  return (
    <div className="lift rounded-xl border border-border/70 bg-secondary/30 p-3">
      <p className="mb-2 text-[11px] text-muted-foreground">Rodada {round} · Encerrado</p>
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <Crest club={homeTeam} size="sm" />
          <span className="truncate text-sm font-semibold">{homeTeam.shortName || homeTeam.name || "Time"}</span>
        </div>
        <span className="rounded-lg bg-background/60 px-2.5 py-1 font-display text-sm font-bold tabular-nums">
          {score[0]} <span className="text-muted-foreground">×</span> {score[1]}
        </span>
        <div className="flex min-w-0 items-center justify-end gap-2">
          <span className="truncate text-right text-sm font-semibold">{awayTeam.shortName || awayTeam.name || "Time"}</span>
          <Crest club={awayTeam} size="sm" />
        </div>
      </div>
    </div>
  );
}

export function ZoneLegend() {
  const items = [
    { label: "Libertadores", dot: "bg-primary" },
    { label: "Pré-Libertadores", dot: "bg-warning" },
    { label: "Sul-Americana", dot: "bg-info" },
    { label: "Rebaixamento", dot: "bg-destructive" },
  ];
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {items.map((i) => (
        <span key={i.label} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <span className={cn("h-2 w-2 rounded-full", i.dot)} />
          {i.label}
        </span>
      ))}
    </div>
  );
}

export function StatBar({ label, home, away }: { label: string; home: number; away: number }) {
  const total = home + away || 1;
  const pct = (home / total) * 100;
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="font-display font-bold tabular-nums">{home}</span>
        <span className="text-muted-foreground">{label}</span>
        <span className="font-display font-bold tabular-nums">{away}</span>
      </div>
      <div className="flex h-1.5 overflow-hidden rounded-full bg-border">
        <span className="bg-primary transition-all duration-700" style={{ width: `${pct}%` }} />
        <span className="flex-1 bg-info" />
      </div>
    </div>
  );
}
