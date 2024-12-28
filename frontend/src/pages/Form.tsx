import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type Education = {
  level: string;
  institution: string;
  cgpa: string;
};

type FormData = {
  education: Education[];
  languages: string[];
  frameworks: string[];
  developerTools: string[];
  libraries: string[];
  linkedinUrl: string;
  githubUrl: string;
};

const educationOptions = [
  { id: "high-school", label: "High School" },
  { id: "college", label: "College" },
  { id: "bachelors", label: "Bachelor's Degree" },
  { id: "masters", label: "Master's Degree" },
  { id: "phd", label: "Ph.D." },
];

const languageOptions = [
  "JavaScript", "Python", "Java", "C#", "C++", "Ruby", "PHP", "TypeScript",
  "Swift", "Kotlin", "Go", "Rust", "Dart", "Scala", "R", "SQL", "Perl",
  "MATLAB", "Shell", "Lua", "Groovy", "Haskell", "Elixir", "Julia", "F#",
  "Objective-C", "Visual Basic", "Assembly", "COBOL", "Fortran",
];

const frameworkOptions = [
  "React", "Angular", "Vue.js", "Svelte", "Next.js", "Nuxt.js", "Express",
  "Django", "Flask", "FastAPI", "Ruby on Rails", "Spring Boot", "Laravel",
  "ASP.NET Core", "Meteor", "Ember.js", "Backbone.js", "Symfony", "CakePHP",
  "CodeIgniter", "Play Framework", "Koa", "Gin", "Phoenix", "Hapi.js",
  "Gatsby", "Gridsome", "Electron", "Quasar", "Ionic",
];

const developerToolOptions = ["Visual Studio Code", "Git", "Docker", "Jenkins", "Jira"];

const libraryOptions = [
  "React", "Angular", "Vue.js", "jQuery", "Lodash", "Express", "Django",
  "Flask", "NumPy", "Pandas", "Matplotlib", "TensorFlow", "PyTorch", "Keras",
  "Scikit-learn", "BeautifulSoup", "Requests", "FastAPI", "Next.js", "Tailwind CSS",
  "Bootstrap", "Axios", "Redux", "Socket.IO", "Three.js", "Chart.js", "Moment.js",
  "Prisma", "PostgreSQL", "Firebase",
];

const userId = localStorage.getItem("userId");

