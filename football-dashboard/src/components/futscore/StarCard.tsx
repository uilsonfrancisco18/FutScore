import { Trophy, Goal, Flame, Shield } from "lucide-react";
import { StatCard } from "./Pieces/pieces";
import { getStandings } from "@/src/services/football";
import { club as getClub } from "@/src/Lib/futscore-data";

export default async function StatCards() {
  const data = await getStandings();
  const table = data?.standings?.[0]?.table ?? [];

  if (table.length === 0) {
    return null;
  }

  // Líder
  const leader = table[0];

  // Melhor ataque
  const bestAttack = table.reduce((best, current) => {
    if (!best) return current;

    return current.goalsFor > best.goalsFor ? current : best;
  }, table[0]);

  // Melhor defesa
  const bestDefense = table.reduce((best, current) => {
    if (!best) return current;

    return current.goalsAgainst < best.goalsAgainst ? current : best;
  }, table[0]);

  /*
   * A API contabiliza os gols para os dois clubes.
   *
   * Exemplo:
   * Flamengo 2 x 1 Palmeiras
   *
   * Flamengo -> goalsFor +2
   * Palmeiras -> goalsFor +1
   *
   * Por isso, para obter o total da competição,
   * somamos os gols e dividimos pelo número de
   * registros dos clubes.
   */
  const goalsForSum = table.reduce(
    (total, row) => total + Number(row.goalsFor ?? 0),
    0
  );

  const totalGoals = Math.round(goalsForSum / 2);

  /*
   * Cada partida também é contabilizada para os
   * dois clubes.
   *
   * Portanto:
   * soma dos jogos dos clubes / 2 = jogos realizados.
   */
  const playedGamesSum = table.reduce(
    (total, row) => total + Number(row.playedGames ?? 0),
    0
  );

  const totalMatches = Math.round(playedGamesSum / 2);

  /*
   * Média de gols por partida.
   */
  const averageGoalsPerMatch =
    totalMatches > 0 ? totalGoals / totalMatches : 0;

  /*
   * Média de gols por rodada.
   *
   * Considerando 10 partidas por rodada no Brasileirão:
   */
  const averageGoalsPerRound =
    totalMatches > 0
      ? totalGoals / Math.max(Math.ceil(totalMatches / 10), 1)
      : 0;

  const leaderClub = getClub(leader?.team?.name ?? "unknown");
  const attackClub = getClub(bestAttack?.team?.name ?? "unknown");
  const defenseClub = getClub(bestDefense?.team?.name ?? "unknown");

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {/* LÍDER */}
      <StatCard
        icon={<Trophy className="h-5 w-5" />}
        label="Líder"
        value={leaderClub.short}
        sub={`${leader?.points ?? 0} pontos · ${
          leader?.won ?? 0
        } vitórias`}
      />

      {/* TOTAL DE GOLS */}
      <StatCard
        icon={<Goal className="h-5 w-5" />}
        label="Total de gols"
        value={String(totalGoals)}
        sub={`${averageGoalsPerMatch.toFixed(2).replace(".", ",")} gols por jogo`}
        tone="info"
      />

      {/* MELHOR ATAQUE */}
      <StatCard
        icon={<Flame className="h-5 w-5" />}
        label="Melhor ataque"
        value={`${attackClub.short} · ${bestAttack?.goalsFor ?? 0}`}
        sub={`${(
          Number(bestAttack?.goalsFor ?? 0) /
          Math.max(Number(bestAttack?.playedGames ?? 1), 1)
        )
          .toFixed(2)
          .replace(".", ",")} gols por partida`}
        tone="warning"
      />

      {/* MELHOR DEFESA */}
      <StatCard
        icon={<Shield className="h-5 w-5" />}
        label="Melhor defesa"
        value={`${defenseClub.short} · ${
          bestDefense?.goalsAgainst ?? 0
        }`}
        sub={`${bestDefense?.goalsAgainst ?? 0} sofridos`}
        tone="destructive"
      />
    </div>
  );
}