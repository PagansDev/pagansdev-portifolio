import { getTranslations } from "next-intl/server";
import GlassCard from "@/components/ui/GlassCard";

const FEATURE_KEYS = ["workspace", "search", "security", "multilingual"] as const;

export default async function LexomniFeatures() {
  const t = await getTranslations("lexomni.features");

  return (
    <GlassCard className="p-8 hover:bg-zinc-50/20 transition-colors">
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
        {t("title")}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FEATURE_KEYS.map((key) => (
          <div key={key} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              {t(key)}
            </p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
