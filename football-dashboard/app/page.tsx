import AppShell from "@/src/components/Layout/AppShell";
import Hero from "@/src/components/Hero";
import StatCards from "@/src/components/StatCards";
import StandingsTable from "@/src/components/StandingsTable";
import Fixtures from "@/src/components/Fixtures";
import Results from "@/src/components/Results";

export default function Home() {
  return (
    <AppShell>
      <Hero />

      <StatCards />

      <div className="mt-8 rounded-2xl bg-[#161D2F] p-6 shadow-2xl">
        <StandingsTable />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-[#161D2F] p-6 shadow-2xl">
          <h2 className="mb-4 text-2xl font-bold">
            Próximos Jogos
          </h2>

          <Fixtures />
        </div>

        <div className="rounded-2xl bg-[#161D2F] p-6 shadow-2xl">
          <h2 className="mb-4 text-2xl font-bold">
            Últimos Resultados
          </h2>

          <Results />
        </div>
      </div>
    </AppShell>
  );
}