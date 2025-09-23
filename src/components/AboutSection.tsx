import { Card, CardContent } from "./ui/card";
import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Código Limpo",
      description:
        "Escrevo código limpo, escalável e bem documentado",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Problem Solver",
      description:
        "Apaixonado por resolver problemas complexos com soluções simples",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Inovação",
      description:
        "Sempre buscando novas tecnologias e melhores práticas",
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Dedicação",
      description:
        "Comprometido com a qualidade e entrega de resultados",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-900/5 to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Sobre mim
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Sou um desenvolvedor versátil que combina
            conhecimento técnico sólido com paixão por criar
            soluções que fazem a diferença.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center p-6 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {highlight.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="mb-4 text-2xl font-semibold">
                    Minha Jornada
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Formado em Ciência da Computação aos 23
                    anos, descobri cedo minha paixão por
                    desenvolvimento de software. O que começou
                    como curiosidade se transformou em uma
                    carreira dedicada a criar soluções digitais
                    inovadoras.
                  </p>
                  <p className="text-muted-foreground">
                    Trabalho com uma stack diversificada, desde
                    o desenvolvimento de interfaces modernas e
                    responsivas até arquiteturas robustas de
                    backend, passando por infraestrutura e
                    DevOps. Acredito que a versatilidade é
                    fundamental no mundo da tecnologia atual.
                  </p>
                </div>

                <div className="space-y-4 mt-6 lg:mt-0">
                  {[
                    "Bacharel em Ciência da Computação",
                    "2+ anos de experiência",
                    "Projetos de landing pages a sistemas completos",
                    "Especialista em stack completa",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3"
                    >
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}