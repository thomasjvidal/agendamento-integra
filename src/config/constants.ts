// Configurações do sistema de agendamento
export const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/XXXXX/XXXXX"; // Substitua pela URL real do Zapier/Make

// URL do Google Apps Script Web App para Google Calendar
export const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzG4YsJ3aXNAPWvTQ6j6jRr17fzlEWZZpxYZb6mtQXUoNv1L0Syk-suZwYrEoHgXoAQ1Q/exec";

// Alias para compatibilidade (mesmo valor)
export const GOOGLE_CALENDAR_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzG4YsJ3aXNAPWvTQ6j6jRr17fzlEWZZpxYZb6mtQXUoNv1L0Syk-suZwYrEoHgXoAQ1Q/exec";

// Configuração de desenvolvimento
export const DEV_MODE = import.meta.env.DEV || false;

// Configurações do EmailJS (para envio de e-mails)
export const EMAILJS_CONFIG = {
  serviceId: "service_lkf3m5r",           // Service ID do EmailJS
  templateId: "template_ihcpx91",         // NotificaçãoCliente
  templateIdDoctor: "template_1bupdgm",   // NotificaçãoThábata
  publicKey: "V07ljinFEn_6UMKUA",         // Public Key (atenção: o 'l' é minúsculo!)
  enabled: true
};

// Configuração de contato (Dra. Deyse – Clínica Íntegra)
export const CONTACT_INFO = {
  email: "dra.deyse@clinicaintegra.com",
  instagram: "@dradeisedias",
  pixKey: "dra.deyse@clinicaintegra.com", // Chave Pix (placeholder)
  whatsapp: "5532999999999" // Placeholder – ajuste conforme necessário
};

// Valores dos serviços
export const SERVICE_PRICES = {
  'pacote-diamante': 2000.00,
  'pacote-ouro': 1500.00,
  'master-vip': 3000.00,
  'beauty-expert': 1200.00,
  'vip-individual': 800.00,
  'maquiagem': 250.00,
  'penteado-solto': 180.00,
  'penteado-preso': 200.00,
  'baby-liss': 100.00
};

// Valores dos atendimentos básicos
export const CONSULTATION_PRICES = {
  primeira: 250,
  retorno: 200
};

// Informações da profissional
export const PROFESSIONAL_INFO = {
  name: "Dra. Deyse de Oliveira",
  fullName: "Dra. Deyse de Oliveira – Clínica Íntegra",
  specialty: "Cirurgia Geral e Estética",
  specialties: [
    "Consulta pré-operatória",
    "Cirurgia geral e estética – agendamento via anestesista",
    "Avaliação e tratamentos relacionados a lipedema"
  ],
  mainSpecialty: "Cirurgiã Geral",
  location: "Leopoldina – MG",
  bio: "Dra. Deyse de Oliveira é cirurgiã atuante na Clínica Íntegra, Leopoldina – MG, oferecendo atendimento humano e especializado em cirurgia geral, procedimentos estéticos e tratamento de lipedema.",
  experience: "Cirurgiã experiente",
  formation: "Clínica Íntegra"
};

// Horários disponíveis
export const AVAILABLE_TIMES = [
  "08:00",
  "09:00", 
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00"
];

// Paleta de cores premium
export const COLORS = {
  primary: {
    gold: "#DAA520",        // Dourada ouro
    darkGold: "#B8860B",    // Ouro escuro
    lightGold: "#F4E4BC",   // Ouro claro
  },
  secondary: {
    wine: "#722F37",        // Vinho escuro
    darkWine: "#5D252A",    // Vinho mais escuro
    lightWine: "#8B4A52",   // Vinho claro
  },
  neutral: {
    black: "#1A1A1A",       // Preto
    white: "#FEFEFE",       // Branco gelo
    lightGray: "#F8F8F8",   // Cinza muito claro
    mediumGray: "#E5E5E5",  // Cinza médio
  }
}; 