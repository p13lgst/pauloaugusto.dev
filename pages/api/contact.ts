import { sendDiscordMessage } from "lib/discord";
import contactSchema from "schemas/contact";

const simpleResponse = (status: number) => new Response(null, { status });

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return simpleResponse(405);
  }

  const body = await req.json();
  const parseResult = contactSchema.safeParse(body);

  if (!parseResult.success) {
    return simpleResponse(422);
  }

  try {
    await sendDiscordMessage(parseResult.data);
    return simpleResponse(200);
  } catch (error) {
    return simpleResponse(500);
  }
}

export const config = {
  runtime: "experimental-edge",
};
