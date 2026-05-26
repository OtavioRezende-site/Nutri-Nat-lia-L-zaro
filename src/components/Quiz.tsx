import { useState } from 'react';
import { CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const quizData = [
  {
    q: "Com que frequência você costuma evacuar?",
    o: ["1 vez por dia ou mais", "2 a 3 vezes por semana", "Menos de 1 vez por semana"]
  },
  {
    q: "Você sente inchaço ou desconforto abdominal frequente?",
    o: ["Raramente ou nunca", "Às vezes, após as refeições", "Sim, quase sempre"]
  },
  {
    q: "Como está seu nível de energia durante o dia?",
    o: ["Tenho boa disposição", "Oscila muito durante o dia", "Sinto cansaço constante"]
  },
  {
    q: "Você tem dificuldade para perder peso, mesmo fazendo dieta?",
    o: ["Consigo manter com esforço", "Sinto que o metabolismo é lento", "Sim, muita dificuldade"]
  }
];

export default function Quiz() {
  const [step, setStep] = useState<'intro' | 'questions' | 'result'>('intro');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ q: string; a: string; i: number }[]>([]);

  const handleAnswer = (answer: string, index: number) => {
    const newAnswers = [...answers, { q: quizData[currentStep].q, a: answer, i: index }];
    setAnswers(newAnswers);
    
    if (currentStep < quizData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setStep('result');
    }
  };

  const getResult = () => {
    const sumIndices = answers.reduce((acc, curr) => acc + curr.i, 0);
    if (sumIndices >= 6) {
      return {
        text: "Sua saúde intestinal parece estar sob forte estresse inflamatório, afetando diretamente sua vitalidade diária.",
        recommendation: "Agende uma análise clínica prioritária para mapearmos os gatilhos da sua inflamação."
      };
    } else if (sumIndices >= 3) {
      return {
        text: "Seu corpo está enviando sinais claros de desequilíbrio que podem ser revertidos com as estratégias nutricionais corretas.",
        recommendation: "Inicie o Protocolo RestauraBio para devolver o equilíbrio à sua microbiota e metabolismo."
      };
    } else {
      return {
        text: "Você já possui uma base de bem-estar, mas ainda existem pontos de otimização para alcançar sua melhor versão física.",
        recommendation: "Vamos ajustar os detalhes da sua nutrição para potencializar seus resultados atuais."
      };
    }
  };

  const sendToWhatsApp = () => {
    let message = "Olá Dra. Natalia! Acabei de realizar o quiz no seu site e gostaria de agendar uma consulta. Meus resultados:\n\n";
    answers.forEach((res, i) => {
      message += `*${i+1}. ${res.q}*\nResp: ${res.a}\n\n`;
    });
    message += "Gostaria de saber como iniciar meu Protocolo RestauraBio.";
    window.open(`https://wa.me/5521985100334?text=${encodeURIComponent(message)}`, '_blank');
  };

  const result = step === 'result' ? getResult() : null;

  return (
    <section id="quiz" className="py-24 bg-[#1a110a] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] border border-brand-gold/20 p-8 md:p-12 rounded-[40px] shadow-2xl backdrop-blur-sm"
        >
          <AnimatePresence mode="wait">
            {step === 'intro' && (
              <motion.div 
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6"
              >
                <div className="inline-block px-4 py-1.5 bg-brand-gold/10 rounded-full text-brand-gold text-[10px] font-black uppercase tracking-widest">Autoavaliação Rápida</div>
                <h2 className="font-sans font-light text-2xl md:text-4xl uppercase tracking-[0.15em] md:tracking-[0.3em]">Como está sua <span className="text-brand-gold">Saúde Intestinal?</span></h2>
                <p className="opacity-60 font-light text-lg">Responda 4 perguntas rápidas e descubra o melhor caminho para o seu corpo.</p>
                <button 
                  onClick={() => setStep('questions')} 
                  className="bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm cta-hover gold-glow flex items-center gap-2 mx-auto"
                >
                  Começar Quiz <ChevronRight size={18} />
                </button>
              </motion.div>
            )}

            {step === 'questions' && (
              <motion.div 
                key="questions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">Pergunta {currentStep + 1} de 4</span>
                  <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / 4) * 100}%` }}
                      className="h-full bg-brand-gold" 
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="font-sans font-light text-xl md:text-2xl uppercase tracking-[0.1em]">{quizData[currentStep].q}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {quizData[currentStep].o.map((option, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleAnswer(option, idx)} 
                        className="w-full text-left px-8 py-5 rounded-2xl border border-white/10 hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all text-sm uppercase tracking-widest font-bold bg-white/5"
                      >
                        {String.fromCharCode(65 + idx)}) {option}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 'result' && result && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8"
              >
                <div className="h-20 w-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto text-brand-gold mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="font-sans font-light text-2xl md:text-4xl uppercase tracking-[0.3em]">Análise Concluída!</h2>
                <p className="opacity-70 text-lg leading-relaxed">{result.text}</p>
                <div className="p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-3xl space-y-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-gold italic">Ação Recomendada:</p>
                  <p className="text-sm italic font-light">{result.recommendation}</p>
                </div>
                <button 
                  onClick={sendToWhatsApp} 
                  className="w-full bg-brand-gold text-brand-dark py-5 rounded-full font-black uppercase tracking-widest text-xs gold-glow cta-hover flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Enviar resultado para a Dra. Natalia Lázaro
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
