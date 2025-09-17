import Image from "next/image";

export default function CameraFeed() {
  return (
    <section className="card grid grid-rows-[auto_1fr] p-6">
      <h2 className="card-title mb-2">Camera Feed</h2>
      <Image
        src="/tunnel.png"
        alt="Camera Feed"
        width={400}
        height={120}
        className="w-full object-cover h-60 rounded-md mb-2"
      />
    </section>
  );
}
