import { getTranslations } from "next-intl/server";
import { FileText, Layers, Search, BookmarkCheck } from "lucide-react";

const steps = [
  { key: "agentReads" as const, Icon: FileText, color: "cyan" },
  { key: "indexBuilds" as const, Icon: Layers, color: "blue" },
  { key: "searchRetrieval" as const, Icon: Search, color: "violet" },
  { key: "memoryPersists" as const, Icon: BookmarkCheck, color: "pink" }
];

const colorClasses: Record<string, { border: string; icon: string }> = {
  cyan: {
    border: "border-cyan-500/50 bg-cyan-500/10 dark:bg-cyan-500/20",
    icon: "text-cyan-400"
  },
  blue: {
    border: "border-blue-500/50 bg-blue-500/10 dark:bg-blue-500/20",
    icon: "text-blue-400"
  },
  violet: {
    border: "border-violet-500/50 bg-violet-500/10 dark:bg-violet-500/20",
    icon: "text-violet-400"
  },
  pink: {
    border: "border-pink-500/50 bg-pink-500/10 dark:bg-pink-500/20",
    icon: "text-pink-400"
  }
};

export default async function LexomniToolsFlowchart() {
  const t = await getTranslations("lexomni.flowchart");

  return (
    <div className="flex flex-col items-center justify-center min-h-full w-full">
      <div className="flex flex-col items-center">
        {steps.map(({ key, Icon, color }, i) => (
          <div key={key} className="contents">
            {i > 0 && (
              <div
                className="h-3 w-px bg-zinc-400/60 dark:bg-zinc-500/60 shrink-0"
                aria-hidden
              />
            )}
            <div
              className={`flex items-center gap-2 overflow-hidden rounded-xl border-2 px-3 py-2 shadow-sm ${colorClasses[color].border}`}
            >
              <Icon size={20} className={`shrink-0 ${colorClasses[color].icon}`} />
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 whitespace-nowrap">
                {t(key)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
