import { gameInfo } from "@/interfaces/gameInfo";
import { fromMinutesToHours } from "@/utils/timeManager";

import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.API_KEY;
  const steamId = process.env.USER_ID;

  const res = await fetch(
    `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${key}&steamid=${steamId}&include_appinfo=true`,
  );

  if (!res.ok) {
    throw new Error("Erro de API");
  }

  const data = await res.json();
  const gamesList = data["response"]["games"] || [];

  const gameCollection: gameInfo[] = gamesList.map((game: any) => ({
    id: game["appid"],
    name: game["name"],
    totalTime: game["playtime_forever"],
    formatTime: fromMinutesToHours(game["playtime_forever"]),
    status: "-",
  }));

  return NextResponse.json(gameCollection);
}
