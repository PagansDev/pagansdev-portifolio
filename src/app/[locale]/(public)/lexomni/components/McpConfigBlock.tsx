interface McpConfigBlockProps {
  config: string;
}

export default function McpConfigBlock({ config }: McpConfigBlockProps) {
  return (
    <div className="relative">
      <div className="bg-zinc-900 dark:bg-zinc-950 rounded-lg p-4 border border-zinc-700 dark:border-zinc-800 overflow-hidden">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-700 dark:border-zinc-800">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-zinc-400 ml-2 font-mono">mcp.json</span>
        </div>
        <pre className="text-xs font-mono text-cyan-400 overflow-x-auto">
          <code>{config}</code>
        </pre>
      </div>
    </div>
  );
}
