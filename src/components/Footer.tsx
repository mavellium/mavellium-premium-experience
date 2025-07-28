import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import mavelliumLogo from '@/assets/mavellium-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const footerLinks = [
    {
      title: "Empresa",
      links: [
        { name: "Sobre nós", href: "#sobre" },
        { name: "Portfólio", href: "#portfolio" },
        { name: "Parcerias", href: "#parcerias" },
        { name: "Carreira", href: "#" }
      ]
    },
    {
      title: "Serviços",
      links: [
        { name: "Landing Pages", href: "#" },
        { name: "ERP Customizado", href: "#" },
        { name: "E-commerce", href: "#" },
        { name: "Consultoria", href: "#" }
      ]
    },
    {
      title: "Suporte",
      links: [
        { name: "Central de Ajuda", href: "#" },
        { name: "Documentação", href: "#" },
        { name: "Status", href: "#" },
        { name: "Contato", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max">
        {/* Main Footer */}
        <div className="section-padding border-b border-primary-foreground/10">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={mavelliumLogo} 
                  alt="Mavellium" 
                  className="h-8 w-auto filter brightness-0 invert"
                />
                <span className="text-xl font-bold">Mavellium</span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Criamos soluções digitais que combinam estética premium com performance excepcional.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span>contato@mavellium.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>+55 (11) 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300 hover-scale"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {footerLinks.map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} Mavellium. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;