import { useState, useEffect } from "react";

type Education = {
  level: "High School" | "College" | "Bachelor's Degree" | "Master's Degree" | "Ph.D.";
  instituteName: string;
  CGPA: string;
  _id: string;
};

type UserData = {
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
  about?: string;
  jobTitle?: string;
  github?: string;
  linkedin?: string;
};

const ResumeTemplate = ({
  userData,
  templateHtml,
}: {
  userData: UserData;
  templateHtml: string;
}) => {
  const [template, setTemplate] = useState<string>("");

  useEffect(() => {
    const fillTemplate = async () => {
      // Transform the education data to match template format
      const transformedEducation = userData.education.map(edu => ({
        type: edu.level,
        name: edu.instituteName,
        cgpa: edu.CGPA
      }));

      // Transform experience data (assuming we need to create this from the experience number)
      const transformedExperience = [{
        designation: `Software Developer with ${userData.experience} years of experience`,
        company: "Various Companies",
        duration: `${userData.experience} years`
      }];

      // Transform projects data
      const transformedProjects = userData.projects.map(project => ({
        name: project.name,
        description: project.description,
        link: project.link || "#"
      }));

      const parseTemplatefromArray = (
        data: string[],
        templateidentifier: string,
        templateplaceholder: string
      ) => {
        if (!Array.isArray(data)) return '';
        
        return data
          .map((item: string) => {
            const template = templateHtml.match(
              new RegExp(`<!--\\[\\[${templateidentifier}=(.*?)]]-->`)
            )?.[1] || "";
            return template.replace(new RegExp(`{{${templateplaceholder}}}`, "g"), item);
          })
          .join("");
      };
    
      const parseTemplatefromObject = (
        data: any[],
        templateidentifier: string,
        templateplaceholder: string
      ) => {
        return data
          .map((item: any) => {
            let template = templateHtml.match(
              new RegExp(`<!--\\[\\[${templateidentifier}=(.*?)]]-->`)
            )?.[1] || "";
            
            for (const key in item) {
              template = template.replace(
                new RegExp(`{{${templateplaceholder}.${key}}}`, "g"),
                item[key]
              );
            }
            return template;
          })
          .join("");
      };

      // Create a merged data object with all the transformed data
      const mergedData = {
        ...userData,
        about: userData.about || `Experienced developer with ${userData.experience} years of experience`,
        jobTitle: userData.jobTitle || "Software Developer",
        github: userData.github || "#",
        linkedin: userData.linkedin || "#",
        phone: userData.phoneNumber,
        email: userData.email,
        education: transformedEducation,
        experience: transformedExperience,
        projects: transformedProjects,
        skillsTemplate: parseTemplatefromArray(userData.languages, "SkillsTemplate", "skill"),
        educationTemplate: parseTemplatefromObject(transformedEducation, "EducationTemplate", "education"),
        experienceTemplate: parseTemplatefromObject(transformedExperience, "ExperienceTemplate", "experience"),
        projectsTemplate: parseTemplatefromObject(transformedProjects, "ProjectsTemplate", "project"),
        librariesTemplate: parseTemplatefromArray(userData.libraries, "LibrariesTemplate", "library"),
        languagesTemplate: parseTemplatefromArray(userData.languages, "LanguagesTemplate", "language"),
        developerToolsTemplate: parseTemplatefromArray(userData.developerTools, "DeveloperToolsTemplate", "developerTool")
      };

      let filledTemplate = templateHtml;
      for (const key in mergedData) {
        filledTemplate = filledTemplate.replace(
          new RegExp(`{{${key}}}`, "g"),
          mergedData[key as keyof typeof mergedData] as string
        );
      }
      setTemplate(filledTemplate);
    };

    fillTemplate();
  }, [userData, templateHtml]);

  if (!template) return <div>Loading...</div>;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: template }}
      className="h-full"
    />
  );
};

export default ResumeTemplate;