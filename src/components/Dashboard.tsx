import React, { useEffect, useState } from "react";
import { generateVoltAirMetrics } from "@/lib/voltairMetrics";

type MetricsData = ReturnType<typeof generateVoltAirMetrics>;

interface DashboardData {
  metrics: MetricsData;
  analysis: string;
}

const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("/api/ai", { method: "POST" })
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div className="p-6 text-white">Loading VoltAir Core…</div>;

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">VoltAir Intelligence Console</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>⚡ Efficiency: {data.metrics.efficiency}%</div>
        <div>🧭 Stability Index: {data.metrics.stabilityIndex}</div>
        <div>🔥 Loss Factor: {data.metrics.lossFactor}</div>
        <div>🌍 Drift: {data.metrics.environmentalDrift}°</div>
      </div>

      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">AI System Insight</h2>
        <p className="text-sm text-gray-300">
          Live AI-generated operational insight will stream here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
