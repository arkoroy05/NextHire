import { useState, useEffect } from "react";
type Education = {
  type: string;
  name: string;
  cgpa: string;
};
type Experience = {
  designation: string;
  company: string;
  duration: string;
};
type Project = {
  id: number;
  name: string;
  description: string[];
  links: string[];
};
type UserData = {
  name: string;
  jobTitle: string;
  imageUrl: string;
  skillsTemplate: string;
  skills: string[];
  educationTemplate: string;
  education: Education[];
  about: string;
  linkedinUrl: string;
  githubUrl: string;
  experienceTemplate: string;
  experience: Experience[];
  projectsTemplate: string;
  projects: Project[];
  librariesTemplate: string;
  libraries: string[];
  developerToolsTemplate: string;
  developerTools: string[];
  frameworksTemplate: string;
  frameworks: string[];
  languagesTemplate: string;    
  languages: string[];
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
      const parseTemplatefromArray = (
        data: any,
        identifier: string,
        templateidentifier: string,
        templateplaceholder: string
      ) =>
        data[identifier]
          .map((item: any) =>
            (
              templateHtml.match(
                new RegExp(`<!--\\[\\[${templateidentifier}=(.*?)]]-->`)
              )?.[1] || ""
            ).replace(new RegExp(`{{${templateplaceholder}}}`, "g"), item)
          )
          .join("") || "";
      const parseTemplatefromObject = (
        data: any,
        identifier: string,
        templateidentifier: string,
        templateplaceholder: string
      ) => {
        return data[identifier]
          .map((item: any) => {
            let template =
            templateHtml.match(
              new RegExp(`<!--\\[\\[${templateidentifier}=(.*?)]]-->`)
            )?.[1] || ""
            for (const key in item) {
              template = template.replace(
                new RegExp(`{{${templateplaceholder}.${key}}}`, "g"),
                item[key as keyof any]
              );
            }
            return template;
          })
          .join("") || "";
      };

      userData.skillsTemplate = parseTemplatefromArray(
        userData,
        "skills",
        "SkillsTemplate",
        "skill"
      );

      userData.educationTemplate = parseTemplatefromObject(
        userData,
        "education",
        "EducationTemplate",
        "education"
      );

      userData.experienceTemplate = parseTemplatefromObject(
        userData,
        "experience",
        "ExperienceTemplate",
        "experience"
      );
      userData.projectsTemplate = parseTemplatefromObject(
        userData,
        "projects",
        "ProjectsTemplate",
        "project"
      );

      userData.librariesTemplate = parseTemplatefromArray(
        userData,
        "libraries",
        "LibrariesTemplate",
        "library"
      );

      userData.frameworksTemplate = parseTemplatefromArray(
        userData,
        "frameworks",
        "FrameworksTemplate",
        "framework"
      );

      userData.languagesTemplate = parseTemplatefromArray(
        userData,
        "languages",
        "LanguagesTemplate",
        "language"
      );

      userData.developerToolsTemplate = parseTemplatefromArray(
        userData,
        "developerTools",
        "DeveloperToolsTemplate",
        "developerTool"
      );


      let filledTemplate = templateHtml;
      for (const key in userData) {
        filledTemplate = filledTemplate.replace(
          new RegExp(`{{${key}}}`, "g"),
          userData[key as keyof UserData] as any
        );
      }
      setTemplate(filledTemplate);
    };

    fillTemplate();
  }, [userData]);

  if (!template) return <div>Loading...</div>;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: template }}
      className="h-full" // Render HTML content
    />
  );
};

export default ResumeTemplate;
