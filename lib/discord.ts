import { ContactMessage } from "schemas/contact";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL!;

if (!DISCORD_WEBHOOK_URL) {
  throw new Error("Missing DISCORD_WEBHOOK_URL");
}

const separator = "-".repeat(10);

function buildMessage({
  firstName,
  lastName,
  email,
  message,
  phone,
}: ContactMessage) {
  return `
${separator}
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "N/A"}

${message}
`;
}

export async function sendDiscordMessage(contactMessage: ContactMessage) {
  const messageBody = {
    content: buildMessage(contactMessage),
  };

  const res = await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messageBody),
  });

  if (!res.ok) {
    throw new Error("Failed to send Discord message");
  }
}
