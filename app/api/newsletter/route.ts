import { NextResponse } from "next/server";
import { z } from "zod";

const requestSchema = z.object({ email: z.string().trim().email() });
const KIT_SUBSCRIBE_URL = "https://app.kit.com/forms/9614062/subscriptions";

export async function POST(request: Request) {
  const parsed = requestSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const response = await fetch(KIT_SUBSCRIBE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ email_address: parsed.data.email }),
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Kit rejected the subscription." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
