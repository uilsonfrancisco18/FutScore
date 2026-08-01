import StandingsTable from "@/src/components/StandingsTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-8 py-10">
        <h1 className="text-center text-5xl font-bold text-green-400">
          ⚽ FutScore
        </h1>

        <p className="mt-2 text-center text-gray-400">
          Campeonato Brasileiro Série A
        </p>

        <div className="mt-10 rounded-2xl bg-[#161D2F] p-6 shadow-2xl">
          <StandingsTable />
        </div>
      </div>
    </main>
  );
}