import { useParams } from "react-router-dom";
import { LucideStar, Download, ArrowLeft, ArrowRight, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Page from "@/components/Page";
import ResumeTemplate from "@/components/ResumeTemplate";
import html2pdf from "html2pdf.js";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import resumeTemplates from "@/assets/data/testData";
import axios from "axios";
import { useEffect, useState } from "react";

// DO NOT ADD ANY CONSOLE.LOG() TO THIS FILE(use full one is there)
interface Education {
  level: 'High School' | 'College' | "Bachelor's Degree" | "Master's Degree" | 'Ph.D.';
  instituteName: string;
  CGPA: string;
  _id: string;
}

interface Skills {
  languages: string[];
  frameworks: string[];
  libraries: string[];
  developerTools: string[];
}

interface Project {
  name: string;
  description: string;
  link?: string;
}

interface UserData {
  name: string;
  email: string;
  phoneNumber: string;
  experience: number;
  education: Education[];
  languages: string[];
  frameworks: string[];
  libraries: string[];
  developerTools: string[];
  projects: Project[];
}

// Custom hook for fetching resume data
const useResumeData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError('No user ID found. Please complete your profile first.');
        setIsLoading(false);
        return;
      }

      try {
        const { data } = await axios.get(`http://localhost:3000/user?userId=${userId}`);
        
        // Validate required data
        if (!data.user) {
          throw new Error('User data not found');
        }

        // Transform projects data from the updated API format
        const transformedProjects = (data.projects || []).map(project => ({
          name: project.projectName || '',
          description: project.description || '',
          link: project.link || ''
        }));

        // Transform education and skills data from the updated API format
        const transformedUserData = {
          name: data.user.name || '',
          email: data.user.email || '',
          phoneNumber: data.user.phoneNumber || '',
          experience: data.user.experience || 0,
          education: data.educationAndSkills?.education || [],
          languages: data.educationAndSkills?.skills?.languages || [],
          frameworks: data.educationAndSkills?.skills?.frameworks || [],
          libraries: data.educationAndSkills?.skills?.libraries || [],
          developerTools: data.educationAndSkills?.skills?.developerTools || [],
          projects: transformedProjects
        };

        setUserData(transformedUserData);
        //do not remove this console.log()
        console.log('Fetched data:', data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(
          err instanceof Error 
            ? `Error: ${err.message}` 
            : 'Failed to fetch resume data. Please try again.'
        );
      } finally { 
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { userData, isLoading, error };
};

// PDF generation utility
const generatePDF = () => {
  const element = document.getElementById("template");
  if (!element) return;
  
  element.style.zoom = "1";
  
  const options = {
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      dpi: 192,
      letterRendering: true,
      useCORS: true
    },
    jsPDF: { 
      unit: "mm", 
      format: "a4", 
      orientation: "portrait", 
      margin: 0 
    }
  };

  html2pdf(element, options);
};

// Zoom utility
const useZoom = (initialZoom = 1) => {
  const [zoom, setZoom] = useState(initialZoom);

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.05, 2));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.05, 0.5));

  useEffect(() => {
    const element = document.getElementById("template");
    if (element) {
      element.style.zoom = String(zoom);
    }
  }, [zoom]);

  return { zoom, zoomIn, zoomOut };
};

function Template() {
  const { id } = useParams();
  const { userData, isLoading, error } = useResumeData();
  const { zoomIn, zoomOut } = useZoom();
  
  const template = resumeTemplates.find(template => template.id === Number(id));
  
  if (isLoading) {
    return <h1 className="font-bold text-3xl m-10">Loading resume data...</h1>;
  }

  if (error || !template || !userData) {
    return (
      <div className="m-10">
        <h1 className="font-bold text-3xl mb-4">
          {!template ? 'Template not found' : error}
        </h1>
        {error && error.includes('No user ID found') && (
          <p className="text-neutral-400">
            Please complete your profile before accessing the templates.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="h-full grid grid-cols-[60%_1fr] text-white">
      <div className="w-full h-full page">
        <ScrollArea className="w-calc(100vw-3rem) h-[75vh] mt-10 p-5 rounded-lg border border-neutral-500/50 ml-10">
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
        <p className="text-neutral-400 m-10 my-2 mb-4 text-lg">{template.desc}</p>
        
        <div className="m-10 mt-0">
          {[1, 2, 3, 4, 5].map((i) => (
            <LucideStar
              key={i}
              className={`inline-block w-6 h-6 m-2 mt-0 ${
                i <= Number(template.rating) ? "text-yellow-400" : "text-neutral-400"
              }`}
            />
          ))}
          
          <div className="tags flex gap-2 mt-2">
            {template.tags.map((tag, index) => (
              <div key={index} className="text-neutral-400 border border-neutral-200/40 font-medium p-2 rounded-md">
                {tag}
              </div>
            ))}
          </div>

          <Button className="w-auto my-5 p-5 mr-2" onClick={generatePDF}>
            <Download />Save to PDF
          </Button>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="w-auto p-5"
              disabled={Number(id) <= 1}
              href={`/templates/${Math.max(1, Number(id) - 1)}`}
            >
              <ArrowLeft className="text-lime-500" /> Prev
            </Button>

            <Button
              variant="outline"
              className="w-auto p-5"
              disabled={Number(id) >= resumeTemplates.length}
              href={`/templates/${Math.min(resumeTemplates.length, Number(id) + 1)}`}
            >
              <ArrowRight className="text-lime-500" /> Next
            </Button>
          </div>

          <div className="flex gap-2 mt-2">
            <Button className="w-auto p-5" variant="outline" onClick={zoomIn}>
              <ZoomIn className="text-lime-500" />Zoom in
            </Button>
            <Button className="w-auto p-5" variant="outline" onClick={zoomOut}>
              <ZoomOut className="text-lime-500" />Zoom out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template;