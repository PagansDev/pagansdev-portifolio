const LEXOMNI_HIGHLIGHT_REGEX = /(Lexomni\s*MCP|Lexomni)/gi;

const highlightVariants = {
  gradientCyan: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold",
  gradientPurple: "bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 bg-clip-text text-transparent font-semibold",
  solidCyan: "text-cyan-400 font-semibold",
  solidPurple: "text-purple-400 font-semibold"
};

type Variant = keyof typeof highlightVariants;

interface LexomniHighlightProps {
  children: string;
  variant?: Variant;
  className?: string;
}

export default function LexomniHighlight({
  children,
  variant = "gradientCyan",
  className = ""
}: LexomniHighlightProps) {
  const parts = children.split(LEXOMNI_HIGHLIGHT_REGEX);
  const style = highlightVariants[variant];
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={`${style} ${className}`}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
