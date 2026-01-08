export function generateVoltAirMetrics() {
  return {
    efficiency: +(82 + Math.random() * 6).toFixed(2), // %
    stabilityIndex: +(0.91 + Math.random() * 0.04).toFixed(3),
    lossFactor: +(0.12 + Math.random() * 0.03).toFixed(3),
    environmentalDrift: +(Math.random() * 1.5).toFixed(2), // °C equivalent
    timestamp: new Date().toISOString(),
  };
}
