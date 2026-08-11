import Link from "next/link";
import { Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#111827] p-8 lg:p-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400">
            Rodada 25 em andamento
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight lg:text-6xl">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Campeonato Brasileiro
            </span>

            <br />

            Série A
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Temporada 2026 • 20 clubes • 38 rodadas.
            Acompanhe classificação, partidas ao vivo,
            estatísticas e desempenho dos times.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* JOGOS - ATIVO */}
            <Link
              href="/jogos"
              className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:scale-[1.03] hover:bg-green-400"
            >
              Ver jogos de hoje
            </Link>

            {/* COMPETIÇÃO - TEMPORARIAMENTE DESATIVADO */}
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center justify-center rounded-xl border border-gray-700 px-6 py-3 font-semibold text-gray-500 opacity-60"
            >
              Explorar competição
              <span className="ml-2 text-xs font-normal">
                Em breve
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto grid h-40 w-40 place-items-center rounded-3xl border border-border bg-background/40 shadow-xl backdrop-blur-xl lg:h-48 lg:w-48">
          <div className="grid h-28 w-28 place-items-center rounded-full bg-green-500/10 ring-1 ring-green-500/20">
            <Trophy className="h-14 w-14 text-green-400" />
          </div>
        </div>
      </div>
    </section>
  );
}