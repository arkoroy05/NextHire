import { TextHoverEffect } from "@/components/ui/text-hover-effect"

const Test = () => {
  return (
    <>
    <div className="background-layer h-full w-full bg-grid-white/[0.2] fixed flex items-center justify-center dark z-10">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute bottom-0 left-0 z-10 h-full w-full dark">
        <TextHoverEffect text="PROJECTS" />
      </div>
    </div>
    <div className="foreground-layer absolute top-0 left-0 h-full w-full flex items-center justify-center text-7xl z-20 pointer-events-none">
    </div>
    </>

  )
}

export default Test