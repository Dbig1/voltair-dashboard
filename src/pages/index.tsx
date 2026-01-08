import React, { useEffect, useState } from 'react';

interface MetricsData {
  metrics?: {
    efficiency: number;
    stabilityIndex: number;
    lossFactor: number;
    environmentalDrift: number;
  };
  analysis?: string;
}

export default function Dashboard() {
  const [data, setData] = useState<MetricsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/ai', { method: 'POST' });
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch metrics:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading VoltAir Core…</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">⚡ VoltAir Intelligence Console</h1>

      {data?.metrics && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-sm text-gray-400">Efficiency</div>
            <div className="text-2xl font-bold">{data.metrics.efficiency}%</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-sm text-gray-400">Stability Index</div>
            <div className="text-2xl font-bold">{data.metrics.stabilityIndex}</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-sm text-gray-400">Loss Factor</div>
            <div className="text-2xl font-bold">{data.metrics.lossFactor}</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="text-sm text-gray-400">Environmental Drift</div>
            <div className="text-2xl font-bold">{data.metrics.environmentalDrift}°</div>
          </div>
        </div>
      )}

      {data?.analysis && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">🤖 AI System Insight</h2>
          <p className="text-sm text-gray-300">{data.analysis}</p>
        </div>
      )}

      {!data && (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">System Status</h2>
          <p className="text-sm text-gray-300">
            Live AI-generated operational insight will appear here once data loads.
          </p>
        </div>
      )}
    </div>
  );
}
