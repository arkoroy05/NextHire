import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-full dark">
      <div className="h-full w-full dark:bg-background bg-background dark:bg-grid-white/[0.15] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="fixed pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="fixed z-50 pointer-events-none inset-x-0 top-0 flex justify-center mix-blend-multiply">
          <div
            className="w-[700px] h-[400px] dark:bg-yellow-500/10 bg-yellow-500/90"
            style={{
              maskImage:
                "radial-gradient(circle at center top, black 1%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle at center top, black 5%, transparent 70%)",
            }}
          />
          
        </div>
        <div className="fixed z-50 pointer-events-none inset-x-0 top-0 flex justify-center">
          <div
            className="w-[500px] h-[300px] dark:bg-white/10 bg-yellow-500/90"
            style={{
              maskImage:
                "radial-gradient(circle at center top, black 1%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle at center top, black 5%, transparent 70%)",
            }}
          />
        </div>
        <div className="fixed z-50 pointer-events-none inset-x-0 top-0 flex justify-center">
          <div
            className="w-[500px] h-[300px] dark:bg-black/10 bg-yellow-500/90"
            style={{
              maskImage:
                "radial-gradient(circle at center top, white 10%, transparent 0%)",
              WebkitMaskImage:
                "radial-gradient(circle at center top, black 5%, transparent 70%)",
            }}
          />
        </div>
      </div>
      <div className="absolute top-0 left-0  flex flex-col items-center justify-center h-full w-full translate-y-[-10vh]">
        <h1 className="font-mono text-lime-500 text-[calc(100vh/4.5)] font-light -m-4">
          {"<NEXTHIRE>"}
        </h1>
        <p className="font-mono text-neutral-400 text-[calc(100vh/15)] font-light">
          Aesthetic resumes at your disposal.
        </p>
        <Button variant={"outline"} className="w-auto my-5 p-8 mr-2 text-3xl font-bold font-mono text-neutral-300" onClick={() => window.location.href = '/form'}>Build your resume today {">"} </Button>

      </div>
      
    </div>
  );
}
