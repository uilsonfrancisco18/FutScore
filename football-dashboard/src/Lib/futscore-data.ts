export type Club = {
  id: string;
  name: string;
  short: string;
  abbr: string;
  city: string;
  stadium: string;
  coach: string;
  colors: [string, string];
};

export const clubs: Record<string, Club> = {
  palmeiras: {
    id: "palmeiras",
    name: "Palmeiras",
    short: "Palmeiras",
    abbr: "PAL",
    city: "São Paulo",
    stadium: "Allianz Parque",
    coach: "Abel Ferreira",
    colors: ["#0B7A3B", "#E9F7EF"],
  },
  flamengo: {
    id: "flamengo",
    name: "Flamengo",
    short: "Flamengo",
    abbr: "FLA",
    city: "Rio de Janeiro",
    stadium: "Maracanã",
    coach: "Filipe Luís",
    colors: ["#B31217", "#111111"],
  },
  botafogo: {
    id: "botafogo",
    name: "Botafogo",
    short: "Botafogo",
    abbr: "BOT",
    city: "Rio de Janeiro",
    stadium: "Nilton Santos",
    coach: "Renato Paiva",
    colors: ["#1A1A1A", "#F2F2F2"],
  },
  cruzeiro: {
    id: "cruzeiro",
    name: "Cruzeiro",
    short: "Cruzeiro",
    abbr: "CRU",
    city: "Belo Horizonte",
    stadium: "Mineirão",
    coach: "Leonardo Jardim",
    colors: ["#123A87", "#DCE6FA"],
  },
  internacional: {
    id: "internacional",
    name: "Internacional",
    short: "Internacional",
    abbr: "INT",
    city: "Porto Alegre",
    stadium: "Beira-Rio",
    coach: "Roger Machado",
    colors: ["#C81E20", "#F5F5F5"],
  },
  saopaulo: {
    id: "saopaulo",
    name: "São Paulo",
    short: "São Paulo",
    abbr: "SAO",
    city: "São Paulo",
    stadium: "MorumBIS",
    coach: "Luis Zubeldía",
    colors: ["#C4161C", "#1B2A6B"],
  },
  fortaleza: {
    id: "fortaleza",
    name: "Fortaleza",
    short: "Fortaleza",
    abbr: "FOR",
    city: "Fortaleza",
    stadium: "Castelão",
    coach: "Juan Vojvoda",
    colors: ["#1E3A8A", "#CE1126"],
  },
  bahia: {
    id: "bahia",
    name: "Bahia",
    short: "Bahia",
    abbr: "BAH",
    city: "Salvador",
    stadium: "Arena Fonte Nova",
    coach: "Rogério Ceni",
    colors: ["#1D4ED8", "#DC2626"],
  },
  atletico: {
    id: "atletico",
    name: "Atlético Mineiro",
    short: "Atlético-MG",
    abbr: "CAM",
    city: "Belo Horizonte",
    stadium: "Arena MRV",
    coach: "Cuca",
    colors: ["#151515", "#EDEDED"],
  },
  gremio: {
    id: "gremio",
    name: "Grêmio",
    short: "Grêmio",
    abbr: "GRE",
    city: "Porto Alegre",
    stadium: "Arena do Grêmio",
    coach: "Mano Menezes",
    colors: ["#0D63A5", "#1A1A1A"],
  },
  vasco: {
    id: "vasco",
    name: "Vasco da Gama",
    short: "Vasco",
    abbr: "VAS",
    city: "Rio de Janeiro",
    stadium: "São Januário",
    coach: "Fábio Carille",
    colors: ["#1C1C1C", "#E5E5E5"],
  },
  corinthians: {
    id: "corinthians",
    name: "Corinthians",
    short: "Corinthians",
    abbr: "COR",
    city: "São Paulo",
    stadium: "Neo Química Arena",
    coach: "Ramón Díaz",
    colors: ["#111111", "#FFFFFF"],
  },
  fluminense: {
    id: "fluminense",
    name: "Fluminense",
    short: "Fluminense",
    abbr: "FLU",
    city: "Rio de Janeiro",
    stadium: "Maracanã",
    coach: "Mano Silva",
    colors: ["#7A0E2B", "#0B6B3A"],
  },
  santos: {
    id: "santos",
    name: "Santos",
    short: "Santos",
    abbr: "SAN",
    city: "Santos",
    stadium: "Vila Belmiro",
    coach: "Fábio Cardim",
    colors: ["#E6E6E6", "#1A1A1A"],
  },
  bragantino: {
    id: "bragantino",
    name: "Red Bull Bragantino",
    short: "Bragantino",
    abbr: "RBB",
    city: "Bragança Paulista",
    stadium: "Cícero de Souza",
    coach: "Fernando Seabra",
    colors: ["#D62828", "#F1F1F1"],
  },
  juventude: {
    id: "juventude",
    name: "Juventude",
    short: "Juventude",
    abbr: "JUV",
    city: "Caxias do Sul",
    stadium: "Alfredo Jaconi",
    coach: "Jair Ventura",
    colors: ["#1F8A45", "#EFEFEF"],
  },
  vitoria: {
    id: "vitoria",
    name: "Vitória",
    short: "Vitória",
    abbr: "VIT",
    city: "Salvador",
    stadium: "Barradão",
    coach: "Thiago Carpini",
    colors: ["#B31217", "#1A1A1A"],
  },
  criciuma: {
    id: "criciuma",
    name: "Criciúma",
    short: "Criciúma",
    abbr: "CRI",
    city: "Criciúma",
    stadium: "Heriberto Hülse",
    coach: "Cláudio Tencati",
    colors: ["#F2C200", "#1A1A1A"],
  },
  athletico: {
    id: "athletico",
    name: "Athletico Paranaense",
    short: "Athletico-PR",
    abbr: "CAP",
    city: "Curitiba",
    stadium: "Ligga Arena",
    coach: "Lucho González",
    colors: ["#B3141B", "#1A1A1A"],
  },
  cuiaba: {
    id: "cuiaba",
    name: "Cuiabá",
    short: "Cuiabá",
    abbr: "CUI",
    city: "Cuiabá",
    stadium: "Arena Pantanal",
    coach: "Bernardo Franco",
    colors: ["#F2C200", "#0B7A3B"],
  },
};

