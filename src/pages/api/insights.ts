import type { NextApiRequest, NextApiResponse } from "next";

interface Insight {
  timestamp: string;
  type: string;
  message: string;
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Insight[]>
) {
  const insights: Insight[] = [
    {
      timestamp: new Date().toISOString(),
      type: "efficiency",
      message: "Wireless transfer efficiency within optimal range",
    },
    {
      timestamp: new Date().toISOString(),
      type: "grid",
      message: "Grid load distribution stable across all zones",
    },
    {
      timestamp: new Date().toISOString(),
      type: "system",
      message: "All system parameters nominal",
    },
  ];

  res.status(200).json(insights);
}
