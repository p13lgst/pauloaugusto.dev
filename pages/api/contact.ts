import { sendDiscordMessage } from "lib/discord";
import { NextApiRequest, NextApiResponse } from "next";
import contactSchema from "schemas/contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  const parseResult = contactSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(422).end();
  }

  try {
    await sendDiscordMessage(parseResult.data);
    return res.status(200).end();
  } catch (error) {
    return res.status(500).end();
  }
}
