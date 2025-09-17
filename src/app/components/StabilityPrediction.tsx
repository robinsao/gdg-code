import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import StyledTooltip from "./StyledTooltip";

const stabilityData = [
  { distance: 0, probability: 0.1 },
  { distance: 10, probability: 0.13 },
  { distance: 20, probability: 0.18 },
  { distance: 30, probability: 0.25 },
  { distance: 40, probability: 0.32 },
  { distance: 50, probability: 0.4 },
  { distance: 60, probability: 0.52 },
  { distance: 70, probability: 0.65 },
  { distance: 80, probability: 0.78 },
  { distance: 90, probability: 0.89 },
  { distance: 100, probability: 0.97 },
];

export default function StabilityPrediction() {
  return (
    <section className="card grid grid-rows-[auto_1fr] items-center p-6">
      <h2 className="card-title mb-4">Stability Prediction</h2>
      <div className="w-full h-full mb-2 cursor-pointer">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={stabilityData}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <XAxis
              dataKey="distance"
              tick={{ fill: "#aaa", fontSize: 12 }}
              axisLine={{ stroke: "#888" }}
              tickLine={false}
              label={{
                value: "Distance (m)",
                position: "insideBottom",
                fill: "#aaa",
                fontSize: 12,
                offset: -5,
              }}
            />
            <YAxis
              domain={[0, 1]}
              tick={{ fill: "#aaa", fontSize: 12 }}
              axisLine={{ stroke: "#888" }}
              tickLine={false}
              label={{
                value: "Probability",
                angle: -90,
                position: "insideLeft",
                fill: "#aaa",
                fontSize: 12,
                offset: 10,
              }}
            />
            <StyledTooltip />
            <Line
              type="monotone"
              dataKey="probability"
              stroke="#FFA726"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
