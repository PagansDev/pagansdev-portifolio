import { getTranslations } from "next-intl/server";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import { Github, Package, Star } from "lucide-react";

export default async function LexomniRepoLinks() {
  const t = await getTranslations("lexomni");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <GlassCard className="p-6 hover:bg-zinc-50/20 transition-colors">
        <Link
          href="https://github.com/PagansDev/lexomni-mcp"
          target="_blank"
          className="flex flex-col items-center gap-4 group"
        >
          <Github className="w-12 h-12 text-zinc-900 dark:text-white group-hover:text-cyan-500 transition-colors" />
          <h3 className="text-xl font-bold text-center group-hover:text-cyan-500 transition-colors flex items-center justify-center gap-2">
            <Star size={20} className="shrink-0 text-amber-400" />
            {t("viewRepo")}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
            github.com/PagansDev/lexomni-mcp
          </p>
        </Link>
      </GlassCard>

      <GlassCard className="p-6 hover:bg-zinc-50/20 transition-colors">
        <Link
          href="https://www.npmjs.com/package/lexomni-mcp"
          target="_blank"
          className="flex flex-col items-center gap-4 group"
        >
          <Package className="w-12 h-12 text-zinc-900 dark:text-white group-hover:text-cyan-500 transition-colors" />
          <h3 className="text-xl font-bold text-center group-hover:text-cyan-500 transition-colors flex items-center justify-center gap-2">
            <Package size={20} className="shrink-0 text-amber-600 dark:text-amber-500" />
            {t("viewNpm")}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
            npmjs.com/package/lexomni-mcp
          </p>
        </Link>
      </GlassCard>
    </div>
  );
}
