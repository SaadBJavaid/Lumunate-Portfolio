// File: src/app/api/slack/interactions/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = JSON.parse(formData.get("payload") as string);
  
  const user = payload.user;
  const userId = user.id;
  const userName = user.username;

  // Generate a URL with user info
  const redirectUrl = `https://lumunate.com/daily-updates?userId=${userId}&name=${encodeURIComponent(userName)}`;

  // Option 1: Send ephemeral message back to user
  return NextResponse.json({
    response_action: "update",
    replace_original: false,
    text: `Hey <@${userId}>, [click here](${redirectUrl}) to submit your update.`,
  });
}
