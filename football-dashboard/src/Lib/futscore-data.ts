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

export type Row = {
  pos: number;
  club: string;
  p: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  pts: number;
  form: ("W" | "D" | "L")[];
};

const F = (s: string) => s.split("") as ("W" | "D" | "L")[];

export const standings: Row[] = [
  { pos: 1, club: "palmeiras", p: 24, w: 17, d: 4, l: 3, gf: 48, ga: 17, pts: 55, form: F("WWDWW") },
  { pos: 2, club: "flamengo", p: 24, w: 16, d: 5, l: 3, gf: 46, ga: 19, pts: 53, form: F("WWWDL") },
  { pos: 3, club: "botafogo", p: 24, w: 15, d: 5, l: 4, gf: 41, ga: 21, pts: 50, form: F("DWWWL") },
  { pos: 4, club: "cruzeiro", p: 24, w: 13, d: 7, l: 4, gf: 37, ga: 22, pts: 46, form: F("WDWDW") },
  {
    pos: 5,
    club: "internacional",
    p: 24,
    w: 12,
    d: 7,
    l: 5,
    gf: 35,
    ga: 24,
    pts: 43,
    form: F("WLWDW"),
  },
  { pos: 6, club: "saopaulo", p: 24, w: 12, d: 5, l: 7, gf: 33, ga: 26, pts: 41, form: F("LWWDW") },
  { pos: 7, club: "fortaleza", p: 24, w: 11, d: 6, l: 7, gf: 31, ga: 27, pts: 39, form: F("WDLWD") },
  { pos: 8, club: "bahia", p: 24, w: 10, d: 8, l: 6, gf: 30, ga: 26, pts: 38, form: F("DDWLW") },
  { pos: 9, club: "atletico", p: 24, w: 10, d: 6, l: 8, gf: 32, ga: 29, pts: 36, form: F("LWDWL") },
  { pos: 10, club: "gremio", p: 24, w: 9, d: 8, l: 7, gf: 28, ga: 28, pts: 35, form: F("DLDWW") },
  { pos: 11, club: "vasco", p: 24, w: 9, d: 6, l: 9, gf: 30, ga: 31, pts: 33, form: F("WLLDW") },
  {
    pos: 12,
    club: "corinthians",
    p: 24,
    w: 8,
    d: 8,
    l: 8,
    gf: 27,
    ga: 29,
    pts: 32,
    form: F("DWDLD"),
  },
  {
    pos: 13,
    club: "fluminense",
    p: 24,
    w: 8,
    d: 6,
    l: 10,
    gf: 26,
    ga: 31,
    pts: 30,
    form: F("LDWLW"),
  },
  { pos: 14, club: "santos", p: 24, w: 7, d: 8, l: 9, gf: 25, ga: 30, pts: 29, form: F("DLDWL") },
  {
    pos: 15,
    club: "bragantino",
    p: 24,
    w: 7,
    d: 6,
    l: 11,
    gf: 24,
    ga: 33,
    pts: 27,
    form: F("LWLLD"),
  },
  {
    pos: 16,
    club: "juventude",
    p: 24,
    w: 6,
    d: 7,
    l: 11,
    gf: 22,
    ga: 34,
    pts: 25,
    form: F("LDLWL"),
  },
  { pos: 17, club: "vitoria", p: 24, w: 5, d: 8, l: 11, gf: 21, ga: 35, pts: 23, form: F("LLDDL") },
  { pos: 18, club: "criciuma", p: 24, w: 5, d: 6, l: 13, gf: 20, ga: 38, pts: 21, form: F("LLWLL") },
  { pos: 19, club: "athletico", p: 24, w: 4, d: 6, l: 14, gf: 18, ga: 41, pts: 18, form: F("LDLLL") },
  { pos: 20, club: "cuiaba", p: 24, w: 3, d: 5, l: 16, gf: 15, ga: 45, pts: 14, form: F("LLLDL") },
];

export type Zone = "libertadores" | "pre" | "sula" | "rebaixamento" | null;

export function zoneOf(pos: number): Zone {
  if (pos <= 4) return "libertadores";
  if (pos <= 6) return "pre";
  if (pos <= 12) return "sula";
  if (pos >= 17) return "rebaixamento";
  return null;
}

export const zoneMeta: Record<
  Exclude<Zone, null>,
  { label: string; text: string; bg: string; dot: string }
> = {
  libertadores: {
    label: "Libertadores",
    text: "text-primary",
    bg: "bg-primary/8",
    dot: "bg-primary",
  },
  pre: {
    label: "Pré-Libertadores",
    text: "text-warning",
    bg: "bg-warning/8",
    dot: "bg-warning",
  },
  sula: { label: "Sul-Americana", text: "text-info", bg: "bg-info/8", dot: "bg-info" },
  rebaixamento: {
    label: "Rebaixamento",
    text: "text-destructive",
    bg: "bg-destructive/8",
    dot: "bg-destructive",
  },
};

export type Fixture = {
  id: string;
  home: string;
  away: string;
  date: string;
  day: "today" | "tomorrow" | "weekend";
  time: string;
  stadium: string;
  round: number;
  status: "upcoming" | "live" | "finished";
  minute?: string;
  score?: [number, number];
};

