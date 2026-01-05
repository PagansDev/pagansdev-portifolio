"use client";

import React, { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import HeaderText from "@/components/ui/HeaderText";
import Badge from "@/components/ui/Badge";
import Carousel from "@/components/Carousel";
import ImageViewer from "@/components/ui/ImageViewer";
import { ExternalLink, Github, Lock } from "lucide-react";

const projectsData = [
  {
    images: ["/private.png"],
    title: "Projeto Privado",
    subtitle: "@ Privado - Sistema SaaS completo de automação financeira",
    description:
      "O projeto é uma ferramenta de automação para realização de operações no mercado financeiro. Integrado com APIs externas de corretoras/plataformas. Trabalhei como desenvolvedor fullstack freelance fazendo manutenção e desenvolvimento de novas features, além de otimização de arquitetura e integrações complexas de APIs. Também atuei na escala do serviço para comportar +1000 usuários ativos e separação de serviços para melhor performance. O cliente não permite divulgação explicita.",
    tags: [
      "React",
      "JavaScript / TypeScript",
      "Node.js",
      "MySQL e MongoDB",
      "HTTP e Websocket",
      "Docker",
    ],
    repoUrl: "",
    deployUrl: "",
    borderColor: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6, #1e3a8a)",
  },
  {
    images: ["/livechat-3.jpg"],
    title: "Livechat",
    subtitle:
      "@ Autônomo - Chat em tempo real para atendimento ao cliente com IA para suporte N1.",
    description:
      "O PagansDev - Livechat é um backend completo, desenvolvido por mim, em NodeJS e MongoDB para chat em tempo real via websocket, pondendo ser integrado em qualquer frontend. O sistema trabalha com documentos markdown para adição modular de prompts e um sistema de IA (via OpenRouter) que auxilia o suporte N1, além de automatizar abertura de chamados(Tickets), fazer moderação dos chats e enviar notificações para o suporte. Além disso, usando o Support Context o frontend pode enviar informações do usuário como configurações e histórico para auxiliar o suporte. A autenticação é feita usando o Secret do backend e validando o token enviado pelo Front-end no handshake do websocket. O sistema conta com Notas Internas, Atribuição de chamados, Grupos Internos, e anexo de imagem (via MongoDB) entre outros.",
    tags: [
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Docker",
      "OpenRouter",
      "Socket.io",
    ],
    repoUrl: "https://github.com/PagansDev/PagansDev-Livechat",
    deployUrl: "",
    borderColor: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #064e3b)",
  },
  {
    images: ["/impact-1.png", "/impact-2.png"],
    title: "Sistema Impact",
    subtitle:
      "@ CBM informática - Sistema completo para gerenciamento de clinica médica.",
    description:
      "Durante meu estágio fui o desenvolvedor encarregado do sistema para o cliente Impact - Transformation center. O projeto é composto por: Uma API de autenticação, uma API principal, um Front-end administrativo e um Front-end com PWA para os clientes da clinica. Desenvolvi a implementação de diversos requisitos e integrações entre os serviços, como: Agendamento e calendário de consultas e treinos; Gerenciamento e sincronização de planos alimentares e planos de treino entre clinica e cliente; Registro de histórico de paciente, incluindo anamneses, imagens, preescrições, financeiro e gerenciamento dos medicos sobre os documentos dos pacientes; Agenda dinâmica para recepção e controle de horários e agendas dos médicos; Registro de bloqueios e encaixes de horários, entre outros requisitos.",
    tags: [
      "Vue3",
      "TypeScript",
      "C# / .NET",
      "Generics",
      "repository Pattern",
      "PWA",
      "MySQL",
      "Docker",
      "Portainer",
    ],
    repoUrl: "",
    deployUrl: "",
    borderColor: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #4c1d95)",
  },
  {
    images: [
      "/rsvp-1.png",
      "/rsvp-2.png",
      "/rsvp-3.png",
      "/rsvp-4.png",
      "/rsvp-5.png",
      "/rsvp-6.png",
      "/rsvp-7.png",
      "/rsvp-8.png",
      "/rsvp-9.png",
    ],
    title: "Convite de casamento",
    subtitle: "@ Autônomo - Convite digital para meu casamento.",
    description:
      "Aplicação web para convite digital de casamento com sistema de confirmação de presença, lista de convidados, lista de presentes, pagina de contribuição e painel administrativo com login Google + lista de emails permitidos.O sistena disponibiliza localização da cerimônia e da celebração por meio do Google Maps e links de pagamento por meio do mercado pago. ",
    tags: [
      "Nuxt3",
      "TypeScript",
      "Supabase",
      "Supabase Auth",
      "Styled Components",
    ],
    repoUrl: "https://github.com/PagansDev/rsvp-wedding",
    deployUrl: "https://pauloeisa.site",
    borderColor: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #78350f)",
  },
  {
    images: [
      "/tabela-1.png",
      "/tabela-2.png",
      "/tabela-3.png",
      "/tabela-4.png",
    ],
    title: "Tabela Fiscal",
    subtitle:
      "@ Autônomo - Aplicação web para consulta de tabelas fiscais como NCM e CFOP.",
    description:
      "Aplicação web para consulta de tabelas fiscais como NCM e CFOP. A proposta do projeto nasceu de uma necessidade de consultar recorrentemente códigos de NCM para suporte no meu estágio. O sistema conta com um sistema de cache com IndexedDB para evitar requisições desnecessárias armazenamento dos capitulos dos códigos NCM. Também possui um sistema de busca para encontrar códigos de NCM de forma normalizada.",
    tags: ["Nuxt3", "Nuxt/UI", "TypeScript", "IndexedDB", "Supabase"],
    repoUrl: "https://github.com/PagansDev/ncm",
    deployUrl: "https://tabelafiscal.site",
    borderColor: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899, #831843)",
  },
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-4 md:px-16 container mx-auto space-y-12">
      {/* Intro Section */}
      <section className="text-center md:text-left mt-12 mb-20">
        <HeaderText
          title="Meus Projetos"
          subtitle="Acompanhe um pouco do meu trabalho."
        />
      </section>

      {/* Grid Section */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {projectsData.map((item, index) => (
          <GlassCard
            key={index}
            className="flex flex-col h-full overflow-hidden group hover:-translate-y-2 transition-transform duration-300 p-0"
            style={{ width: "100%" }}
          >
            {/* Image Area - Carousel */}
            <div className="relative p-0 overflow-hidden h-[300px] w-full">
              <Carousel
                items={item.images.map((img, i) => ({
                  id: i,
                  image: img,
                  title: "",
                  subtitle: "",
                }))}
                baseWidth={600}
                height="300px"
                autoplay={true}
                loop={true}
                pauseOnHover={true}
                onImageClick={(img) => setSelectedImage(img)}
              />
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 p-6">
              <div className="flex justify-between items-start gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {item.description && (
                <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              )}

              <div className="mt-auto space-y-4">
                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        text={tag}
                        bgColor="bg-blue-100 dark:bg-blue-500/10"
                        textColor="text-blue-700 dark:text-blue-200"
                        borderColor="border-blue-200 dark:border-blue-500/20"
                      />
                    ))}
                  </div>
                )}

                <div className="flex gap-2 pt-4 border-t border-zinc-200 dark:border-white/5">
                  {/* Repo Button */}
                  {item.repoUrl ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(item.repoUrl);
                      }}
                      className="flex-1 py-2.5 bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-all"
                    >
                      <Github size={16} /> Repositório
                    </button>
                  ) : (
                    <div className="flex-1 py-2.5 bg-zinc-50 dark:bg-black/20 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-zinc-400 dark:text-zinc-500 cursor-not-allowed border border-zinc-100 dark:border-white/5">
                      <Lock size={16} /> Privado
                    </div>
                  )}

                  {/* Deploy Button */}
                  {item.deployUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(item.deployUrl);
                      }}
                      className="flex-1 py-2.5 bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 border border-primary/20 dark:border-primary/30 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-primary dark:text-white transition-all shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]"
                    >
                      <ExternalLink size={16} /> Projeto
                    </button>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </section>

      {/* Image Viewer */}
      <ImageViewer
        isOpen={!!selectedImage}
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
