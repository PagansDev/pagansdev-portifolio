import { getTranslations } from "next-intl/server";
import { ChevronsDownIcon, Code, Database, Terminal } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import TimelineItemClient from "./TimelineItemClient";

interface Skill {
  name: string;
  level: string;
}

export default async function HomeSkillsSection() {
  const t = await getTranslations("home");

  const frontendSkills: Skill[] = [
    { name: "React / Next", level: t("skills.advanced") },
    { name: "Vue3 / Nuxt", level: t("skills.advanced") },
    { name: "JavaScript / TypeScript", level: t("skills.advanced") },
    { name: "Tailwind CSS", level: t("skills.advanced") },
    { name: "Styled Components", level: t("skills.advanced") },
    { name: "SSR / SEO", level: t("skills.intermediate") },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js / Express.js", level: t("skills.advanced") },
    { name: "NestJS", level: t("skills.advanced") },
    {
      name: "MySQL, PostgreSQL, SQL Server, MongoDB",
      level: t("skills.advanced"),
    },
    { name: "Rest API", level: t("skills.advanced") },
    { name: "Websocket / Socket.io", level: t("skills.advanced") },
    { name: "C#/ .Net", level: t("skills.intermediate") },
    { name: "Delphi", level: t("skills.intermediate") },
  ];

  const toolsSkills: Skill[] = [
    { name: "Git / Github", level: t("skills.advanced") },
    { name: "Docker", level: t("skills.intermediate") },
    { name: "Azure / AWS", level: t("skills.basic") },
    { name: "Redis", level: t("skills.intermediate") },
    { name: "BullMQ", level: t("skills.intermediate") },
    { name: "Linux / Bash / WSL", level: t("skills.intermediate") },
    { name: "VPS's / Nginx", level: t("skills.basic") },
  ];

  return (
    <section className="space-y-12 w-full h-[800px] relative">
      <div className="flex items-center gap-4 border-b border-zinc-800 pb-4 justify-between">
        <h2 className="text-2xl font-bold tracking-wider text-zinc-900 dark:text-zinc-100">
          {t("skillsTitle").toUpperCase()}
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
              <h3 className="text-2xl">{t("skills.frontend")}</h3>
            </div>

            <div className="space-y-4">
              {frontendSkills.map((skill) => (
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
              <h3 className="text-2xl">{t("skills.backend")}</h3>
            </div>

            <div className="space-y-4">
              {backendSkills.map((skill) => (
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
              <h3 className="text-2xl">{t("skills.tools")}</h3>
            </div>

            <div className="space-y-4">
              {toolsSkills.map((skill) => (
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
                {t("myJourney").toUpperCase()}
              </h2>
            </div>

            <div className="relative space-y-8 pl-0">
              <TimelineItemClient
                year={t("timeline.freelancer.period")}
                title={t("timeline.freelancer.title")}
                description={t("timeline.freelancer.description")}
                icon={<Code className="w-5 h-5" />}
                color="bg-blue-100 text-blue-600 border-blue-500/30"
                connector
              />
              <TimelineItemClient
                year={t("timeline.cbm.period")}
                title={t("timeline.cbm.title")}
                description={t("timeline.cbm.description")}
                icon={<Code className="w-5 h-5" />}
                color="bg-purple-100 text-purple-600 border-purple-500/30"
              />
            </div>
          </section>
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
}
