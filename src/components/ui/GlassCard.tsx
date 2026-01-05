import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GlassCard({
  children,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-xl grayscale-25 drop-shadow-xl bg-zinc-900/5 dark:bg-zinc-50/10 border-[0.12rem] border-zinc-200 dark:border-white/10 rounded-[1rem]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
