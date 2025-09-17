import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import StyledTooltip from "./StyledTooltip";

const terrainStabilityData = [
  { name: "1", value: 60 },
  { name: "2", value: 70 },
  { name: "3", value: 50 },
  { name: "4", value: 80 },
  { name: "5", value: 60 },
  { name: "6", value: 90 },
  { name: "7", value: 15 },
  { name: "8", value: 60 },
  { name: "9", value: 70 },
  { name: "10", value: 50 },
  { name: "11", value: 80 },
  { name: "12", value: 60 },
  { name: "13", value: 90 },
  { name: "14", value: 70 },
];

export default function TerrainStability() {
  return (
    <section className="card grid grid-rows-[auto_1fr] p-6 col-span-1">
      <h2 className="card-title mb-2">Terrain Stability</h2>
      <ResponsiveContainer width="100%" height={"100%"}>
        <LineChart
          data={terrainStabilityData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" hide />
          <YAxis domain={[0, 100]} hide />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FFA726"
            strokeWidth={2}
            dot={false}
          />
          <StyledTooltip />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
