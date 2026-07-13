import { NextResponse } from "next/server";

export async function GET() {
  const key = process.env.API_KEY;
  const steamId = process.env.USER_ID;

  const res = await fetch(
    `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${steamId}`,
  );

  const data = await res.json();
  return NextResponse.json(data);
}
