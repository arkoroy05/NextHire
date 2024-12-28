import  { useState } from 'react';
import { Plus, Edit2, Check, LinkIcon, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Project {
  id: number;
  name: string;
  link: string;
  description: string;
}
const userId= localStorage.getItem('userId');

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const addProject = () => {
    const newProject: Project = {
      id: Date.now(),
      name: 'New Project',
      link: '',
      description: ''
    };
    setProjects([...projects, newProject]);
    setEditingId(newProject.id);
  };

  const updateProject = (id: number, updates: Partial<Project>) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, ...updates } : project
    ));
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button type="submit" onClick={async () =>{ 
        for (const project of projects) {
          await axios.post('http://localhost:3000/projects', {
            userId,
            projectName: project.name,
            description: project.description,
            link: project.link
          });
        }
        navigate('/resume');
      }} className="bg-amber-200">
        Proceed to view templates
      </Button>
      </header>
      <Button className='mb-10 bg-amber-200' onClick={addProject}>
        <Plus className="mr-2 h-4 w-4" /> Add Project
      </Button>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <Card key={project.id} className="w-full text-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              {editingId === project.id ? (
                <Input
                  value={project.name}
                  onChange={(e) => updateProject(project.id, { name: e.target.value })}
                  className="font-semibold"
                />
              ) : (
                <CardTitle>{project.name}</CardTitle>
              )}
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setEditingId(editingId === project.id ? null : project.id)}
                >
                  {editingId === project.id ? <Check className="h-4 w-4" /> : <Edit2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteProject(project.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Link</h3>
                  <div className="flex items-center space-x-2">
                    <LinkIcon className="h-4 w-4" />
                    {editingId === project.id ? (
                      <Input
                        value={project.link}
                        onChange={(e) => updateProject(project.id, { link: e.target.value })}
                        placeholder="Project link"
                      />
                    ) : (
                      <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                        {project.link || 'No link provided'}
                      </a>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Description</h3>
                  {editingId === project.id ? (
                    <textarea
                      value={project.description}
                      onChange={(e) => updateProject(project.id, { description: e.target.value })}
                      placeholder="Project description"
                      className="w-full border rounded-md p-2 bg-black"
                      rows={4}
                    />
                  ) : (
                    <p>{project.description || 'No description provided'}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
