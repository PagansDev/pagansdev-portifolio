import { getTranslations } from "next-intl/server";
import GlassCard from "@/components/ui/GlassCard";
import { FolderCodeIcon, Mail } from "lucide-react";

export default async function HomeHeroSection() {
  const t = await getTranslations();

  return (
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
                {t("home.fullstackDeveloper")}
              </p>
              <p className="text-xs font-medium text-green-800 dark:text-green-300 animate-pulse bg-lime-400/20 border border-green-800 dark:border-green-300 rounded-3xl w-24 mx-auto">
                <span className="bg-green-800 dark:bg-green-300 h-2 w-2 rounded-full inline-block mr-2"></span>
                {t("common.available")}
              </p>
            </div>
          </div>

          <div className="w-px self-stretch bg-linear-to-b from-transparent via-zinc-700 to-transparent hidden md:block mx-8" />

          <div className="text-center md:text-left space-y-4 min-w-[30%] ml-auto">
            <div>
              <h1 className="text-3xl font-bold tracking-[0.2em] uppercase mb-2">
                {t("home.aboutMeTitle")}
              </h1>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              {t("home.aboutMeParagraph1")}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              {t("home.aboutMeParagraph2")}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <a
                href="/projects"
                className="px-6 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2"
              >
                <FolderCodeIcon className="w-4 h-4" /> {t("common.seeProjects")}
              </a>
              <a
                href="/contact"
                className="px-6 py-2.5 bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-full font-medium hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> {t("common.contact")}
              </a>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
