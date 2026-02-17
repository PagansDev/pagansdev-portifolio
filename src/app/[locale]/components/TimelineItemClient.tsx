"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import GlassCard from "@/components/ui/GlassCard";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  connector?: boolean;
}

export default function TimelineItemClient({
  year,
  title,
  description,
  icon,
  color,
  connector = false,
}: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations();

  return (
    <div className="relative sm:flex gap-12 items-start group">
      <div className="hidden sm:block w-24 pt-4 text-right"></div>

      {connector && (
        <div className="absolute left-0 sm:left-34 top-6.5 h-[calc(100%+2rem)] w-0.5 bg-zinc-800 -translate-x-1/2 z-0 hidden sm:block"></div>
      )}

      <div
        className={`absolute left-0 sm:left-34 -translate-x-1/2 mt-1.5 w-10 h-10 rounded-full border backdrop-blur-sm hidden sm:flex items-center justify-center z-10 ${color}`}
      >
        {icon}
      </div>

      <GlassCard
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex-1 p-4 sm:p-6 relative ml-0 sm:ml-0 hover:bg-zinc-800/10 transition-colors cursor-pointer sm:cursor-default"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-zinc-950">{title}</h3>
          <span className="text-xs font-mono py-1 px-2 rounded bg-zinc-800/50 text-zinc-950 w-fit">
            {year}
          </span>
        </div>

        <div
          className={`relative ${
            !isExpanded
              ? "max-h-[120px] overflow-hidden mask-[linear-gradient(to_bottom,black_60%,transparent)] sm:max-h-none sm:overflow-visible sm:mask-none"
              : ""
          }`}
        >
          <p className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>

        <span className="mt-3 text-xs font-bold text-zinc-700 hover:text-zinc-900 sm:hidden uppercase tracking-wider transition-colors block">
          {isExpanded ? t("home.seeLess") : t("home.seeMore")}
        </span>
      </GlassCard>
    </div>
  );
}
