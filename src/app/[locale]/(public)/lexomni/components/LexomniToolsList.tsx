import { getTranslations } from "next-intl/server";

const TOOLS = [
  { id: "listSources", code: "lexomni_listSources" },
  { id: "buildIndex", code: "lexomni_buildIndex" },
  { id: "searchDocs", code: "lexomni_searchDocs" },
  { id: "readDoc", code: "lexomni_readDoc" },
  { id: "writeNote", code: "lexomni_writeNote" }
] as const;

export default async function LexomniToolsList() {
  const t = await getTranslations("lexomni.tools");

  return (
    <div className="space-y-3">
      {TOOLS.map(({ id, code }) => (
        <div key={id} className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0" />
          <div>
            <code className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
              {code}
            </code>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              {t(id)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
