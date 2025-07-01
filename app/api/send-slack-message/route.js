import { NextResponse } from "next/server";

const slackToken = process.env.SLACK_BOT_TOKEN;
const channelId = "C08SE5Q8XUG";


export async function POST() {
  const res = await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${slackToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      channel: channelId,
      text: '🕘 Time to submit your daily update!',
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Click below to submit your update 👇",
          },
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Submit Update",
              },
              action_id: "submit_update",
            },
          ],
        },
      ],
    }),
  });

  return NextResponse.json(await res.json());
}