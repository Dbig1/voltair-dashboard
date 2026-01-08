import type { NextApiRequest, NextApiResponse } from "next";
import { generateVoltAirMetrics } from "@/lib/voltairMetrics";

interface InsightResponse {
  insight: string;
  metrics: ReturnType<typeof generateVoltAirMetrics>;
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<InsightResponse>
) {
  const metrics = generateVoltAirMetrics();

  const insight = `
    Real-time AI Energy Intelligence Update:
    
    Wireless power transmission is operating at peak efficiency with a stability index of ${metrics.stabilityIndex}.
    The system demonstrates resilience with a loss factor of only ${metrics.lossFactor}%, showcasing advanced optimization algorithms.
    Grid load distribution is balanced, and predictive models indicate sustained performance over the next operational cycle.
  `.trim();

  res.status(200).json({
    insight,
    metrics,
  });
}
