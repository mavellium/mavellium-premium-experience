import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import mavelliumLogo from '@/assets/mavellium-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 mx-20 mt-5 border-2 border-[#02704F] rounded-[20px] z-50 transition-all duration-300 ${isScrolled ? 'bg-black backdrop-blur-md shadow-lg' : 'bg-transparent/60'
      }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <div className="flex items-center justify-start space-x-3">
            <img
              src={mavelliumLogo}
              width={159}
              height={48}
              alt="Mavellium"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-white flex items-center justify-center w-[6em] h-[2.5em] border-2 rounded-full  border-[#049F5D]">
              Home
            </a>
            <a href="#sobre" className="text-white">
              Sobre
            </a>
            <a href="#portfolio" className="text-white">
              Cases
            </a>
            <a href="#parcerias" className="text-white">
              Notícias
            </a>


            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="btn-secondary bg-[#0E1925] border-2 rounded-full border-[#049F5D]">
                Fale com a Gente
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="px-6 py-4 space-y-4">
              <a
                href="#sobre"
                className="block text-foreground hover:text-secondary transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#portfolio"
                className="block text-foreground hover:text-secondary transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfólio
              </a>
              <a
                href="#parcerias"
                className="block text-foreground hover:text-secondary transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Parcerias
              </a>
              <Button className="btn-secondary w-full mt-4">
                Fale conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;