const aliasMap = {
  "SE Palmeiras": "palmeiras",
  "CR Flamengo": "flamengo",
  "Botafogo FR": "botafogo",
  "São Paulo FC": "saopaulo",
  "SC Corinthians Paulista": "corinthians",
  "CR Vasco da Gama": "vasco",
  "EC Bahia": "bahia",
  "EC Vitória": "vitoria",
  "RB Bragantino": "bragantino",
  "Grêmio FBPA": "gremio",
  "Fluminense FC": "fluminense",
  "Santos FC": "santos",
  "Fortaleza EC": "fortaleza",
  
  "EC Juventude": "juventude",
  "Cruzeiro EC": "cruzeiro",
  "SC Internacional": "internacional",

  "CA Mineiro": "atletico",
  "Atlético Mineiro": "atletico",

  "CA Paranaense": "athletico",
  "Athletico Paranaense": "athletico",

  "Coritiba FBC": "coritiba",
  "Chapecoense AF": "chapecoense",
  "Clube do Remo": "remo",
  "Mirassol FC": "mirassol",
} as const;
const fallbackClub: Club = {
  id: "unknown",
  name: "Clube",
  short: "Clube",
  abbr: "FC",
  city: "—",
  stadium: "—",
  coach: "—",
  colors: ["#334155", "#94A3B8"],
};

/** Safe club lookup for strict TS. */
export function club(id: string): Club {
  const raw = id?.trim();
  if (!raw) return fallbackClub;

  const alias = aliasMap[raw as keyof typeof aliasMap];

  if (alias) {
    const aliasedClub = clubs[alias];
    return aliasedClub ?? fallbackClub;
  }

  const normalized = raw.toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, "");

  if (clubs[normalized]) {
    return clubs[normalized];
  }

  const match = Object.values(clubs).find((clubEntry) => {
    const candidates = [clubEntry.name, clubEntry.short, clubEntry.abbr, clubEntry.city];
    return candidates.some((candidate) => {
      if (!candidate) return false;
      return candidate.toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, "").includes(normalized);
    });
  });

  return match ?? fallbackClub;
}
