import Image from "next/image";

const terrainData = [
  { name: "Sand", value: 45, color: "#FFA726" },
  { name: "Clay", value: 25, color: "#FFB74D" },
  { name: "Gravel", value: 20, color: "#FFD54F" },
  { name: "Rock", value: 10, color: "#BCAAA4" },
];

export default function TerrainClassification() {
  return (
    <section className="card flex flex-col p-6">
      <h2 className="card-title h-auto flex-0 mb-4">Terrain Classification</h2>
      <div className="flex items-center h-auto flex-1  justify-around mb-4">
        <Image
          src="/3d-terrain.png"
          alt="3D Terrain"
          width={80}
          height={80}
          className="w-28"
        />
        <div className="text-sm text-gray-300 ml-4">
          {terrainData.map((t) => (
            <div key={t.name} className="flex justify-between w-32 mb-1">
              <span>{t.name}</span>
              <span className="text-orange-400 font-bold">{t.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
