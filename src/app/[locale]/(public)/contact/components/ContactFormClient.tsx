"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import GlassCard from "@/components/ui/GlassCard";
import { MessageCircleMore, SendHorizonal } from "lucide-react";
import Link from "next/link";

export default function ContactFormClient() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const t = useTranslations("contact");

  const handleSend = () => {
    const text = `De: ${name}\n\n Mensagem: ${message}`;
    return `https://wa.me/5515997294704?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex flex-1 w-full">
      <GlassCard className="p-8 flex flex-col w-full h-full gap-4 hover:bg-zinc-50/20 transition-colors">
        <div className="flex flex-row items-center gap-2">
          <MessageCircleMore className="w-8 h-8 text-[--var(--primary)]" />
          <h3 className="text-xl font-bold">{t("whatsappTitle")}</h3>
        </div>
        <label htmlFor="name" className="text-sm font-bold">
          {t("name")}
        </label>
        <input
          type="text"
          id="name"
          placeholder={t("namePlaceholder")}
          className="p-3 rounded-lg bg-zinc-100/5 dark:bg-zinc-900/20 border border-zinc-200/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="message" className="text-sm font-bold">
          {t("message")}
        </label>
        <textarea
          name="message"
          id="message"
          placeholder={t("messagePlaceholder")}
          className="p-3 rounded-lg bg-zinc-100/5 dark:bg-zinc-900/20 border border-zinc-200/20 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
          onChange={(e) => setMessage(e.target.value)}
          cols={30}
          rows={10}
        ></textarea>
        <Link
          href={handleSend()}
          target="_blank"
          className="bg-teal-500/50 py-2 px-4 rounded-md hover:bg-teal-600/50 transition-colors flex flex-row items-center gap-2 self-end mt-auto"
        >
          <span className="text-xl font-bold">{t("send")}</span>
          <SendHorizonal className="w-6 h-6" />
        </Link>
      </GlassCard>
    </div>
  );
}
