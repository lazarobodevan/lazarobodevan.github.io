import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Monitor, 
  Server, 
  Smartphone, 
  Code, 
  Database, 
  Cloud,
  Layers,
  Palette
} from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Frontend",
      description: "Interfaces modernas e responsivas que proporcionam excelente UX",
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Material UI", "Shadcn.UI"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend",
      description: "APIs robustas e arquiteturas escaláveis para suportar aplicações complexas",
      skills: ["C#/ASP.NET 6+", "Node.js", "Java", "Express", "PostgreSQL", "MongoDB", "Redis", "Kafka", "RabbitMQ", "Yarp", "MassTransit", "DDD", "Clean Arch", "CQRS"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android",
      skills: ["React Native", "Flutter", "Dart", "bloc"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "DevOps & Infra",
      description: "Deployment, monitoramento e escalabilidade de aplicações",
      skills: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Linux", "Nginx", "Traefik", "WatchTower"],
      color: "bg-orange-500/10 text-orange-600"
    }
  ];

  const additionalSkills = [
    { icon: <Code className="h-5 w-5" />, name: "Git & GitHub", category: "Versionamento" },
    { icon: <Database className="h-5 w-5" />, name: "REST APIs", category: "Integração" },
    { icon: <Layers className="h-5 w-5" />, name: "Microserviços/Monolito", category: "Arquitetura" },
    { icon: <Palette className="h-5 w-5" />, name: "UI/UX Design", category: "Design" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Habilidades & Especialidades</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma stack diversa que me permite criar soluções completas, 
            desde a concepção até o deploy em produção.
          </p>
        </div>

        {/* Main Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-center mb-8">Outras Competências</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                <div className="text-primary">
                  {skill.icon}
                </div>
                <div>
                  <p className="font-medium">{skill.name}</p>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 bg-primary text-primary-foreground">
            <CardContent className="pt-0">
              <h3 className="mb-4">Vamos trabalhar juntos?</h3>
              <p className="mb-6 opacity-90">
                Estou sempre em busca de novos desafios e projetos interessantes. 
                Se você tem uma ideia, vamos conversar!
              </p>
              <button 
                className="bg-background text-primary px-6 py-3 rounded-lg hover:bg-background/90 transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entrar em contato
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}