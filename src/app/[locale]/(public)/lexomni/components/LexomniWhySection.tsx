import { getTranslations } from "next-intl/server";
import GlassCard from "@/components/ui/GlassCard";
import LexomniHighlight from "./LexomniHighlight";

export default async function LexomniWhySection() {
  const t = await getTranslations("lexomni");

  return (
    <GlassCard className="p-6 md:p-8 hover:bg-zinc-50/20 transition-colors">
      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
        <LexomniHighlight>{t("whyTitle")}</LexomniHighlight>
      </h3>
      <div className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-snug whitespace-pre-line text-left max-w-5xl mx-auto columns-1 md:columns-2 gap-x-8">
        <LexomniHighlight>{t("whyContent")}</LexomniHighlight>
      </div>
    </GlassCard>
  );
}
