import { club as getClub } from "@/src/Lib/futscore-data";
import { getMatches } from "@/src/services/football";

export default async function PartidaPage() {
  const data = await getMatches();
  const match = (data.matches ?? []).find((item) => item.status === "SCHEDULED" || item.status === "LIVE") ?? (data.matches ?? [])[0];

  if (!match) {
    return <div className="p-8 text-white">Nenhuma partida disponível.</div>;
  }

  const home = getClub(match.homeTeam.name);
  const away = getClub(match.awayTeam.name);
  const date = new Date(match.utcDate);

  return (
    <div className="p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">Partida</h1>

      <div className="rounded-xl bg-[#161D2F] p-6">
        <p className="mb-4 text-sm text-gray-400">
          {date.toLocaleString("pt-BR", { dateStyle: "full", timeStyle: "short" })}
        </p>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold">{home.short}</p>
            <p className="text-sm text-gray-400">{match.homeTeam.shortName}</p>
          </div>
          <span className="text-xl font-bold">×</span>
          <div className="text-right">
            <p className="font-semibold">{away.short}</p>
            <p className="text-sm text-gray-400">{match.awayTeam.shortName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
