"use client";

import Header from "./components/Header";
import TerrainClassification from "./components/TerrainClassification";
import StabilityPrediction from "./components/StabilityPrediction";
import RemoteSensing from "./components/RemoteSensing";
import SensorStatus from "./components/SensorStatus";
import ElevationSlopeSummary from "./components/ElevationSlopeSummary";
import CameraFeed from "./components/CameraFeed";
import SoilType from "./components/SoilType";
import TerrainStability from "./components/TerrainStability";
import ManualControls from "./components/ManualControls";
import TerrainMap from "./components/TerrainMap";
import CurrentConditions from "./components/CurrentConditions";

export default function Home() {
  return (
    <main className="dashboard-bg min-h-screen w-full p-6 font-sans">
      <Header />
      <div className="min-h-[85vh] grid grid-cols-1 md:grid-cols-3 grid-rows[1fr_10px_1fr] gap-4">
        <TerrainClassification />
        <StabilityPrediction />
        <RemoteSensing />
        <SensorStatus />
        <ElevationSlopeSummary />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 mt-4">
        <CameraFeed />
        <SoilType />
        <TerrainStability />
        <ManualControls />
        <TerrainMap />
        <CurrentConditions />
      </div>
    </main>
  );
}
