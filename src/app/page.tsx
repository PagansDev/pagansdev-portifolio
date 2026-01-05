"use client";
import { useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import {
  Mail,
  Link as LinkIcon,
  Briefcase,
  GraduationCap,
  Code,
  PenTool,
  Database,
  Terminal,
  Layers,
  Github,
  Linkedin,
  ChevronsDownIcon,
  FolderCodeIcon,
} from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

export default function Home() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-4 md:px-16 container mx-auto space-y-24">
      <section>
        <GlassCard className="p-8 md:p-12 mt-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-purple-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-4 shrink-0">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-zinc-700/50 overflow-hidden relative z-10">
                  <img
                    src="/profile-pic.png"
                    alt="Profile"
                    className="w-full h-full object-cover hover:blur-sm transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 scale-110 animate-pulse blur-sm" />
                <div className="absolute inset-0 rounded-full border-4 border-purple-500/20 hover:scale-125 animate-pulse blur-sm" />
              </div>

              <div className="text-center space-y-1 pt-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                  Paulo Gabriel Neves Santos
                </h3>
                <p className="text-lg font-medium text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">
                  Fullstack Developer
                </p>
                <p className="text-xs font-medium text-green-800 dark:text-green-300 animate-pulse bg-lime-400/20 border border-green-800 dark:border-green-300 rounded-3xl w-24 mx-auto">
                  <span className="bg-green-800 dark:bg-green-300 h-2 w-2 rounded-full inline-block mr-2"></span>
                  Disponível
                </p>
              </div>
            </div>

            <div className="w-px self-stretch bg-linear-to-b from-transparent via-zinc-700 to-transparent hidden md:block mx-8" />

            <div className="text-center md:text-left space-y-4 min-w-[30%] ml-auto">
              <div>
                <h1 className="text-3xl font-bold tracking-[0.2em] uppercase mb-2">
                  Sobre mim
                </h1>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                Sou desenvolvedor Fullstack com forte atuação em Front-end,
                Back-end e arquitetura de aplicações. Desenvolvo APIs, sistemas
                completos e integrações complexas usando NodeJS / NestJS, C# /
                .NET, React / NextJS, Vue3 / Nuxt e sempre com foco em
                escalabilidade, segurança e clareza de código.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                Tenho experiência com bancos de dados relacionais, MongoDB,
                autenticação, containers Docker. Gosto de participar desde a
                concepção da solução até a entrega final, propondo melhorias
                técnicas e de processo.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <a
                  href="/projects"
                  className="px-6 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <FolderCodeIcon className="w-4 h-4" /> Ver Projetos
                </a>
                <a
                  href="/contact"
                  className="px-6 py-2.5 bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-full font-medium hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Contato
                </a>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="space-y-12 w-full h-[800px] relative">
        <div className="flex items-center gap-4 border-b border-zinc-800 pb-4 justify-between">
          <h2 className="text-2xl font-bold tracking-wider text-zinc-900 dark:text-zinc-100">
            HABILIDADES TÉCNICAS
          </h2>
          <ChevronsDownIcon className="w-6 h-6 animate-bounce" />
        </div>

        <ScrollStack
          itemDistance={200}
          stackPosition="5px"
          className="w-full overflow-hidden! sm:px-0!"
        >
          <ScrollStackItem itemClassName="h-auto bg-zinc-50/10 backdrop-blur-md border border-zinc-700/50">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-blue-500 font-medium">
                <Code className="w-8 h-8" />
                <h3 className="text-2xl">Front-end</h3>
              </div>

              <div className="space-y-4">
                {[
                  { name: "React / Next", level: "Avançado" },
                  { name: "Vue3 / Nuxt", level: "Avançado" },
                  { name: "JavaScript / TypeScript", level: "Avançado" },
                  { name: "Tailwind CSS", level: "Avançado" },
                  { name: "Styled Components", level: "Avançado" },
                  { name: "SSR / SEO", level: "Intermediário" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-4 bg-zinc-200/20 dark:bg-zinc-900/30 border border-zinc-800/50 rounded-lg hover:border-zinc-700 transition-colors group"
                  >
                    <span className="text-lg font-medium transition-colors text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {skill.name}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/20 text-blue-600 dark:text-blue-400">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="h-auto bg-zinc-50/10 backdrop-blur-md border border-zinc-700/50">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-emerald-500 font-medium">
                <Database className="w-8 h-8" />
                <h3 className="text-2xl">Back-end</h3>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Node.js / Express.js", level: "Avançado" },
                  { name: "NestJS", level: "Avançado" },
                  {
                    name: "MySQL, PostgreSQL, SQL Server, MongoDB",
                    level: "Avançado",
                  },
                  { name: "Rest API", level: "Avançado" },
                  { name: "Websocket / Socket.io", level: "Avançado" },
                  { name: "C#/ .Net", level: "Intermédiário" },
                  { name: "Delphi", level: "Intermédiário" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-4 bg-zinc-50/20 dark:bg-zinc-900/30 border border-zinc-800/50 rounded-lg hover:border-zinc-700 transition-colors group"
                  >
                    <span className="text-lg font-medium transition-colors text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {skill.name}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="h-auto bg-zinc-50/10 backdrop-blur-md border border-zinc-700/50">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-purple-500 font-medium">
                <Terminal className="w-8 h-8" />
                <h3 className="text-2xl">Tools</h3>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Git / Github", level: "Avançado" },
                  { name: "Docker", level: "Intermédiário" },
                  { name: "Azure / AWS", level: "Básico" },
                  { name: "Redis", level: "Intermédiário" },
                  { name: "BullMQ", level: "Intermédiário" },
                  { name: "Linux / Bash / WSL", level: "Intermediário" },
                  { name: "VPS's / Nginx", level: "Básico" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-4 bg-zinc-200/20 dark:bg-zinc-950/50 border border-zinc-800/50 rounded-lg hover:border-zinc-700 transition-colors group"
                  >
                    <span className="text-lg font-medium transition-colors text-zinc-800 dark:text-zinc-200 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      {skill.name}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="h-auto bg-zinc-200/50 backdrop-blur-md border border-zinc-700/50">
            <section className="space-y-12">
              <div className="border-b border-zinc-800 pb-4">
                <h2 className="text-2xl font-bold tracking-wider text-zinc-950">
                  MINHA JORNADA
                </h2>
              </div>

              <div className="relative space-y-8 pl-0">
                <TimelineItem
                  year="jun/2025 - Presente"
                  title="Fullstack Developer - Freelancer @ Privado"
                  description={`Desenvolvimento e manutenção multi sistemas de automação financeira.
Atuando na refatoração do sistema, separação de serviços e otimização de recursos.
● Bot para automação de operações financeiras
● Refatoração para padrão mais moderno e manutenível
● Backend completo utilizando NodeJS + Sequelize, websocket e HTTP
● Serviço de notificações para telegram com Typescript e GrammY
● Implementação de Frontend moderno com React + Tailwindcss
● Integração complexa com APIs externas de corretoras, load balancer, diversos proxys, servidores e escala para +1000 usuários ativos, gerenciamento de VPS Hostinger
● Otimização de recursos com Redis, BullMQ e multithread com JS/TS
● Desenvolvimento de helper (Chat em tempo real) e sistema de chamados/tickets com integração de IA`}
                  icon={<Code className="w-5 h-5" />}
                  color="bg-blue-100 text-blue-600 border-blue-500/30"
                  connector
                />
                <TimelineItem
                  year="abr/2025 - nov/2025"
                  title="Fullstack Developer - Estagiário @ CBM informática"
                  description={`● Manutenção e suporte em sistemas ERP legado em Delphi
● Banco de dados MySQL, SGBDs, consultas e scripts de dados, PL/SQL
● Desenvolvimento Front-end com VueJS
● Desenvolvimento Back-end com C#, .NET e também PHP/Laravel
● Conteinerização com Docker e Portainer
● Soluções Azure como SQL e Blob Storage
● Atendimento AnyDesk, sistema de chamados, suporte N1, 2 e 3.
● Desenvolvedor principal em sistema fullstack customizado para clínica médica multidisciplinar`}
                  icon={<Code className="w-5 h-5" />}
                  color="bg-purple-100 text-purple-600 border-purple-500/30"
                />
              </div>
            </section>
          </ScrollStackItem>
        </ScrollStack>
      </section>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  description,
  icon,
  color,
  connector = false,
}: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative sm:flex gap-12 items-start group">
      <div className="hidden sm:block w-24 pt-4 text-right"></div>

      {connector && (
        <div className="absolute left-0 sm:left-34 top-6.5 h-[calc(100%+2rem)] w-0.5 bg-zinc-800 -translate-x-1/2 z-0 hidden sm:block"></div>
      )}

      <div
        className={`absolute left-0 sm:left-34 -translate-x-1/2 mt-1.5 w-10 h-10 rounded-full border backdrop-blur-sm hidden sm:flex items-center justify-center z-10 ${color}`}
      >
        {icon}
      </div>

      <GlassCard
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex-1 p-4 sm:p-6 relative ml-0 sm:ml-0 hover:bg-zinc-800/10 transition-colors cursor-pointer sm:cursor-default"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-zinc-950">{title}</h3>
          <span className="text-xs font-mono py-1 px-2 rounded bg-zinc-800/50 text-zinc-950 w-fit">
            {year}
          </span>
        </div>

        <div
          className={`relative ${
            !isExpanded
              ? "max-h-[120px] overflow-hidden mask-[linear-gradient(to_bottom,black_60%,transparent)] sm:max-h-none sm:overflow-visible sm:mask-none"
              : ""
          }`}
        >
          <p className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        <span className="mt-3 text-xs font-bold text-zinc-700 hover:text-zinc-900 sm:hidden uppercase tracking-wider transition-colors block">
          {isExpanded ? "Ver menos" : "Ver mais"}
        </span>
      </GlassCard>
    </div>
  );
}

function TechIcon({ label, icon }: any) {
  return (
    <div className="flex flex-col items-center gap-3 group cursor-pointer">
      <div className="w-14 h-14 rounded-full bg-zinc-800/40 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300 border border-zinc-700/50 group-hover:border-blue-500/30">
        {icon}
      </div>
      <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors">
        {label}
      </span>
    </div>
  );
}
