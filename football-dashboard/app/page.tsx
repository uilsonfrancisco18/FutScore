import AppShell from "@/src/components/Layout/AppShell";
import Hero from "@/src/components/Hero";
import StatCards from "@/src/components/StatCards";
import StandingsTable from "@/src/components/StandingsTable";
import Results from "@/src/components/Results";

export default function Home() {
  return (
    <AppShell>
      <Hero />

      <StatCards />

      <div className="mt-8 rounded-2xl bg-[#161D2F] p-6 shadow-2xl">
        <StandingsTable />
      </div>

      <div className="mt-8">
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