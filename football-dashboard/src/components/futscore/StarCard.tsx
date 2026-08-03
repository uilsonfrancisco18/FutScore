import { Trophy, Goal, Flame, Shield } from "lucide-react";
import { StatCard } from "./Pieces/pieces";

export default function StatCards() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        icon={<Trophy className="h-5 w-5" />}
        label="Líder"
        value="Palmeiras"
        sub="55 pontos · 17 vitórias"
      />

      <StatCard
        icon={<Goal className="h-5 w-5" />}
        label="Total de gols"
        value="612"
        sub="Média de 2,55 por jogo"
        tone="info"
      />

      <StatCard
        icon={<Flame className="h-5 w-5" />}
        label="Melhor ataque"
        value="Palmeiras · 48"
        sub="2,0 gols por partida"
        tone="warning"
      />

      <StatCard
        icon={<Shield className="h-5 w-5" />}
        label="Melhor defesa"
        value="Palmeiras · 17"
        sub="11 jogos sem sofrer gol"
        tone="destructive"
      />
    </div>
  );
}