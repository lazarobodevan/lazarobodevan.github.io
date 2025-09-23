import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/lazarobodevan",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/lazaro-bodevan",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:lazaro@example.com",
      label: "E-mail"
    }
  ];

  return (
    <footer id="contact" className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="mb-4">Vamos nos conectar!</h3>
          <p className="text-muted-foreground mb-8 max-w-md">
            Estou sempre aberto a novas oportunidades e conversas interessantes. 
            Entre em contato através das redes sociais.
          </p>
          
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label={link.label}
                target='_blank'
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="w-full max-w-md h-px bg-border mb-8"></div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 text-muted-foreground">
            <p>© 2025 Lázaro. Feito com</p>
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>e muito código</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}