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
// src/lib/voltairMetrics.ts

export function generateVoltAirMetrics() {
  return {
    efficiency: +(82 + Math.random() * 6).toFixed(2), // %
    stabilityIndex: +(0.91 + Math.random() * 0.04).toFixed(3),
    lossFactor: +(0.12 + Math.random() * 0.03).toFixed(3),
    environmentalDrift: +(Math.random() * 1.5).toFixed(2), // °C equivalent
    timestamp: new Date().toISOString(),
  };
}
