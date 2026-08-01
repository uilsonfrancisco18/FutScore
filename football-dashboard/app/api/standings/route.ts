import { NextResponse } from "next/server";
import { getStandings } from "@/src/services/football";

export async function GET() {
  try {
    const data = await getStandings();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar classificação." },
      { status: 500 }
    );
  }
}