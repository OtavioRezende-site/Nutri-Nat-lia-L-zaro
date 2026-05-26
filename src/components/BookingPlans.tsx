import { useState } from 'react';
import { Building, Video, MessageCircle, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface Plan {
  id: string;
  name: string;
  price: string;
}

const presencialPlans: Plan[] = [
  { id: 'avulsa', name: 'Consulta Avulsa', price: 'R$ 380,00' },
  { id: 'pacote3', name: 'Pacote 3 Consultas', price: 'R$ 990,00' },
  { id: 'pacote6', name: 'Pacote 6 Consultas', price: 'R$ 1.800,00' },
];

const onlinePlans: Plan[] = [
  { id: 'avulsa', name: 'Consulta Avulsa', price: 'R$ 300,00' },
  { id: 'pacote3', name: 'Pacote 3 Consultas', price: 'R$ 750,00' },
];

export default function BookingPlans() {
  const [selectedPresencial, setSelectedPresencial] = useState(presencialPlans[0]);
  const [selectedOnline, setSelectedOnline] = useState(onlinePlans[0]);

  const handleBooking = (type: 'presencial' | 'online') => {
    const plan = type === 'presencial' ? selectedPresencial : selectedOnline;
    const msg = `Olá Dra. Natalia! Vi seu site e gostaria de agendar um atendimento *${type.toUpperCase()}*.\n\n*Opção selecionada:* ${plan.name}\n*Valor:* ${plan.price}\n\nComo podemos prosseguir com o agendamento?`;
    window.open(`https://wa.me/5521985100334?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="consultas" className="py-32 bg-[#1f140e]">
      <div className="px-6 md:px-12 lg:px-20 xl:px-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-24"
        >
          <h2 className="font-sans font-light text-3xl md:text-5xl uppercase tracking-[0.1em] md:tracking-[0.3em]">Agendamentos</h2>
          <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full" />
          <p className="text-xl opacity-60 font-light italic max-w-2xl mx-auto">Selecione o plano ideal para iniciar sua transformação.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Card 1: Presencial */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] p-6 md:p-10 rounded-[40px] border border-white/5 hover:border-brand-gold/40 transition-all duration-500 group flex flex-col h-full"
          >
            <div className="h-16 w-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
              <Building size={32} />
            </div>
            <h3 className="font-sans font-light text-xl md:text-2xl uppercase tracking-[0.2em] mb-4">Atendimento Presencial</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-black mb-1 opacity-80">Selecione uma das opções abaixo:</p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-brand-offwhite opacity-40 mb-6 font-bold">Possibilidade de parcelamento.</p>
            
            <div className="space-y-4 mb-12 flex-grow">
              {presencialPlans.map((plan) => (
                <button 
                  key={plan.id}
                  onClick={() => setSelectedPresencial(plan)}
                  className={`w-full flex justify-between items-center p-5 rounded-2xl border transition-all text-left ${selectedPresencial.id === plan.id ? 'border-brand-gold bg-brand-gold/10 gold-glow' : 'border-white/10 hover:border-brand-gold/40 bg-white/5'}`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80">{plan.name}</span>
                  <span className="text-lg font-sans font-medium text-brand-gold">{plan.price}</span>
                </button>
              ))}
            </div>

            <button 
              onClick={() => handleBooking('presencial')}
              className="flex items-center justify-center gap-2 w-full py-5 px-4 rounded-full bg-brand-gold text-brand-dark text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-brand-copper hover:text-white transition-all shadow-xl gold-glow"
            >
              <MessageCircle size={18} />
              Agendar {selectedPresencial.name}
            </button>
          </motion.div>

          {/* Card 2: Online */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] p-6 md:p-10 rounded-[40px] border border-brand-gold/20 hover:border-brand-gold/60 transition-all duration-500 group flex flex-col h-full bg-brand-gold/[0.02]"
          >
            <div className="h-16 w-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
              <Video size={32} />
            </div>
            <h3 className="font-sans font-light text-xl md:text-2xl uppercase tracking-[0.2em] mb-4 text-brand-gold">Atendimento Online</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-black mb-1 opacity-80">Selecione uma das opções abaixo:</p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-brand-offwhite opacity-40 mb-6 font-bold">Possibilidade de parcelamento.</p>
            
            <div className="space-y-4 mb-12 flex-grow">
              {onlinePlans.map((plan) => (
                <button 
                  key={plan.id}
                  onClick={() => setSelectedOnline(plan)}
                  className={`w-full flex justify-between items-center p-5 rounded-2xl border transition-all text-left ${selectedOnline.id === plan.id ? 'border-brand-gold bg-brand-gold/10 gold-glow' : 'border-white/10 hover:border-brand-gold/40 bg-white/5'}`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80">{plan.name}</span>
                  <span className="text-lg font-sans font-medium text-brand-gold">{plan.price}</span>
                </button>
              ))}
            </div>

            <button 
              onClick={() => handleBooking('online')}
              className="flex items-center justify-center gap-2 w-full py-5 px-4 rounded-full bg-brand-gold text-brand-dark text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-brand-copper hover:text-white transition-all shadow-xl gold-glow"
            >
              <MessageCircle size={18} />
              Agendar {selectedOnline.name}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
