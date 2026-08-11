"use client";

import Link from "next/link";
import {
  Bell,
  CalendarDays,
  Home,
  Search,
  Shield,
  Trophy,
  User,
} from "lucide-react";

function Ball({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10.5"
        fill="currentColor"
        opacity="0.16"
      />

      <circle
        cx="12"
        cy="12"
        r="10.5"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />

      <path
        d="M12 5.5l3.6 2.6-1.4 4.3H9.8L8.4 8.1 12 5.5zM3.6 10.6l3.4 1.1M20.4 10.6l-3.4 1.1M8 17.6l1.4-3.6M16 17.6l-1.4-3.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.25"
      />
    </svg>
  );
}

/* =========================================================
   MENU DESKTOP
========================================================= */

const nav = [
  {
    href: "/",
    label: "Home",
    icon: Home,
    active: true,
  },
  {
    href: "/campeonatos",
    label: "Campeonatos",
    icon: Trophy,
    active: false,
  },
  {
    href: "/jogos",
    label: "Jogos",
    icon: CalendarDays,
    active: true,
  },
  {
    href: "/times",
    label: "Times",
    icon: Shield,
    active: false,
  },
];

/* =========================================================
   TOP NAV
========================================================= */

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B1220]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-green-500/15 text-green-400">
            <Ball className="h-6 w-6" />
          </div>

          <span className="text-2xl font-bold text-white">
            Fut<span className="text-green-400">Score</span>
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden gap-2 md:flex">
          {nav.map((item) => {
            const Icon = item.icon;

            if (!item.active) {
              return (
                <button
                  key={item.href}
                  type="button"
                  disabled
                  title={`${item.label} - Em breve`}
                  className="group flex cursor-not-allowed items-center gap-2 rounded-xl px-4 py-2 text-sm text-gray-600 opacity-60"
                >
                  <Icon size={16} />

                  <span>{item.label}</span>

                  <span className="text-[9px] font-medium uppercase tracking-wide text-gray-600">
                    Em breve
                  </span>
                </button>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-2 text-sm text-gray-300 transition hover:bg-[#161D2F] hover:text-white"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* AÇÕES */}
        <div className="ml-auto flex items-center gap-2">

          {/* BUSCA */}
          <div className="hidden items-center gap-2 rounded-xl bg-[#161D2F] px-3 py-2 lg:flex">
            <Search size={16} className="text-gray-400" />

            <input
              type="text"
              placeholder="Buscar..."
              className="w-44 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* NOTIFICAÇÕES */}
          <button
            type="button"
            title="Notificações"
            className="grid h-10 w-10 place-items-center rounded-xl bg-[#161D2F] text-gray-300 transition hover:bg-[#1c263b] hover:text-white"
          >
            <Bell size={18} />
          </button>

          {/* PERFIL */}
          <button
            type="button"
            disabled
            title="Perfil - Em breve"
            className="grid h-10 w-10 cursor-not-allowed place-items-center rounded-xl bg-green-500 text-black opacity-60"
          >
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   MENU MOBILE
========================================================= */

const mobileNav = [
  {
    href: "/",
    label: "Home",
    icon: Home,
    active: true,
  },
  {
    href: "/jogos",
    label: "Jogos",
    icon: CalendarDays,
    active: true,
  },
  {
    href: "/campeonatos",
    label: "Tabela",
    icon: Trophy,
    active: false,
  },
  {
    href: "/times",
    label: "Times",
    icon: Shield,
    active: false,
  },
  {
    href: "/perfil",
    label: "Perfil",
    icon: User,
    active: false,
  },
];

/* =========================================================
   BOTTOM NAV MOBILE
========================================================= */

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-[#0B1220]/95 backdrop-blur-xl md:hidden">
      <ul className="grid grid-cols-5">

        {mobileNav.map((item) => {
          const Icon = item.icon;

          if (!item.active) {
            return (
              <li key={item.href}>
                <button
                  type="button"
                  disabled
                  title={`${item.label} - Em breve`}
                  className="flex w-full cursor-not-allowed flex-col items-center gap-1 py-3 text-[11px] text-gray-600 opacity-60"
                >
                  <Icon size={18} />

                  {item.label}
                </button>
              </li>
            );
          }

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex flex-col items-center gap-1 py-3 text-[11px] text-gray-400 transition hover:text-green-400"
              >
                <Icon size={18} />

                {item.label}
              </Link>
            </li>
          );
        })}

      </ul>
    </nav>
  );
}

/* =========================================================
   APP SHELL
========================================================= */

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      <TopNav />

      <main className="mx-auto max-w-7xl px-6 py-8">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}