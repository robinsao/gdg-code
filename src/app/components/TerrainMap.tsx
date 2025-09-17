import SimpleRadarChart from "./SimpleRadarChart";
import Slider from "./Slider";

export default function TerrainMap() {
  return (
    <section className="card flex flex-col p-6 col-span-1">
      <h2 className="card-title mb-2">Terrain Map</h2>
      <div className="flex flex-col items-center">
        <SimpleRadarChart />
        <div className="w-full mt-2">
          <Slider
            min={0}
            max={100}
            value={40}
            label="X"
            color="bg-orange-500"
          />
          <Slider
            min={0}
            max={100}
            value={70}
            label="Y"
            color="bg-orange-500"
          />
        </div>
      </div>
    </section>
  );
}
