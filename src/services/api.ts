export interface EvaluationResult {
  risk_score: number;
  action: 'ALLOW' | 'ISOLATE' | 'BLOCK';
  explanation: string;
  zero_trust: { verified: boolean; policy: string };
  synthetic_only: boolean;
  latency_ms?: number;
}
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
export async function evaluateECU(ecuId: string): Promise<EvaluationResult> {
  const res = await fetch(`${API_URL}/evaluate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ecu_id: ecuId, synthetic_only: true })
  });
  return res.json();
    }
