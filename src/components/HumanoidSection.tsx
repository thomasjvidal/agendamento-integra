import React from "react";

const HumanoidSection = () => {
  return (
    <section className="w-full py-8 bg-white" id="about">
      <div className="section-container opacity-0 animate-on-scroll">
        {/* Header padronizado - mesmo alinhamento para todas as seções */}
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
            <span>Sobre</span>
          </div>
        </div>
        
        {/* Título padronizado - tamanho maior e consistente */}
        <h2 className="text-6xl font-display font-bold mb-10 text-left">Sobre Dra. Deyse de Oliveira</h2>
        
        {/* Conteúdo com fontes maiores e padronizadas */}
        <div className="max-w-4xl">
          <p className="text-2xl text-gray-700 leading-relaxed mb-8">
            Dra. Deyse de Oliveira é cirurgiã atuante na **Clínica Íntegra**, localizada em Leopoldina – MG. Reconhecida pelo cuidado humanizado, oferece procedimentos de cirurgia geral, estética e tratamento de lipedema.
          </p>
          
          <p className="text-2xl text-gray-700 leading-relaxed mb-10">
            Valorizando a saúde e o bem-estar, a Dra. Deyse une técnica e empatia para proporcionar resultados seguros e naturais, prezando pela confiança e satisfação de cada paciente.
          </p>
          
          <div className="inline-flex items-center px-8 py-4 bg-gray-100 rounded-full text-lg text-gray-600 font-medium">
            <span>Clínica Íntegra • Leopoldina – MG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanoidSection;
