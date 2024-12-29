import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TrendingUp, Settings2, Loader } from "lucide-react";

export default function Home() {
  return (
    <div className="h-full dark">
      <div className="h-full w-full relative flex items-center justify-center">
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
      <div className="absolute top-0 left-0  flex flex-col items-center justify-center h-full w-full  gap-5">
        <div className="h-full w-full absolute bottom-0 left-0 ">
          <TextHoverEffect text="NEXTHIRE" />

        </div>

        <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full gap-5 pointer-events-none">
          <h1 className="text-4xl font-medium">
          Get hired today with<span className="text-lime-500 font-bold"> Nexthire</span>
          </h1>
          <h1 className="text-lg font-light">
            Aesthetic resumes at your disposal.
          </h1>
          <Button
            variant={"outline"}
            className="text-lg font-medium font-sans text-neutral-300 pointer-events-auto"
            onClick={() => (window.location.href = "/user")}
          >
            Get Started{" "}
          </Button>
          <div className="flex flex-row m-0 font-bold gap-5 h-[calc(30vh)] pointer-events-auto">
            <CardContainer className="inter-var backdrop-blur-[0.2rem] bg-transparent">
              <CardBody className="h-40 w-60 bg-transparent text-sm flex flex-col items-center justify-center p-5 relative group/card dark:hover:shadow-2xl dark:hover:shadow-lime-500/[0.1] border border-neutral-500/50 rounded-lg">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  <TrendingUp className="h-20 w-20" />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className=""
                >
                  <h1>Trending Resumes</h1>
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var backdrop-blur-[0.1rem] bg-transparent">
              <CardBody className="h-40 w-60  text-sm flex flex-col items-center justify-center p-5 relative group/card dark:hover:shadow-2xl dark:hover:shadow-lime-500/[0.1] border border-neutral-500/50 rounded-lg">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  <Loader className="h-20 w-20 " />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className=""
                >
                  <h1>Progress Saved</h1>
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var backdrop-blur-[0.1rem] bg-transparent">
              <CardBody className="h-40 w-60 text-sm flex flex-col items-center justify-center p-5 relative group/card dark:hover:shadow-2xl dark:hover:shadow-lime-500/[0.1] border border-neutral-500/50 rounded-lg">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  <Settings2 className="h-20 w-20 " />
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className=""
                >
                  <h1>Dynamic Templates</h1>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
