import { Trophy, Goal, Flame, Shield } from "lucide-react";
import { StatCard } from "./Pieces/pieces";
import { getStandings } from "@/src/services/football";
import { club as getClub } from "@/src/Lib/futscore-data";

export default async function StatCards() {
  const data = await getStandings();
  const table = data?.standings?.[0]?.table ?? [];

  const leader = table[0];
  const bestAttack = table.reduce((best, current) => {
    if (!best) return current;
    return current.goalsFor > best.goalsFor ? current : best;
  }, table[0]);
  const bestDefense = table.reduce((best, current) => {
    if (!best) return current;
    return current.goalsAgainst < best.goalsAgainst ? current : best;
  }, table[0]);
  const totalGoals = table.reduce((total, row) => total + row.goalsFor, 0);

  const leaderClub = leader ? getClub(leader.team.name) : getClub("unknown");
  const attackClub = bestAttack ? getClub(bestAttack.team.name) : getClub("unknown");
  const defenseClub = bestDefense ? getClub(bestDefense.team.name) : getClub("unknown");

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        icon={<Trophy className="h-5 w-5" />}
        label="Líder"
        value={leaderClub.short}
        sub={`${leader?.points ?? 0} pontos · ${leader?.won ?? 0} vitórias`}
      />

      <StatCard
        icon={<Goal className="h-5 w-5" />}
        label="Total de gols"
        value={String(totalGoals)}
        sub={`Média de ${(totalGoals / Math.max(table.length, 1)).toFixed(2)} por jogo`}
        tone="info"
      />

      <StatCard
        icon={<Flame className="h-5 w-5" />}
        label="Melhor ataque"
        value={`${attackClub.short} · ${bestAttack?.goalsFor ?? 0}`}
        sub={`${((bestAttack?.goalsFor ?? 0) / Math.max(bestAttack?.playedGames ?? 1, 1)).toFixed(1)} gols por partida`}
        tone="warning"
      />

      <StatCard
        icon={<Shield className="h-5 w-5" />}
        label="Melhor defesa"
        value={`${defenseClub.short} · ${bestDefense?.goalsAgainst ?? 0}`}
        sub={`${bestDefense?.goalsAgainst ?? 0} sofridos`}
        tone="destructive"
      />
    </div>
  );
}