import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import StyledTooltip from "./StyledTooltip";

const soilTypeData = [
  { name: "1", clay: 80, silt: 60, sand: 40, rock: 20 },
  { name: "2", clay: 60, silt: 50, sand: 60, rock: 30 },
  { name: "3", clay: 70, silt: 40, sand: 50, rock: 25 },
  { name: "4", clay: 90, silt: 70, sand: 60, rock: 50 },
  { name: "5", clay: 60, silt: 60, sand: 70, rock: 60 },
  { name: "6", clay: 80, silt: 80, sand: 60, rock: 40 },
  { name: "7", clay: 70, silt: 60, sand: 80, rock: 80 },
  { name: "8", clay: 60, silt: 70, sand: 60, rock: 90 },
];

export default function SoilType() {
  return (
    <section className="card grid grid-rows-[auto_1fr] p-6 col-span-1">
      <h2 className="card-title">Soil Type</h2>
      <ResponsiveContainer width="100%" height={"100%"}>
        <LineChart
          data={soilTypeData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" hide />
          <YAxis domain={[0, 100]} hide />
          <Line
            type="monotone"
            dataKey="clay"
            stroke="#1020ff"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="silt"
            stroke="#ffe809"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="sand"
            stroke="#FFA726"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="rock"
            stroke="#BCAAA4"
            strokeWidth={2}
            dot={false}
          />
          <StyledTooltip />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
