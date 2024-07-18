"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {amount: 0.5, once: true });

  return (
    <motion.section
      ref={ref}
      className="h-screen px-12 flex flex-col items-center"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-kanit text-5xl mb-12">Sobre</h1>
      <Accordion type="single" collapsible className="w-full max-w-[1200px]">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">Nome</AccordionTrigger>
          <AccordionContent className="text-lg">
            Meu nome é Mateus Ceci de Souza.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">Idade</AccordionTrigger>
          <AccordionContent className="text-lg">
            Tenho 27 anos de idade.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl">
            Descrição Pessoal
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Sou um desenvolvedor frontend, apaixonado por tecnologia e esportes,
            pronto para novos desafios.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl">
            Objetivos de carreira
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Me tornar um desenvolvedor fullstack e trabalhar em projetos
            desafiadores para aprimorar minhas habilidades.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl">
            Hobbies
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Gosto de praticar esportes, principalmente crossfit. Também gosto de jogos online competitivos, como Valorant e Counter Strike.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.section>
  );
};

export default About;
