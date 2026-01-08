/**
 * VoltAir Metrics Generator
 * Generates simulated wireless energy transfer metrics for demonstration
 */

export interface VoltAirMetrics {
  efficiency: number;
  stabilityIndex: number;
  lossFactor: number;
  environmentalDrift: number;
  timestamp: string;
}

/**
 * Generate realistic simulated VoltAir metrics
 * All values are for demonstration purposes only
 */
export function generateVoltAirMetrics(): VoltAirMetrics {
  return {
    efficiency: Math.round((75 + Math.random() * 20) * 10) / 10,
    stabilityIndex: Math.round((85 + Math.random() * 15) * 10) / 10,
    lossFactor: Math.round((8 + Math.random() * 4) * 10) / 10,
    environmentalDrift: Math.round((22 + Math.random() * 5) * 10) / 10,
    timestamp: new Date().toISOString(),
  };
}
