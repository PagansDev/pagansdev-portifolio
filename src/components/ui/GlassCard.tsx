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
        "backdrop-blur-xl grayscale-25 drop-shadow-xl bg-zinc-50/10 border-[0.12rem] border-[--var(--border)] rounded-[1rem]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
