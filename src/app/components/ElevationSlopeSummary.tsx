import { RadialBarChart, RadialBar } from "recharts";

const slopeData = [
  { name: "Slope", value: 7.5, fill: "#FFA726" },
  { name: "Rest", value: 20 - 7.5, fill: "#232325" },
];

export default function ElevationSlopeSummary() {
  return (
    <section className="card row-start-3 col-start-3 flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-between w-full text-lg text-white mb-2">
          <span>Elevation</span>
          <span className="font-bold">180 m</span>
        </div>
        <div className="flex items-center w-full">
          <span className="text-lg text-white mr-2">Slope</span>
          <RadialBarChart
            width={60}
            height={60}
            cx={30}
            cy={30}
            innerRadius={18}
            outerRadius={25}
            barSize={8}
            data={slopeData}
            startAngle={180}
            endAngle={-180}
          >
            <RadialBar background dataKey="value" cornerRadius={8} />
          </RadialBarChart>
          <span className="text-orange-400 font-bold ml-2">7.5 deg</span>
        </div>
      </div>
    </section>
  );
}
