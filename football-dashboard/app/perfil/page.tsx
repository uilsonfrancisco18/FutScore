import { getAssisters, getScorers } from "@/src/services/football";

export default async function PerfilPage() {
  const [scorersData, assistersData] = await Promise.all([getScorers(), getAssisters()]);

  return (
    <div className="p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">Perfil</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-[#161D2F] p-4">
          <h2 className="mb-4 text-xl font-semibold">Artilheiros</h2>
          <div className="space-y-3">
            {scorersData.scorers.slice(0, 5).map((scorer, index) => (
              <div key={`${scorer.player.name}-${index}`} className="flex items-center justify-between rounded-lg bg-[#1D2438] p-3">
                <div>
                  <p className="font-medium">{scorer.player.name}</p>
                  <p className="text-sm text-gray-400">{scorer.team.shortName}</p>
                </div>
                <span className="font-bold text-green-400">{scorer.goals} gols</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-[#161D2F] p-4">
          <h2 className="mb-4 text-xl font-semibold">Assistências</h2>
          <div className="space-y-3">
            {assistersData.scorers.slice(0, 5).map((scorer, index) => (
              <div key={`${scorer.player.name}-${index}`} className="flex items-center justify-between rounded-lg bg-[#1D2438] p-3">
                <div>
                  <p className="font-medium">{scorer.player.name}</p>
                  <p className="text-sm text-gray-400">{scorer.team.shortName}</p>
                </div>
                <span className="font-bold text-blue-400">{scorer.assists ?? 0} assists</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
