import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    q: "Como funciona a consulta?",
    a: "A consulta é estruturada em três etapas, para garantir um atendimento completo, individualizado e eficiente: 1. Anamnese: Iniciamos com uma conversa detalhada sobre sua saúde, rotina, hábitos alimentares e objetivos. Essas informações são essenciais para direcionar a conduta de forma precisa e personalizada. 2. Avaliação corporal: Realizo a avaliação de bioimpedância e antropometria, permitindo analisar sua composição corporal, como percentual de gordura e massa muscular, auxiliando na definição das melhores estratégias nutricionais. 3. Plano alimentar personalizado: Ao final da consulta, entrego todas as orientações necessárias, prescrições e elaboro um plano alimentar funcional, equilibrado e adaptado à sua rotina e preferências, fácil de seguir no dia a dia."
  },
  {
    q: "O que é avaliação de bioimpedância?",
    a: "É uma avaliação realizada em uma balança específica, que irá mensurar seu percentual de gordura corporal e de massa muscular."
  },
  {
    q: "A avaliação de bioimpedância está inclusa no valor da consulta?",
    a: "Sim, bioimpedância e avaliação antropométrica fazem parte de todas as consultas."
  },
  {
    q: "Qual a frequência de atendimento?",
    a: "A frequência varia de acordo com o objetivo e necessidades individuais do paciente, podendo ser sugerido mensal, bimestral, trimestral, semestral ou pontual."
  },
  {
    q: "Aceita plano de saúde?",
    a: "Não atendemos por planos de saúde porque priorizamos um acompanhamento verdadeiramente individualizado, com foco em qualidade, estratégia e resultados duradouros. Cada paciente além da avaliação completa, prescrição e plano alimentar, também recebe suporte contínuo para dúvidas e um acompanhamento próximo durante todo o tratamento. Esse modelo nos permite oferecer uma experiência mais cuidadosa, humanizada e eficiente do que o formato tradicional dos atendimentos por convênio."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-40 bg-[#1a110a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans font-light text-3xl md:text-5xl mb-24 text-center uppercase tracking-[0.1em] md:tracking-[0.3em] text-brand-gold"
        >
          Dúvidas Frequentes
        </motion.h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/5 rounded-3xl bg-white/[0.02] overflow-hidden"
            >
              <button 
                className="w-full px-8 md:px-10 py-8 flex items-center justify-between text-left focus:outline-none transition-all hover:bg-white/[0.03]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-sm font-bold uppercase tracking-widest text-neutral-300 italic">{faq.q}</span>
                <ChevronDown className={`text-brand-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} size={24} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 md:px-10 pb-10 opacity-50 text-sm leading-relaxed font-light">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