export const fixtures: Fixture[] = [
  {
    id: "pal-fla",
    home: "palmeiras",
    away: "flamengo",
    date: "Hoje, 01 Ago",
    day: "today",
    time: "21:30",
    stadium: "Allianz Parque",
    round: 25,
    status: "live",
    minute: "67'",
    score: [1, 1],
  },
  {
    id: "cru-int",
    home: "cruzeiro",
    away: "internacional",
    date: "Hoje, 01 Ago",
    day: "today",
    time: "19:00",
    stadium: "Mineirão",
    round: 25,
    status: "finished",
    score: [2, 0],
  },
  {
    id: "sao-bot",
    home: "saopaulo",
    away: "botafogo",
    date: "Hoje, 01 Ago",
    day: "today",
    time: "16:30",
    stadium: "MorumBIS",
    round: 25,
    status: "finished",
    score: [1, 2],
  },
  {
    id: "gre-cor",
    home: "gremio",
    away: "corinthians",
    date: "Amanhã, 02 Ago",
    day: "tomorrow",
    time: "18:30",
    stadium: "Arena do Grêmio",
    round: 25,
    status: "upcoming",
  },
  {
    id: "bah-vas",
    home: "bahia",
    away: "vasco",
    date: "Amanhã, 02 Ago",
    day: "tomorrow",
    time: "20:00",
    stadium: "Arena Fonte Nova",
    round: 25,
    status: "upcoming",
  },
  {
    id: "cam-flu",
    home: "atletico",
    away: "fluminense",
    date: "Sáb, 03 Ago",
    day: "weekend",
    time: "16:00",
    stadium: "Arena MRV",
    round: 26,
    status: "upcoming",
  },
  {
    id: "san-for",
    home: "santos",
    away: "fortaleza",
    date: "Sáb, 03 Ago",
    day: "weekend",
    time: "18:30",
    stadium: "Vila Belmiro",
    round: 26,
    status: "upcoming",
  },
  {
    id: "vit-rbb",
    home: "vitoria",
    away: "bragantino",
    date: "Dom, 04 Ago",
    day: "weekend",
    time: "11:00",
    stadium: "Barradão",
    round: 26,
    status: "upcoming",
  },
  {
    id: "cui-jub",
    home: "cuiaba",
    away: "juventude",
    date: "Dom, 04 Ago",
    day: "weekend",
    time: "20:30",
    stadium: "Arena Pantanal",
    round: 26,
    status: "upcoming",
  },
];

export const results = [
  { home: "palmeiras", away: "santos", score: [2, 1] as [number, number], round: 24 },
  { home: "flamengo", away: "bahia", score: [3, 0] as [number, number], round: 24 },
  { home: "botafogo", away: "cruzeiro", score: [1, 1] as [number, number], round: 24 },
  { home: "internacional", away: "vasco", score: [2, 2] as [number, number], round: 24 },
  { home: "saopaulo", away: "criciuma", score: [4, 0] as [number, number], round: 24 },
];

export const scorers = [
  { name: "Estêvão Willian", club: "palmeiras", goals: 17, assists: 6, games: 24 },
  { name: "Pedro Guilherme", club: "flamengo", goals: 15, assists: 4, games: 23 },
  { name: "Igor Jesus", club: "botafogo", goals: 13, assists: 3, games: 24 },
  { name: "Matheus Pereira", club: "cruzeiro", goals: 11, assists: 9, games: 22 },
  { name: "Alan Patrick", club: "internacional", goals: 10, assists: 8, games: 24 },
  { name: "Lucas Moura", club: "saopaulo", goals: 9, assists: 7, games: 21 },
];

export const assisters = [
  { name: "Matheus Pereira", club: "cruzeiro", assists: 9, goals: 11, games: 22 },
  { name: "Alan Patrick", club: "internacional", assists: 8, goals: 10, games: 24 },
  { name: "Lucas Moura", club: "saopaulo", assists: 7, goals: 9, games: 21 },
  { name: "Estêvão Willian", club: "palmeiras", assists: 6, goals: 17, games: 24 },
  { name: "Arrascaeta", club: "flamengo", assists: 6, goals: 7, games: 20 },
];

export type TimelineEvent = {
  minute: string;
  type: "goal" | "yellow" | "red" | "sub";
  side: "home" | "away";
  player: string;
  detail?: string;
};

export const matchTimeline: TimelineEvent[] = [
  {
    minute: "12'",
    type: "goal",
    side: "home",
    player: "Estêvão Willian",
    detail: "Assist. Raphael Veiga",
  },
  { minute: "24'", type: "yellow", side: "away", player: "Léo Ortiz" },
  { minute: "38'", type: "goal", side: "away", player: "Pedro Guilherme", detail: "Cabeça" },
  { minute: "45+2'", type: "yellow", side: "home", player: "Gustavo Gómez" },
  { minute: "58'", type: "sub", side: "home", player: "Flaco López", detail: "sai Rony" },
  { minute: "61'", type: "sub", side: "away", player: "Everton Cebolinha", detail: "sai Bruno H." },
  { minute: "64'", type: "red", side: "away", player: "Erick Pulgar", detail: "2º amarelo" },
];

export const matchStats = [
  { label: "Finalizações", home: 14, away: 9 },
  { label: "No alvo", home: 6, away: 3 },
  { label: "Escanteios", home: 7, away: 4 },
  { label: "Faltas", home: 11, away: 15 },
  { label: "Impedimentos", home: 2, away: 3 },
  { label: "Defesas", home: 2, away: 5 },
];

export const squad = [
  { name: "Weverton", pos: "GOL", num: 21, games: 24, goals: 0, rating: 7.2 },
  { name: "Gustavo Gómez", pos: "ZAG", num: 15, games: 23, goals: 3, rating: 7.5 },
  { name: "Murilo Cerqueira", pos: "ZAG", num: 26, games: 21, goals: 1, rating: 7.1 },
  { name: "Piquerez", pos: "LAT", num: 22, games: 22, goals: 2, rating: 7.4 },
  { name: "Raphael Veiga", pos: "MEI", num: 23, games: 24, goals: 8, rating: 7.9 },
  { name: "Estêvão Willian", pos: "ATA", num: 41, games: 24, goals: 17, rating: 8.4 },
];

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
  return clubs[id] ?? fallbackClub;
}
