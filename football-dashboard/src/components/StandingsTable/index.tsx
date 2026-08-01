import { getStandings } from "@/src/services/football";
import type { Standing } from "@/src/types/football";

export default async function StandingsTable() {
  const data = await getStandings();

  const table: Standing[] = data.standings[0]?.table ?? [];

  return (
  <div className="text-white">
    <h2 className="mb-6 text-3xl font-bold">
      Classificação
    </h2>

    {table.map((club) => (
      <div
        key={club.team.id}
        className="mb-2 flex justify-between rounded-lg bg-[#222B45] p-4 hover:bg-[#2C3657]"
      >
        <span>
          {club.position}. {club.team.shortName}
        </span>

        <span className="font-bold text-green-400">
          {club.points} pts
        </span>
      </div>
    ))}
  </div>
  );
}