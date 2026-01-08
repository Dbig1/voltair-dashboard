import { streamText } from "ai";

export const config = {
  runtime: "edge",
};

export default async function handler() {
  const result = streamText({
    model: "openai/gpt-5",
    prompt: `
    You are an AI energy intelligence system.
    Provide a concise insight about wireless energy transfer efficiency,
    grid load optimization, and system health.
    Speak like a premium infrastructure dashboard.
    `,
  });

  return result.toAIStreamResponse();
}
