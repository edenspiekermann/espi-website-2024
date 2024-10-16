import { NextRequest, NextResponse } from "next/server";
// @ts-ignore
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  const listId = process.env.MAILCHIMP_LIST_ID;

  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
    });

    return NextResponse.json({ data: response }, { status: 200 });
  } catch (error) {
    console.error("Error subscribing to Mailchimp", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
