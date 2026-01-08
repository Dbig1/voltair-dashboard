import type { NextApiRequest, NextApiResponse } from "next";
import { streamText } from "ai";
import { generateVoltAirMetrics } from "@/lib/voltairMetrics";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const metrics = generateVoltAirMetrics();

  const prompt = `
You are an energy systems analyst.
Analyze the following VoltAir wireless power transfer metrics
and provide a concise executive insight.

Metrics:
${JSON.stringify(metrics, null, 2)}
`;

  const result = await streamText({
    model: "openai/gpt-5",
    prompt,
  });

  let analysis = "";
  for await (const chunk of result.textStream) {
    analysis += chunk;
  }

  res.status(200).json({
    metrics,
    analysis,
  });
}
