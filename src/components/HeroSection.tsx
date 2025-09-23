import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion"; // Para animações sutis

export function HeroSection() {
  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900"
    >
      {/* Background subtle shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 -right-24 w-72 h-72 bg-secondary/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src="/profile.jpg"
              alt="Lázaro - Desenvolvedor Fullstack"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Badge variant="secondary">Fullstack</Badge>
              <Badge variant="secondary">Frontend</Badge>
              <Badge variant="secondary">Backend</Badge>
              <Badge variant="secondary">Mobile</Badge>
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl sm:text-5xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Olá, sou{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Lázaro
              </span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Desenvolvedor versátil de 24 anos, bacharel em
              Ciência da Computação e apaixonado por resolver
              problemas através de código. Com uma stack bem
              diversa, crio desde landing pages até aplicações
              completas (front, back, infra, devops...).
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Button size="lg" onClick={scrollToAbout}>
                Conhecer mais
                <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver projetos
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}