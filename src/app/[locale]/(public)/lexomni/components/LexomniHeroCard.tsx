"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import ElectricBorder from "@/components/ElectricBorder";
import LexomniHighlight from "./LexomniHighlight";
import McpConfigBlock from "./McpConfigBlock";
import { Check, Copy, CheckCircle2 } from "lucide-react";

const TAGS = ["TypeScript", "Node.js", "MCP", "SQLite FTS5", "Markdown", "PDF"];

interface LexomniHeroCardProps {
  installUrl: string;
  antigravityInstallUrl: string;
  mcpJsonConfig: string;
  copied: boolean;
  onCopyConfig: () => void;
}

export default function LexomniHeroCard({
  installUrl,
  antigravityInstallUrl,
  mcpJsonConfig,
  copied,
  onCopyConfig
}: LexomniHeroCardProps) {
  const t = useTranslations("lexomni");
  const [activeTab, setActiveTab] = useState<"cursor" | "antigravity">("cursor");

  return (
    <GlassCard className="p-8 md:p-10 hover:bg-zinc-50/20 transition-colors overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white mb-4">
              <LexomniHighlight>{t("title")}</LexomniHighlight>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <LexomniHighlight>{t("description")}</LexomniHighlight>
          </p>

          <div className="flex w-full gap-4 items-center">
            <button
              onClick={() => setActiveTab("cursor")}
              className={`flex-1 flex justify-center items-center p-2 rounded-xl transition-all duration-300 border-2 ${
                activeTab === "cursor"
                  ? "border-blue-500 bg-blue-500/10 scale-105"
                  : "border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              <div className="relative w-36 h-10">
                <Image
                  src="/cursor-light.png"
                  alt="Cursor Light"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/cursor-dark.png"
                  alt="Cursor Dark"
                  fill
                  className="object-contain hidden dark:block"
                />
              </div>
            </button>
            <button
              onClick={() => setActiveTab("antigravity")}
              className={`flex-1 flex justify-center items-center p-2 rounded-xl transition-all duration-300 border-2 ${
                activeTab === "antigravity"
                  ? "border-purple-500 bg-purple-500/10 scale-105"
                  : "border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              <div className="relative w-36 h-10">
                <Image
                  src="/antigravity-light.png"
                  alt="Antigravity Light"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/antigravity-dark.png"
                  alt="Antigravity Dark"
                  fill
                  className="object-contain hidden dark:block"
                />
              </div>
            </button>
          </div>

          <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent font-mono tracking-tight">
            {t("tagline")}
          </p>

          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag, i) => (
              <Badge
                key={i}
                text={tag}
                bgColor="bg-blue-100 dark:bg-blue-500/10"
                textColor="text-blue-700 dark:text-blue-200"
                borderColor="border-blue-200 dark:border-blue-500/20"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <ElectricBorder
            color={activeTab === "cursor" ? "#0ea5e9" : "#a855f7"}
            speed={1}
            chaos={0.3}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            {activeTab === "cursor" ? (
              <a
                href={installUrl}
                className="w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-colors hover:bg-cyan-500/10 cursor-pointer bg-gradient-to-r from-cyan-500/5 to-blue-500/5"
              >
                <Image
                  src="/cursor-logo.png"
                  alt="Cursor"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="text-lg font-bold text-zinc-900 dark:text-white">
                  {t("installButton")}
                </span>
              </a>
            ) : (
              <a
                href={antigravityInstallUrl}
                aria-disabled="true"
                className="w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-colors bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-50 grayscale cursor-not-allowed pointer-events-none relative overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 dark:bg-white/5 backdrop-blur-[1px] z-10">
                   <span className="px-2 py-1 text-xs font-bold text-white bg-zinc-800 rounded shadow-sm border border-zinc-700">
                     {t("underDevelopment")}
                   </span>
                </div>
                <Image
                  src="/antigravity-logo.png"
                  alt="Antigravity"
                  width={24}
                  height={24}
                  className="object-contain opacity-50"
                />
                <span className="text-lg font-bold text-zinc-900 dark:text-white opacity-50">
                  One-Click Antigravity Install
                </span>
              </a>
            )}
          </ElectricBorder>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="shrink-0 text-purple-500" />
              {activeTab === "cursor"
                ? t("compatibility.cursor")
                : t("compatibility.antigravity")}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="shrink-0 text-purple-500" />
              {t("compatibility.local")}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="shrink-0 text-purple-500" />
              {t("compatibility.noCloud")}
            </span>
          </div>

          <McpConfigBlock config={mcpJsonConfig} />

          <button
            onClick={onCopyConfig}
            className="w-full py-3 px-4 rounded-lg bg-zinc-100/50 dark:bg-zinc-800/50 hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50 border border-zinc-200 dark:border-zinc-700 transition-colors flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check size={18} className="text-green-500" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  {t("copySuccess")}
                </span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span className="text-sm font-medium">{t("copyConfig")}</span>
              </>
            )}
          </button>

          <p className="text-xs text-center text-zinc-500 dark:text-zinc-400">
            {t("cursorRequired")}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
