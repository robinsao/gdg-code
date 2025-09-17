import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import StyledTooltip from "./StyledTooltip";

const sensorData = [
  { name: "Lidar", value: 75 },
  { name: "Camera", value: 75 },
  { name: "GPS", value: 75 },
  { name: "GPS2", value: 78 },
  { name: "Inclinometer", value: 81 },
  { name: "Radar", value: 84 },
  { name: "IMU", value: 87 },
];

export default function SensorStatus() {
  return (
    <section className="card row-start-2 row-span-2 col-span-2 grid grid-cols-1 grid-rows-[32px_1fr] px-6 pt-6">
      <h2 className="card-title">Sensor Status</h2>
      <div className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sensorData}
            margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
            className="relative"
            style={{ cursor: "pointer" }}
          >
            <XAxis
              dataKey="name"
              tick={{ fill: "#aaa", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: "#aaa", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <StyledTooltip />
            <Bar
              dataKey="value"
              fill="#66bb6a"
              radius={[8, 8, 0, 0]}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
