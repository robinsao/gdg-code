import Image from "next/image";
import PinIcon from "./PinIcon";

export default function RemoteSensing() {
  return (
    <section className="card row-span-2 grid grid-rows-[auto_1fr_auto] items-center p-6">
      <h2 className="card-title text-center mb-4">Remote Sensing</h2>
      <div className="relative w-full mb-4">
        <Image
          src="/top-down-terrain.png"
          width={160}
          height={160}
          alt="Top Down Terrain"
          className="w-full h-full object-cover rounded-md"
        />
        {/* Overlay location pins */}
        <span className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 z-10">
          <PinIcon style={{ color: "red" }} />
        </span>
        <span className="absolute left-2/3 top-2/3 -translate-x-1/2 -translate-y-1/2 z-10">
          <PinIcon style={{ color: "blue" }} />
        </span>
      </div>
      <div className="flex justify-between w-full text-lg text-white mb-1">
        <span>Elevation</span>
        <span className="font-bold">180 m</span>
      </div>
      <div className="flex justify-between w-full text-lg text-white">
        <span>Slope</span>
        <span className="font-bold">7.5 deg</span>
      </div>
    </section>
  );
}
