import { motion } from 'motion/react';
import { Weight, Check, Instagram, MapPin, Phone } from 'lucide-react';
import HeroBackground from './components/HeroBackground';
import Navbar from './components/Navbar';
import BookingPlans from './components/BookingPlans';
import FAQ from './components/FAQ';

export default function App() {
  const whatsappUrl = "https://wa.me/5521985100334?text=Olá%20Dra.%20Natalia!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-start pt-16 md:pt-20 overflow-hidden">
        <HeroBackground />
        
        <div className="absolute inset-0 z-[-2]">
          <img 
            src="Screenshot_20260514_102217_Gallery.jpg" 
            alt="Dra. Natalia Lázaro" 
            className="w-full h-full object-cover opacity-40 md:opacity-50 object-[75%_35%] md:object-[85%_35%]"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="px-6 md:px-12 lg:px-20 xl:px-32 relative z-10 w-full pt-4 pb-20 md:pb-20">
          <div className="w-full space-y-6 md:space-y-8 text-center flex flex-col items-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1.5 border border-brand-gold/30 rounded-full bg-brand-gold/5 backdrop-blur-sm md:mt-0 mb-48 md:mb-72"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold italic">Nutricionista especialista em emagrecimento e clínica</span>
            </motion.div>
            
            <div className="space-y-2 md:space-y-3">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-sans font-light text-3xl md:text-5xl lg:text-7xl leading-[1.2] tracking-[0.1em] md:tracking-[0.3em] uppercase"
              >
                Emagreça com ciência <br className="hidden md:block" /> 
                <span className="text-brand-gold">e sem radicalismos</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-2xl font-light opacity-80 leading-relaxed max-w-2xl italic mx-auto"
              >
                Emagrecimento definitivo com estratégias alimentares totalmente adaptadas à sua rotina.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a 
                href={whatsappUrl} 
                target="_blank"
                rel="noreferrer"
                className="bg-brand-gold text-brand-dark px-10 py-5 rounded-full text-base md:text-lg font-bold cta-hover transition-all text-center gold-glow flex items-center justify-center gap-3"
              >
                Agendar Minha Consulta
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Bar / Marquee Section */}
      <section className="py-12 bg-white/5 border-y border-white/5 overflow-hidden">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-12 font-serif text-lg md:text-xl italic opacity-30 select-none px-6"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 shrink-0">
                <span>15+ anos de experiência</span>
                <span className="text-brand-gold text-2xl">•</span>
                <span>Mais de 4 mil pacientes satisfeitos</span>
                <span className="text-brand-gold text-2xl">•</span>
                <span>Atendimentos presenciais e online em mais de 6 países</span>
                <span className="text-brand-gold text-2xl">•</span>
                <span>Acompanhamento criterioso de pacientes em uso de medicamentos que auxiliam no processo de emagrecimento.</span>
                <span className="text-brand-gold text-2xl">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who is it for Section */}
      <section className="py-32 bg-brand-dark border-b border-white/5">
        <div className="px-6 md:px-12 lg:px-20 xl:px-40">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-sans font-light text-3xl md:text-5xl uppercase tracking-[0.1em] md:tracking-[0.15em] text-brand-gold">Para quem é o acompanhamento?</h2>
              <div className="h-1 w-20 bg-brand-gold/30 mx-auto mt-6 rounded-full" />
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 text-lg font-light">
              {[
                "Quem quer emagrecer sem dietas extremistas",
                "Quem se sente constantemente inchada ou com distensão abdominal",
                "Quem faz uso de medicamentos como mounjaro",
                "Quem gostaria de perder peso com uma dieta dentro da sua realidade",
                "Quem tem o intestino preso ou solto demais",
                "Quem sofre de gases intestinais em excesso",
                "Quem tem doenças crônicas, como: doença de Crohn, retocolite ulcerativa, síndrome do intestino irritável, esteatose hepática, diabetes, hipertensão, doença renal crônica, etc.",
                "Quem deseja manter o peso perdido e evitar o efeito sanfona definitivamente."
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand-gold/20 transition-all"
                >
                  <div className="h-2 w-2 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="opacity-80 text-sm md:text-base leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de O Espaço Section */}
      <section id="espaco" className="py-32 bg-brand-dark">
        <div className="px-6 md:px-12 lg:px-20 xl:px-40">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-light text-3xl md:text-4xl mb-20 text-center uppercase tracking-[0.15em] md:tracking-[0.3em] text-brand-gold"
          >
            O Espaço
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
                { src: 'AISelect_20260511_140859_Chrome.jpg', alt: 'Espaço 1' },
                { src: 'AISelect_20260511_140843_Chrome.jpg', alt: 'Espaço 2' },
                { src: 'AISelect_20260511_140827_Chrome.jpg', alt: 'Espaço 3' },
                { src: 'AISelect_20260511_140811_Chrome.jpg', alt: 'Espaço 4' }
              ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-3xl h-[300px] border border-white/5"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover img-premium group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Transformations - MOVED LOWER */}
      <section id="resultados" className="py-32 bg-[#1a110a]">
        <div className="px-6 md:px-12 lg:px-20 xl:px-40">
          <div className="text-center mb-24">
            <h2 className="font-sans font-light text-3xl md:text-5xl uppercase tracking-[0.1em] md:tracking-[0.3em] text-brand-gold mb-4">Transformações Reais</h2>
            <p className="opacity-40 text-xs font-bold uppercase tracking-[0.3em]">Resultados alcançados com foco e acompanhamento nutricional especializado.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { src: 'IMG-20260514-WA0023.jpg', alt: 'Resultado 1' },
                { src: 'IMG-20260514-WA0022.jpg', alt: 'Resultado 2' },
                { src: 'IMG-20260514-WA0021.jpg', alt: 'Resultado 3' },
                { src: 'IMG-20260514-WA0020.jpg', alt: 'Resultado 4' }
              ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="rounded-[40px] overflow-hidden border-2 border-brand-gold/20 shadow-2xl transition-all duration-700 hover:border-brand-gold/60 aspect-[3/4]"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - STRATEGIC POSITION */}
      <section id="sobre" className="py-32 bg-brand-dark border-b border-white/5">
        <div className="px-6 md:px-12 lg:px-20 xl:px-40">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-brand-gold/20 rounded-3xl -z-10" />
              <div className="w-full rounded-2xl shadow-3xl overflow-hidden aspect-[3/4] md:aspect-square border border-white/10">
                <img 
                  src="Screenshot_20260514_170842_Gallery.jpg" 
                  alt="Dra. Natalia Lázaro" 
                  className="w-full h-full object-cover object-[center_15%]" 
                />
              </div>
            </motion.div>
            
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="font-sans font-light text-3xl md:text-5xl leading-tight text-brand-gold uppercase tracking-[0.1em] md:tracking-[0.3em]">Sobre mim: Dra. Natália Lázaro</h2>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6 text-base md:text-lg font-light text-brand-offwhite leading-relaxed opacity-90"
              >
                <p>
                  Nutricionista com mais de 15 anos de experiência em emagrecimento e nutrição clínica. Ao longo da minha trajetória profissional, já acompanhei mais de 4.000 pacientes no Brasil e no mundo, sempre com olhar individualizado, acolhedor e estratégico. Meu foco é ajudar no emagrecimento com leveza, sem extremismos, construindo uma relação saudável com a alimentação e com o próprio corpo. Quero te ensinar a comer bem, com consciência e equilíbrio, para que você não dependa de restrições para obter resultados. Aqui você aprende a fazer boas escolhas, manter a constância mesmo com a rotina corrida, sem depender de motivação, e entendendo seu corpo, pois só assim, poderá construir um resultado duradouro.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Plans Section */}
      <BookingPlans />

      {/* Dedicated Location Section */}
      <section id="localizacao" className="py-32 bg-brand-dark border-b border-white/5">
        <div className="px-6 md:px-12 lg:px-20 xl:px-40">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-light text-3xl md:text-5xl mb-24 text-center uppercase tracking-[0.1em] md:tracking-[0.3em] text-brand-gold"
          >
            Localização
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Map Side */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-12">
                {/* Tijuca */}
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Shopping+Tijuca"
                  target="_blank"
                  rel="noreferrer"
                  className="block group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold/10 p-3 rounded-full border border-brand-gold/20 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500">
                      <MapPin size={24} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl italic text-brand-gold">Shopping Tijuca</h3>
                      <p className="opacity-60 text-lg">
                        Shopping Tijuca, Torre 3<br/>
                        Rio de Janeiro - RJ
                      </p>
                      <div className="flex items-center gap-2 text-brand-gold/60 py-2">
                        <Check size={14} className="text-brand-gold" />
                        <span className="text-xs font-bold uppercase tracking-widest">Estacionamento no local</span>
                      </div>
                      <span className="inline-block text-[10px] font-black uppercase tracking-widest text-brand-gold/40 border-b border-brand-gold/10 group-hover:text-brand-gold transition-colors pt-2">Traçar Rota no Google Maps</span>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Visual Map Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video lg:aspect-square rounded-[40px] overflow-hidden border-2 border-brand-gold/20 group shadow-2xl"
            >
              <div className="absolute inset-0 z-20 pointer-events-none border-[12px] border-brand-dark/50 rounded-[38px]"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.7554!2d-43.2356!3d-22.9234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fad39f1c7d3%3A0x6d9f899981862557!2sShopping%20Tijuca!5e0!3m2!1spt-BR!2sbr!4v1715695000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 bg-brand-gold/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
                <button 
                  onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Shopping+Tijuca+Dra+Natalia+Lazaro', '_blank')}
                  className="bg-brand-dark/90 backdrop-blur-xl border border-brand-gold/30 px-8 py-4 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-2xl hover:bg-brand-gold hover:text-brand-dark"
                >
                   <span className="text-xs font-black uppercase tracking-widest">Abrir Mapa Completo</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-black pt-32 pb-16 border-t border-white/5">
        <div className="px-6 md:px-12 lg:px-20 xl:px-40">
          <div className="grid md:grid-cols-4 gap-20 items-start mb-32">
            <div className="md:col-span-2 space-y-12">
              <div className="h-20 w-20 bg-brand-gold/10 rounded-full flex items-center justify-center border border-brand-gold/20">
                <span className="text-brand-gold font-serif text-4xl">NL</span>
              </div>
              <p className="font-serif text-3xl italic opacity-40 leading-snug">Referência em emagrecimento clínico e nutrição estratégica.</p>
              <div className="flex gap-8 text-xs font-black uppercase tracking-[0.3em]">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-brand-gold hover:text-brand-copper transition-colors flex items-center gap-2">
                  WhatsApp
                </a>
                <a href="https://www.instagram.com/dra.natalialazaro" target="_blank" rel="noreferrer" className="text-brand-gold hover:text-brand-copper transition-colors flex items-center gap-2">
                  Instagram
                </a>
              </div>
            </div>
            
            <div className="space-y-8">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Inovação</p>
              <p className="opacity-40 text-xs leading-relaxed uppercase font-bold tracking-widest italic">A ciência do emagrecimento aplicada à sua realidade.</p>
              <div className="pt-4 space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Atendimento</p>
                <p className="opacity-40 text-xs font-bold uppercase tracking-widest leading-relaxed">
                  Shopping Tijuca, Torre 3<br/>
                  Rio de Janeiro - RJ
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-20 text-[9px] uppercase tracking-[0.4em] font-black">
            <p>&copy; {new Date().getFullYear()} Dra. Natália Lázaro. Todos os direitos reservados.</p>
            <div className="flex gap-12">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#25D366] rounded-full shadow-2xl transition-transform hover:scale-110 relative group"
        >
          {/* Pulse Effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></span>
          <i className="fab fa-whatsapp text-white text-3xl md:text-5xl relative z-10"></i>
        </a>
      </div>
    </div>
  );
}
