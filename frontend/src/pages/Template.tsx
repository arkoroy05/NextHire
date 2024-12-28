import { useParams } from "react-router-dom";
import resumeTempplates from "@/assets/data/testData";
import { LucideStar, Download, ArrowLeft, ArrowRight, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Page from "@/components/Page";
import ResumeTemplate from "@/components/ResumeTemplate";
import html2pdf from "html2pdf.js";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import resumeTemplates from "@/assets/data/testData";

function Template() {
  const { id } = useParams();
  const template = resumeTemplates.find((template) => template.id === Number(id));
  const userData = {
    name: "John Doe",
    jobTitle: "Software Engineer",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    experience: [
      { designation: "Software Developer", company: "Tech Corp", duration: "Jan 2020 - Present" },
      { designation: "Junior Software Developer", company: "ABC Inc.", duration: "June 2018 - Dec 2019" },
      { designation: "Intern", company: "XYZ Corporation", duration: "May 2017 - Aug 2017" },
    ],
    education: [
      { type: "High School", name: "Harvard University", cgpa: "3.5/4.0" },
      { type: "College", name: "Stanford University", cgpa: "3.2/4.0" },
      { type: "Bachelor's Degree", name: "University of California, Berkeley", cgpa: "3.8/4.0" },
      { type: "Master's Degree", name: "Massachusetts Institute of Technology", cgpa: "4.0/4.0" },
      { type: "Ph.D.", name: "University of Oxford", cgpa: "4.0/4.0" },
    ],
    projects: [
      {
        id: 1,
        name: "E-Commerce Website",
        description:
          "Developed a fully functional e-commerce website using React, Redux, and Node.js.",
        link: "https://github.com/john-doe/e-commerce-website",
      },
      {
        id: 2,
        name: "Chatbot",
        description:
          "Developed a chatbot using Dialogflow and Node.js.",
        link: "https://github.com/john-doe/chatbot",
      }],
      libraries:[
        "React",
        "Redux",
        "Node.js",
        "MongoDB",
        "Express",
        "Next.js",
        "Tailwind CSS",
        "Lodash",
        "Jest",
        "Enzyme",
        " ESLint",
        "Prettier",
        "TypeScript",
        "Webpack",
        "Babel",
      ],
      developerTools:[
        "Visual Studio Code",
        "Git",
        "GitHub",
        "npm",
        "yarn",
        "Prettier",
        "ESLint",
      ],
      frameworks: [
        "React",
        "Next.js",
        "Express",
        "Redux",
        "Node.js",
      ],
      languages: [
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "SQL",
      ],
    about:
      "Highly motivated and detail-oriented software engineer with 4+ years of experience in developing scalable and efficient web applications. Proficient in JavaScript, React, Node.js, and MongoDB.",
    linkedinUrl: "https://www.linkedin.com/in/john-doe/",
    githubUrl: "https://github.com/john-doe",
  };

  const saveAsPDF = () => {
    const element = document.getElementById("template");
    if (element) {
      html2pdf(element, {
        filename: "template.pdf",
        image: { type: "jpeg", quality: 0.98},
        html2canvas: {
          scale: 1, // Use device scale for accurate rendering
          dpi: 96, // Default DPI for web content
          letterRendering: true
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait", margin: 0 },
      });
    }
  };

  return (
    <div>
      {template ? (
        <div className="h-full grid grid-cols-[60%_1fr] text-white">
          <div className="w-full h-full page">
            <ScrollArea className="w-calc(100vw-3rem) h-[75vh] mt-10 p-5 rounded-lg border border-neutral-500/50 ml-10 overfloow-y-auto">
              <Page id="template">
                <ResumeTemplate
                  userData={userData}
                  templateHtml={template.template}
                />
              </Page>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          <div>
            <h1 className="font-bold text-3xl m-10 mb-0">{template.name}</h1>
            <p className="text-neutral-400 m-10 my-2 mb-4 text-lg ">
              {template.desc}
            </p>
            <div className=" m-10 mt-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <LucideStar
                  key={i}
                  className={`
                  inline-block w-6 h-6 m-2 mt-0
                  ${
                    i <= Number(template.rating)
                      ? "text-yellow-400"
                      : "text-neutral-400"
                  }
                `}
                />
              ))}
              <div className="tags flex gap-2 mt-2">
                {template.tags.map((tag) => (
                  <div className="text-neutral-400 border border-neutral-200/40 font-medium p-2 rounded-md">
                    {tag}
                  </div>
                ))}
              </div>
              <Button className="w-auto my-5 p-5 mr-2" onClick={saveAsPDF}>
                <Download/>Save to PDF
              </Button>

              <a href={`${Number(template.id) - 1}`}>
                <Button
                  variant="outline"
                  className="w-auto my-5 p-5 mx-2"
                  disabled={Number(template.id) <= 1}
                >
                  <ArrowLeft className="text-lime-500" /> Prev
                </Button>
              </a>
              <a href={`${Number(template.id) + 1}`}>
                <Button
                  variant="outline"
                  className="w-auto my-5 p-5 mx-2"
                  disabled={Number(template.id) >= resumeTemplates.length}
                >
                  <ArrowRight className="text-lime-500" /> Next
                </Button>
              </a>
              <div className="flex gap-2 mt-2">
                <Button
                  className="w-auto p-5"
                  variant="outline"
                  onClick={() => {
                    const element = document.getElementById("template");
                    if (element) {
                      element.style.zoom = String(Number(element.style.zoom) + 0.05);
                    }
                  }}
                >
                                    <ZoomIn className="text-lime-500"></ZoomIn>
                  Zoom in

                </Button>
                <Button
                  className="w-auto p-5"
                  variant="outline"
                  onClick={() => {
                    const element = document.getElementById("template");
                    if (element) {
                      element.style.zoom = String(Number(element.style.zoom) - 0.05);
                    }
                  }}
                >
                  <ZoomOut className="text-lime-500"></ZoomOut>
                  Zoom out
                </Button>
              </div>
            </div>
          </div>
        </div>
          ) : (<h1 className="font-bold text-3xl m-10">Template not found</h1>)
        }
    </div>
  );
}

export default Template;
