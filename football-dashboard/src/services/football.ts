const API_URL = "https://api.football-data.org/v4";

export async function getStandings() {
  const token = process.env.FOOTBALL_DATA_TOKEN ?? process.env.FOOTBALL_DATA_TOKE;

  if (!token) {
    throw new Error("FOOTBALL_DATA_TOKEN is not configured.");
  }

  const response = await fetch(`${API_URL}/competitions/BSA/standings`, {
    headers: {
      "X-Auth-Token": token,
    },
    cache: "no-store",
  });

  const data = await response.json();

  console.log("Status:", response.status);
  console.log("Resposta:", data);

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }

  return data;
}