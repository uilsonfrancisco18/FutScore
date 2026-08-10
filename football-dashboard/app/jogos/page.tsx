import AppShell from "@/src/components/Layout/AppShell";
import Fixtures from "@/src/components/Fixtures";

export default function JogosPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white">
            Próximos Jogos
          </h1>

          <p className="mt-2 text-gray-400">
            Confira os próximos jogos do Campeonato Brasileiro Série A.
          </p>
        </div>

        <div className="rounded-2xl bg-[#161D2F] p-6 shadow-2xl">
          <Fixtures />
        </div>
      </div>
    </AppShell>
  );
}