"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Motivation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const content = document.getElementById("motivation");
      if (content) {
        const rect = content.getBoundingClientRect();
        if (rect.top < window.innerHeight / 1.5) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col items-center p-4" id="motivation">
      {isVisible && (
        <>
          <motion.h1
            className="font-kanit text-5xl mb-24 text-red-primary"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Motivação
          </motion.h1>
          <div className="flex flex-col text-center max-w-4xl">
            <motion.p
              className="text-xl mb-4 leading-9"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Minha motivação principal para ingressar na Código Certo é a
              oportunidade de voltar a trabalhar em equipe. Acredito firmemente
              que a melhor forma de evoluir no campo da programação é enfrentar
              problemas reais, colaborar com outras pessoas e sair
              constantemente da zona de conforto. Durante dois meses, tive a
              valiosa experiência de atuar como freelancer para uma empresa
              americana, período que considero um dos mais enriquecedores da
              minha carreira.
            </motion.p>
            <motion.p
              className="text-xl leading-9"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Estou determinado a ampliar meus conhecimentos e contribuir
              ativamente em qualquer tipo de projeto. Meu objetivo é não apenas
              aprender mais, mas também agregar valor significativo à equipe e
              aos projetos da Código Certo.
            </motion.p>
          </div>
        </>
      )}
    </div>
  );
};

export default Motivation;
