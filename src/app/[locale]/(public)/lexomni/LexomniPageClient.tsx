"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { LexomniHeroCard } from "./components";

interface LexomniPageClientProps {
  installUrl: string;
  antigravityInstallUrl: string;
  mcpJsonConfig: string;
  children: React.ReactNode;
}

export default function LexomniPageClient({
  installUrl,
  antigravityInstallUrl,
  mcpJsonConfig,
  children
}: LexomniPageClientProps) {
  const t = useTranslations();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "Lexomni-MCP | PagansDev";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("lexomni.metaDescription"));
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        t("lexomni.metaOgDescription")
      );
    }
  }, [t]);

  const handleCopyConfig = async () => {
    try {
      await navigator.clipboard.writeText(mcpJsonConfig);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-4 md:px-16 container mx-auto space-y-12">
      <section className="mt-12 mb-12">
        <LexomniHeroCard
          installUrl={installUrl}
          antigravityInstallUrl={antigravityInstallUrl}
          mcpJsonConfig={mcpJsonConfig}
          copied={copied}
          onCopyConfig={handleCopyConfig}
        />
      </section>

      {children}
    </div>
  );
}
