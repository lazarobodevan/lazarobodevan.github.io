import { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ExternalLink, Github, Calendar, Linkedin } from 'lucide-react';
import { projects } from '../data/projects';

interface Project {
  id: number;
  name: string;
  briefing: string;
  description: string;
  status: string;
  technologies: string[];
  date: string;
  video: string | null;
  github: string;
  linkedin: string | null;
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'fullstack'>('all');


  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.type === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'concluído':
        return 'bg-green-500/10 text-green-600 border-green-200';
      case 'em desenvolvimento':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-200';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('pt-BR', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Meus Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Uma seleção dos projetos que desenvolvi ao longo da minha jornada, 
            desde aplicações web até soluções mobile e IoT.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              size="sm"
            >
              Todos ({projects.length})
            </Button>
            <Button
              variant={filter === 'fullstack' ? 'default' : 'outline'}
              onClick={() => setFilter('fullstack')}
              size="sm"
            >
              Fullstack ({projects.filter(p => p.type === 'fullstack').length})
            </Button>
            <Button
              variant={filter === 'mobile' ? 'default' : 'outline'}
              onClick={() => setFilter('mobile')}
              size="sm"
            >
              Mobile ({projects.filter(p =>p.type === 'mobile').length})
            </Button>
            <Button
              variant={filter === 'web' ? 'default' : 'outline'}
              onClick={() => setFilter('web')}
              size="sm"
            >
              Web ({projects.filter(p => p.type === 'web').length})
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="group-hover:text-primary transition-colors">{project.name}</h3>
                  <Badge variant="outline" className={`${getStatusColor(project.status)} text-xs`}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">{project.briefing}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(project.date)}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => setSelectedProject(project)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver detalhes
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  
                  {project.linkedin && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.linkedin, '_blank')}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center justify-between">
                    <span>{selectedProject.name}</span>
                    <Badge variant="outline" className={getStatusColor(selectedProject.status)}>
                      {selectedProject.status}
                    </Badge>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(selectedProject.date)}</span>
                  </div>

                  <div>
                    <h4 className="mb-2">Resumo</h4>
                    <p className="text-muted-foreground">{selectedProject.briefing}</p>
                  </div>

                  <div>
                    <h4 className="mb-2">Descrição</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="mb-3">Tecnologias Utilizadas</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t">
                    <Button
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Ver no GitHub
                    </Button>
                    
                    {selectedProject.linkedin && (
                      <Button
                        variant="outline"
                        onClick={() => selectedProject.linkedin ? window.open(selectedProject.linkedin, '_blank') : null}
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="h-4 w-4" />
                        Ver no LinkedIn
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}