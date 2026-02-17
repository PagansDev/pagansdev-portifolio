import { getTranslations } from "next-intl/server";
import HeaderText from "@/components/ui/HeaderText";
import ProjectsPageClient from "./components/ProjectsPageClient";
import type { Project } from "./components/types";

export default async function ProjectsPage() {
  const t = await getTranslations();

  const projects: Project[] = [
    {
      images: ["/lexomni-1.jpg", "/lexomni-2.jpg"],
      title: t("projects.items.lexomni.title"),
      subtitle: t("projects.items.lexomni.subtitle"),
      description: t("projects.items.lexomni.description"),
      tags: [
        "TypeScript",
        "Node.js",
        "MCP",
        "SQLite FTS5",
        "Markdown",
        "PDF",
      ],
      repoUrl: "https://github.com/PagansDev/lexomni-mcp",
      deployUrl: "https://www.npmjs.com/package/lexomni-mcp",
      borderColor: "#0ea5e9",
      gradient: "linear-gradient(135deg, #0ea5e9, #0369a1)",
      showInstallButton: true,
    },
    {
      images: ["/private.png"],
      title: t("projects.items.privateProject.title"),
      subtitle: t("projects.items.privateProject.subtitle"),
      description: t("projects.items.privateProject.description"),
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
      title: t("projects.items.livechat.title"),
      subtitle: t("projects.items.livechat.subtitle"),
      description: t("projects.items.livechat.description"),
      tags: [
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Docker",
        "OpenRouter",
        "Socket.io",
      ],
      repoUrl: "https://github.com/PagansDev/TriggerDesk-AI",
      deployUrl: "",
      borderColor: "#10b981",
      gradient: "linear-gradient(135deg, #10b981, #064e3b)",
    },
    {
      images: ["/impact-1.png", "/impact-2.png"],
      title: t("projects.items.impact.title"),
      subtitle: t("projects.items.impact.subtitle"),
      description: t("projects.items.impact.description"),
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
      title: t("projects.items.rsvp.title"),
      subtitle: t("projects.items.rsvp.subtitle"),
      description: t("projects.items.rsvp.description"),
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
      title: t("projects.items.tabela.title"),
      subtitle: t("projects.items.tabela.subtitle"),
      description: t("projects.items.tabela.description"),
      tags: ["Nuxt3", "Nuxt/UI", "TypeScript", "IndexedDB", "Supabase"],
      repoUrl: "https://github.com/PagansDev/ncm",
      deployUrl: "https://tabelafiscal.site",
      borderColor: "#ec4899",
      gradient: "linear-gradient(135deg, #ec4899, #831843)",
    },
  ];

  const labels = {
    repository: t("projects.repository"),
    private: t("projects.private"),
    project: t("projects.project"),
    installInCursor: t("projects.installInCursor"),
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-4 md:px-16 container mx-auto space-y-12">
      <section className="text-center md:text-left mt-12 mb-20">
        <HeaderText
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />
      </section>

      <ProjectsPageClient projects={projects} labels={labels} />
    </div>
  );
}
