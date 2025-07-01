import Update from "@/lib/models/Update";
import {connectDB} from "../../../lib/db"
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const { userId, name, update } = body;
  console.log(123,name);
  

  await Update.create({ userId, name, update });

  // Send message to Slack
  await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channel: "C08SE5Q8XUG",
      text: `✅ *${name}* has submitted their daily update:\n>${update}`,
    }),
  });

  return NextResponse.json({ success: true });
}