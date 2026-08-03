import { club as getClub } from "@/src/Lib/futscore-data";
import { cn } from "@/src/Lib/utils";

const sizes = {
  sm: "h-7 w-7 text-[9px]",
  md: "h-9 w-9 text-[10px]",
  lg: "h-14 w-14 text-sm",
  xl: "h-24 w-24 text-xl",
};

/** Escudo estilizado do clube */
export function Crest({
  club,
  size = "md",
  className,
}: {
  club: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const c = getClub(club);

  return (
    <span
      aria-label={`Escudo ${c.name}`}
      className={cn(
        "relative grid shrink-0 place-items-center font-bold tracking-wider",
        sizes[size],
        className
      )}
      style={{
        background: `linear-gradient(150deg, ${c.colors[0]} 0%, ${c.colors[0]} 52%, ${c.colors[1]} 52%, ${c.colors[1]} 100%)`,
        clipPath:
          "polygon(50% 0%, 100% 12%, 100% 62%, 50% 100%, 0% 62%, 0% 12%)",
        color: "#F8FAFC",
        textShadow: "0 1px 2px rgba(0,0,0,.55)",
      }}
    >
      <span
        className="flex h-[56%] w-[82%] items-center justify-center rounded-[4px] text-[10px] font-bold"
        style={{ background: "rgba(9,14,26,.78)" }}
      >
        {c.abbr}
      </span>
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