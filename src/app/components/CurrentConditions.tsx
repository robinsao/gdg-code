import Slider from "./Slider";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import StyledTooltip from "./StyledTooltip";

const vibration = 7;
const slope = 10;
const sparklineData = [
  { x: 0, y: 12 },
  { x: 10, y: 8 },
  { x: 20, y: 10 },
  { x: 30, y: 6 },
  { x: 40, y: 12 },
];

export default function CurrentConditions() {
  return (
    <section className="card flex flex-col p-6 col-span-1">
      <h2 className="card-title mb-2">Current Conditions</h2>
      <Slider
        min={0}
        max={100}
        value={vibration}
        label="Vibration"
        color="bg-orange-500"
      />
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span></span>
        <span className="text-white font-bold">{vibration}%</span>
      </div>
      <Slider
        min={0}
        max={100}
        value={slope}
        label="Slope"
        color="bg-orange-500"
      />
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span></span>
        <span className="text-white font-bold">{slope}°</span>
      </div>
      <div className="mt-2">
        <span className="text-xs text-gray-400">Current Conditions</span>
        <div className="flex items-center mt-1">
          <div className="w-full h-4 cursor-pointer">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={sparklineData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="#FFA726"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                />
                <XAxis dataKey="x" hide />
                <YAxis domain={[0, 16]} hide />
                <StyledTooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <span className="ml-2 text-white font-bold">{slope}°</span>
        </div>
      </div>
    </section>
  );
}
