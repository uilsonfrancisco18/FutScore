import { club as getClub } from "@/src/Lib/futscore-data";
import { getStandings } from "@/src/services/football";

export default async function TimesPage() {
  const data = await getStandings();
  const table = data?.standings?.[0]?.table ?? [];

  return (
    <div className="p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">Times</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {table.map((row) => {
          const club = getClub(row.team.name);
          return (
            <div key={row.team.id} className="rounded-xl bg-[#161D2F] p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold">{club.short}</span>
                <span className="text-sm text-gray-400">{row.position}º</span>
              </div>
              <p className="text-sm text-gray-400">
                {row.points} pts · {row.won}V {row.draw}E {row.lost}D
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
