import Image from "next/image";

import { cn } from "@/src/Lib/utils";

const sizes = {
  sm: "h-7 w-7 text-[9px]",
  md: "h-9 w-9 text-[10px]",
  lg: "h-14 w-14 text-sm",
  xl: "h-24 w-24 text-xl",
};

type CrestSource =
  | string
  | {
      crest?: string;
      name?: string;
      shortName?: string;
    };

function getCrestUrl(club: CrestSource): string | undefined {
  if (typeof club === "string") {
    return club.startsWith("http://") || club.startsWith("https://")
      ? club
      : undefined;
  }

  return club.crest;
}

function getLabel(club: CrestSource): string {
  if (typeof club === "string") {
    return club;
  }

  return club.shortName || club.name || "?";
}

/** Escudo do clube com imagem oficial quando disponível */
export function Crest({
  club,
  size = "md",
  className,
}: {
  club: CrestSource;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const crestUrl = getCrestUrl(club);
  const label = getLabel(club);
  const fallbackLabel = label.slice(0, 2).toUpperCase();

  return (
    <span
      aria-label={`Escudo ${label}`}
      className={cn(
        "relative grid shrink-0 place-items-center overflow-hidden rounded-full border border-border/60 bg-muted/80 text-muted-foreground",
        sizes[size],
        className
      )}
    >
      {crestUrl ? (
        <Image
          src={crestUrl}
          alt={`Escudo de ${label}`}
          fill
          className="object-contain p-1"
        />
      ) : (
        <span className="text-[10px] font-semibold uppercase">{fallbackLabel}</span>
      )}
    </span>
  );
}

export function FormPills({
  form,
  className,
}: {
  form: ("W" | "D" | "L")[];
  className?: string;
}) {
  const tone = {
    W: "bg-green-500/20 text-green-400",
    D: "bg-gray-500/20 text-gray-300",
    L: "bg-red-500/20 text-red-400",
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {form.map((f, i) => (
        <span
          key={i}
          className={cn(
            "grid h-5 w-5 place-items-center rounded-md text-[10px] font-bold",
            tone[f]
          )}
        >
          {f}
        </span>
      ))}
    </div>
  );
}

export function StatusChip({
  status,
  minute,
}: {
  status: string;
  minute?: string;
}) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-400">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
        {minute ?? "Ao vivo"}
      </span>
    );
  }

  if (status === "finished") {
    return (
      <span className="rounded-full bg-gray-700 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300">
        Encerrado
      </span>
    );
  }

  return (
    <span className="rounded-full bg-blue-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400">
      Em breve
    </span>
  );
}