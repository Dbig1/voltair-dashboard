export function generateVoltAirMetrics() {
  return {
    efficiency: Math.round(Math.random() * 100),
    stabilityIndex: Math.round(Math.random() * 100),
    lossFactor: (Math.random() * 5).toFixed(2),
    environmentalDrift: (Math.random() * 10).toFixed(1),
    gridLoadDistribution: {
      zone1: Math.round(Math.random() * 100),
      zone2: Math.round(Math.random() * 100),
      zone3: Math.round(Math.random() * 100),
    },
    systemPerformance: {
      uptime: (Math.random() * 100).toFixed(2),
      avgLatency: Math.round(Math.random() * 1000),
      errorRate: (Math.random() * 5).toFixed(2),
    },
  };
}
