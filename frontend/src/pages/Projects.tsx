import React from 'react'
import { useState } from 'react'
import { Plus, X, Edit2, Check, LinkIcon, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom'


interface Project {
  id: number
  name: string
  links: string[]
  description: string[]
}


const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)

  const addProject = () => {
    const newProject: Project = {
      id: Date.now(),
      name: 'New Project',
      links: [''],
      description: ['']
    }
    setProjects([...projects, newProject])
    setEditingId(newProject.id)
  }

  const updateProject = (id: number, updates: Partial<Project>) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, ...updates } : project
    ))
  }

  const deleteProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id))
    if (editingId === id) {
      setEditingId(null)
    }
  }

  const addLink = (id: number) => {
    const project = projects.find(p => p.id === id)
    if (project) {
      updateProject(id, { links: [...project.links, ''] })
    }
  }

  const updateLink = (id: number, index: number, value: string) => {
    const project = projects.find(p => p.id === id)
    if (project) {
      const newLinks = [...project.links]
      newLinks[index] = value
      updateProject(id, { links: newLinks })
    }
  }

  const removeLink = (id: number, index: number) => {
    const project = projects.find(p => p.id === id)
    if (project) {
      const newLinks = project.links.filter((_, i) => i !== index)
      updateProject(id, { links: newLinks })
    }
  }

  const addBulletPoint = (id: number) => {
    const project = projects.find(p => p.id === id)
    if (project) {
      updateProject(id, { description: [...project.description, ''] })
    }
  }

  const updateBulletPoint = (id: number, index: number, value: string) => {
    const project = projects.find(p => p.id === id)
    if (project) {
      const newDescription = [...project.description]
      newDescription[index] = value
      updateProject(id, { description: newDescription })
    }
  }

  const removeBulletPoint = (id: number, index: number) => {
    const project = projects.find(p => p.id === id)
    if (project) {
      const newDescription = project.description.filter((_, i) => i !== index)
      updateProject(id, { description: newDescription })
    }
  }

  const navigate = useNavigate()
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button type="submit" onClick={() => navigate('/resume')} className="bg-amber-200">Proceed to Resume Page</Button>
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
                  <h3 className="text-sm font-medium">Links</h3>
                  {project.links.map((link, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <LinkIcon className="h-4 w-4" />
                      {editingId === project.id ? (
                        <>
                          <Input
                            value={link}
                            onChange={(e) => updateLink(project.id, index, e.target.value)}
                            placeholder="Project link"
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeLink(project.id, index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                          {link || 'No link provided'}
                        </a>
                      )}
                    </div>
                  ))}
                  {editingId === project.id && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addLink(project.id)}
                      className="mt-2"
                    >
                      <Plus className="mr-2 h-4 w-4" /> Add Link
                    </Button>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Description</h3>
                  <ul className="space-y-1">
                    {project.description.map((bullet, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span>•</span>
                        {editingId === project.id ? (
                          <>
                            <Input
                              value={bullet}
                              onChange={(e) => updateBulletPoint(project.id, index, e.target.value)}
                              placeholder={`Bullet point ${index + 1}`}
                            />
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeBulletPoint(project.id, index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <span>{bullet}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  {editingId === project.id && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addBulletPoint(project.id)}
                      className="mt-2"
                    >
                      <Plus className="mr-2 h-4 w-4" /> Add Bullet Point
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
     
    </div>
  )
}

export default Projects