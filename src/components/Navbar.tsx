import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'O Espaço', href: '#espaco' },
    { name: 'Consultas', href: '#consultas' },
    { name: 'FAQ', href: '#faq' },
  ];

  const whatsappUrl = "https://wa.me/5521985100334?text=Olá%20Dra.%20Natalia!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'header-blur border-white/10 h-16 md:h-20' : 'bg-transparent border-transparent h-20 md:h-24'}`}>
        <div className="px-6 md:px-12 lg:px-20 xl:px-32 h-full flex items-center justify-between gap-2">
          {/* Logo & Name */}
          <a href="#home" className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
            <img 
              src="/1000259253-removebg-preview.png" 
              alt="Dra. Natalia Lázaro Logo" 
              className="h-10 md:h-16 w-auto object-contain brightness-0 invert"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-brand-offwhite/50 hover:text-brand-gold transition-colors">
                {link.name}
              </a>
            ))}
            <a href="https://www.instagram.com/dra.natalialazaro" target="_blank" rel="noreferrer" className="text-brand-offwhite/50 hover:text-brand-gold transition-colors">
              <Instagram size={20} />
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* WhatsApp Link */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-gold text-brand-dark px-4 md:px-6 py-2 md:py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:bg-brand-copper hover:text-white cta-hover flex items-center gap-2 gold-glow"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">Agendar</span>
            </a>

            {/* Hamburger Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden text-brand-gold focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-dark flex flex-col items-center justify-center space-y-8 p-6 lg:hidden"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-6 text-brand-gold">
              <X size={36} />
            </button>
            
            <img 
              src="/1000259253-removebg-preview.png" 
              alt="Dra. Natalia Lázaro Logo" 
              className="h-20 w-auto object-contain brightness-0 invert mb-4 opacity-80"
            />
            
            <nav className="flex flex-col items-center space-y-6 text-sm font-black uppercase tracking-[0.3em]">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-brand-offwhite hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://www.instagram.com/dra.natalialazaro" 
                target="_blank" 
                rel="noreferrer" 
                className="text-brand-gold flex items-center gap-2"
              >
                <Instagram size={20} /> Instagram
              </a>
            </nav>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full max-w-xs bg-brand-gold text-brand-dark py-5 rounded-full text-center font-bold uppercase tracking-widest text-xs gold-glow"
            >
              Agendar Consulta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
