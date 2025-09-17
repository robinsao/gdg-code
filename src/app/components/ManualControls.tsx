import Slider from "./Slider";

export default function ManualControls() {
  return (
    <section className="card flex flex-col p-6 col-span-1">
      <h2 className="card-title mb-2">Manual Controls</h2>
      <div className="flex items-center gap-4 mb-2">
        <div className="flex flex-col items-center gap-1">
          <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center mb-1">
            ↑
          </button>
          <div className="flex flex-row gap-1">
            <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
              ←
            </button>
            <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
              →
            </button>
          </div>
          <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center mt-1">
            ↓
          </button>
        </div>
        <div className="flex flex-col flex-1">
          <Slider
            min={0}
            max={100}
            value={40}
            label="Speed"
            color="bg-blue-500"
          />
          <Slider
            min={0}
            max={100}
            value={60}
            label="Steering"
            color="bg-blue-500"
          />
        </div>
      </div>
      <div className="mt-2">
        <Slider
          min={0}
          max={100}
          value={30}
          label="Manual Controls"
          color="bg-blue-500"
        />
      </div>
    </section>
  );
}
