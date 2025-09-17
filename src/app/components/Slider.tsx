type SliderProps = {
  min: number;
  max: number;
  value: number;
  label: string;
  color?: string;
};

export default function Slider({
  min,
  max,
  value,
  label,
  color = "bg-blue-500",
}: SliderProps) {
  return (
    <div className="w-full flex flex-col mb-2">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full relative">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
