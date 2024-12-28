export default function Home() {
  return (
    <div className="h-full dark">
      <div className="h-full w-full dark:bg-background bg-background dark:bg-grid-white/[0.15] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="absolute top-0 left-0  flex flex-col items-center justify-center h-full w-full translate-y-[-25vh]">
        <h1 className="font-mono text-lime-600 text-[calc(100vh/4.5)] font-light border -m-4">{"<NEXTHIRE>"}</h1>
        <p className="font-mono text-neutral-400 text-[calc(100vh/15)] font-light">Aesthetic resumes at your disposal.</p>
      </div>
    </div>
  );
}