export default function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    education: [],
    languages: [],
    frameworks: [],
    developerTools: [],
    libraries: [],
    linkedinUrl: "",
    githubUrl: "",
  });

  const [errorMessages, setErrorMessages] = useState<{
    [key: string]: string;
  }>({
    education: "",
    languages: "",
    frameworks: "",
    developerTools: "",
    libraries: "",
    linkedinUrl: "",
    githubUrl: "",
  });

  const validateForm = (): boolean => {
    const newErrorMessages: { [key: string]: string } = {};

    if (formData.education.length === 0) {
      newErrorMessages.education = "Please select at least one education level.";
    } else {
      formData.education.forEach((edu) => {
        if (!edu.institution) {
          newErrorMessages.education = "Please provide the institution name for all education levels.";
        }
        if (!edu.cgpa) {
          newErrorMessages.education = "Please provide CGPA for all education levels.";
        }
      });
    }

    if (formData.languages.length === 0) {
      newErrorMessages.languages = "Please select at least one language.";
    }
    if (formData.frameworks.length === 0) {
      newErrorMessages.frameworks = "Please select at least one framework.";
    }
    if (formData.developerTools.length === 0) {
      newErrorMessages.developerTools = "Please select at least one developer tool.";
    }
    if (formData.libraries.length === 0) {
      newErrorMessages.libraries = "Please select at least one library.";
    }

    setErrorMessages(newErrorMessages);

    return Object.keys(newErrorMessages).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEducationChange = (level: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        education: [...prev.education, { level, institution: "", cgpa: "" }],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        education: prev.education.filter((edu) => edu.level !== level),
      }));
    }
  };

  const handleEducationDetailChange = (level: string, field: "institution" | "cgpa", value: string) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.level === level ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const handleMultiSelect = (
    field: "languages" | "frameworks" | "developerTools" | "libraries",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const payload = {
      userId,
      education: formData.education.map((edu) => ({
        level: edu.level,
        instituteName: edu.institution,
        CGPA: edu.cgpa,
      })),
      skills: {
        languages: formData.languages.filter((lang) => languageOptions.includes(lang)),
        frameworks: formData.frameworks.filter((fw) => frameworkOptions.includes(fw)),
        libraries: formData.libraries.filter((lib) => libraryOptions.includes(lib)),
        developerTools: formData.developerTools.filter((tool) => developerToolOptions.includes(tool)),
      },
    };

    axios
      .post("http://localhost:3000/form", payload)
      .then(() => navigate("/projects"))
      .catch((error) => {
        const errorMessage = error.response?.data?.message || error.message;
        alert(`Error submitting form: ${errorMessage}`);
      });
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6">Developer Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <div className="text-xl font-bold mb-4">Education</div>
          {educationOptions.map((option) => (
            <div key={option.id} className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={formData.education.some((edu) => edu.level === option.label)}
                  onCheckedChange={(checked) => handleEducationChange(option.label, checked as boolean)}
                />
                <label htmlFor={option.id}>{option.label}</label>
              </div>
              {formData.education.some((edu) => edu.level === option.label) && (
                <div className="ml-6 space-y-2">
                  <Input
                    placeholder="Institution name"
                    value={formData.education.find((edu) => edu.level === option.label)?.institution || ""}
                    onChange={(e) => handleEducationDetailChange(option.label, "institution", e.target.value)}
                    className={errorMessages.education ? "border-red-500" : ""}
                  />
                  <Input
                    placeholder="CGPA"
                    value={formData.education.find((edu) => edu.level === option.label)?.cgpa || ""}
                    onChange={(e) => handleEducationDetailChange(option.label, "cgpa", e.target.value)}
                    className={errorMessages.education ? "border-red-500" : ""}
                  />
                </div>
              )}
            </div>
          ))}
          {errorMessages.education && <div className="text-red-500 text-sm">{errorMessages.education}</div>}
        </div>

        {["languages", "frameworks", "developerTools", "libraries"].map((field) => (
          <div key={field}>
            <div className="text-xl font-bold mb-4">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </div>
            <div className="grid grid-cols-4 gap-5 mb-2">
              {(field === "languages"
                ? languageOptions
                : field === "frameworks"
                ? frameworkOptions
                : field === "developerTools"
                ? developerToolOptions
                : libraryOptions
              ).map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${field}-${option}`}
                    checked={formData[field as keyof FormData].includes(option)}
                    onCheckedChange={() => handleMultiSelect(field as any, option)}
                  />
                  <label htmlFor={`${field}-${option}`}>{option}</label>
                </div>
              ))}
            </div>
            {errorMessages[field] && <div className="text-red-500 text-sm">{errorMessages[field]}</div>}
          </div>
        ))}

        <div>
          <div className="text-xl font-bold mb-4">Links</div>
          <Input
            placeholder="LinkedIn URL"
            value={formData.linkedinUrl}
            onChange={(e) => handleChange("linkedinUrl", e.target.value)}
            className={errorMessages.linkedinUrl ? "border-red-500" : ""}
          />
          {errorMessages.linkedinUrl && (
            <div className="text-red-500 text-sm">{errorMessages.linkedinUrl}</div>
          )}
          <Input
            placeholder="GitHub URL"
            value={formData.githubUrl}
            onChange={(e) => handleChange("githubUrl", e.target.value)}
            className={errorMessages.githubUrl ? "border-red-500" : ""}
          />
          {errorMessages.githubUrl && (
            <div className="text-red-500 text-sm">{errorMessages.githubUrl}</div>
          )}
        </div>

        <Button type="submit" className="w-full">
          Proceed to Projects
        </Button>
      </form>
    </div>
  );
}
