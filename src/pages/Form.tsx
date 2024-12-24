import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from 'lucide-react'


type Education = {
  level: string;
  institution: string;
  cgpa: string;
}


type FormData = {
  name: string;
  education: Education[];
  languages: string[];
  frameworks: string[];
  developerTools: string[];
  libraries: string[];
  linkedinUrl: string;
  githubUrl: string;
}

const educationOptions = [
  { id: 'high-school', label: 'High School' },
  { id: 'college', label: 'College' },
  { id: 'bachelors', label: "Bachelor's Degree" },
  { id: 'masters', label: "Master's Degree" },
  { id: 'phd', label: 'Ph.D.' },
]


const languageOptions = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "Ruby",
  "PHP",
  "TypeScript",
  "Swift",
  "Kotlin",
  "Go",
  "Rust",
  "Dart",
  "Scala",
  "R",
  "SQL",
  "Perl",
  "MATLAB",
  "Shell",
  "Lua",
  "Groovy",
  "Haskell",
  "Elixir",
  "Julia",
  "F#",
  "Objective-C",
  "Visual Basic",
  "Assembly",
  "COBOL",
  "Fortran"
];


const frameworkOptions =  [
  "React",
  "Angular",
  "Vue.js",
  "Svelte",
  "Next.js",
  "Nuxt.js",
  "Express",
  "Django",
  "Flask",
  "FastAPI",
  "Ruby on Rails",
  "Spring Boot",
  "Laravel",
  "ASP.NET Core",
  "Meteor",
  "Ember.js",
  "Backbone.js",
  "Symfony",
  "CakePHP",
  "CodeIgniter",
  "Play Framework",
  "Koa",
  "Gin",
  "Phoenix",
  "Hapi.js",
  "Gatsby",
  "Gridsome",
  "Electron",
  "Quasar",
  "Ionic"
];


const developerToolOptions = ['Visual Studio Code', 'Git', 'Docker', 'Jenkins', 'Jira']
const libraryOptions = [
  "React",
  "Angular",
  "Vue.js",
  "jQuery",
  "Lodash",
  "Express",
  "Django",
  "Flask",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "TensorFlow",
  "PyTorch",
  "Keras",
  "Scikit-learn",
  "BeautifulSoup",
  "Requests",
  "FastAPI",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Axios",
  "Redux",
  "Socket.IO",
  "Three.js",
  "Chart.js",
  "Moment.js",
  "Prisma",
  "PostgreSQL",
  "Firebase"
]
export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    education: [],
    languages: [],
    frameworks: [],
    developerTools: [],
    libraries: [],
    linkedinUrl: '',
    githubUrl: ''
  })

  const handleChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleEducationChange = (level: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        education: [...prev.education, { level, institution: '', cgpa: '' }]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        education: prev.education.filter(edu => edu.level !== level)
      }))
    }
  }

  
  const handleEducationDetailChange = (level: string, field: 'institution' | 'cgpa', value: string) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.level === level ? { ...edu, [field]: value } : edu
      )
    }))
  }

  const handleMultiSelect = (field: 'languages' | 'frameworks' | 'developerTools' | 'libraries', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to an API
  }
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Developer Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            value={formData.name} 
            onChange={(e) => handleChange('name', e.target.value)} 
            placeholder="Enter your name"
          />
        </div>

        <div>
          <Label>Education</Label>
          <div className="space-y-2">
            {educationOptions.map((option) => (
              <div key={option.id} className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id={option.id} 
                    checked={formData.education.some(edu => edu.level === option.label)}
                    onCheckedChange={(checked) => handleEducationChange(option.label, checked as boolean)}
                  />
                  <label htmlFor={option.id}>{option.label}</label>
                </div>
                {formData.education.some(edu => edu.level === option.label) && (
                  <div className="ml-6 space-y-2">
                    <Input 
                      placeholder="Institution name"
                      value={formData.education.find(edu => edu.level === option.label)?.institution || ''}
                      onChange={(e) => handleEducationDetailChange(option.label, 'institution', e.target.value)}
                    />
                    <Input 
                      placeholder="CGPA"
                      value={formData.education.find(edu => edu.level === option.label)?.cgpa || ''}
                      onChange={(e) => handleEducationDetailChange(option.label, 'cgpa', e.target.value)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {['languages', 'frameworks', 'developerTools', 'libraries'].map((field) => (
          <div key={field}>
            <Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
            <div className="grid grid-cols-4 gap-5 mb-2">
              {(field === 'languages' ? languageOptions :
                field === 'frameworks' ? frameworkOptions :
                field === 'developerTools' ? developerToolOptions :
                libraryOptions).map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`${field}-${option}`}
                    //ts-ignore
                    checked={formData[field as keyof FormData].includes(option)}
                    onCheckedChange={() => handleMultiSelect(field as 'languages' | 'frameworks' | 'developerTools' | 'libraries', option)}
                  />
                  <label htmlFor={`${field}-${option}`}>{option}</label>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {formData[field as keyof FormData].map((item) => (
                <div key={item} className="bg-primary text-primary-foreground px-2 py-1 rounded-md flex items-center space-x-1">
                  <span>{item}</span>
                  <button 
                    type="button" 
                    onClick={() => handleMultiSelect(field as 'languages' | 'frameworks' | 'developerTools' | 'libraries', item)}
                    className="text-primary-foreground hover:text-secondary-foreground"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
          <Input 
            id="linkedinUrl" 
            value={formData.linkedinUrl} 
            onChange={(e) => handleChange('linkedinUrl', e.target.value)} 
            placeholder="Enter your LinkedIn URL"
          />
        </div>

        <div>
          <Label htmlFor="githubUrl">GitHub URL</Label>
          <Input 
            id="githubUrl" 
            value={formData.githubUrl} 
            onChange={(e) => handleChange('githubUrl', e.target.value)} 
            placeholder="Enter your GitHub URL"
          />
        </div>

        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </div>
  )
}