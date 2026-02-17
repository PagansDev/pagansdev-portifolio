import { getTranslations } from "next-intl/server";
import GlassCard from "@/components/ui/GlassCard";
import LexomniToolsList from "./LexomniToolsList";
import LexomniToolsFlowchart from "./LexomniToolsFlowchart";

export default async function LexomniAvailableTools() {
  const t = await getTranslations("lexomni");

  return (
    <GlassCard className="p-8 hover:bg-zinc-50/20 transition-colors">
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
        {t("toolsIntro")}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <LexomniToolsList />
        <LexomniToolsFlowchart />
      </div>
    </GlassCard>
  );
}
