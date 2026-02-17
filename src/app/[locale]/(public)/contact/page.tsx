import { getTranslations } from "next-intl/server";
import HeaderText from "@/components/ui/HeaderText";
import GlassCard from "@/components/ui/GlassCard";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import Link from "next/link";
import ContactFormClient from "./components/ContactFormClient";

export default async function Contact() {
  const t = await getTranslations("contact");

  return (
    <div className="flex min-h-screen">
      <div className="flex min-h-screen w-full flex-col py-32 px-4 sm:px-16">
        <div className="flex flex-col gap-6 mb-12">
          <HeaderText title={t("title")} subtitle={t("subtitle")} />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full md:w-80 shrink-0">
            <GlassCard className="p-4 flex flex-col items-center gap-4 hover:bg-zinc-50/20 transition-colors">
              <Mail className="w-12 h-12 text-[--var(--primary)]" />
              <h3 className="text-xl font-bold">{t("email")}</h3>
              <Link
                href="mailto:paulogabrielneves@hotmail.com"
                className="text-sm sm:text-base hover:underline break-all"
              >
                paulogabrielneves@hotmail.com
              </Link>
            </GlassCard>
            <GlassCard className="p-4 flex flex-col items-center gap-4 hover:bg-zinc-50/20 transition-colors">
              <Linkedin className="w-12 h-12 text-[--var(--primary)]" />
              <h3 className="text-xl font-bold">{t("linkedin")}</h3>
              <Link
                href="https://www.linkedin.com/in/pagansdev/"
                target="_blank"
                className="text-sm sm:text-base hover:underline text-center"
              >
                linkedin.com/in/pagansdev
              </Link>
            </GlassCard>
            <GlassCard className="p-4 flex flex-col items-center gap-4 hover:bg-zinc-50/20 transition-colors">
              <Github className="w-12 h-12 text-[--var(--primary)]" />
              <h3 className="text-xl font-bold">{t("github")}</h3>
              <Link
                href="https://github.com/PagansDev"
                target="_blank"
                className="text-sm sm:text-base hover:underline text-center"
              >
                github.com/PagansDev
              </Link>
            </GlassCard>
            <GlassCard className="p-4 flex flex-row items-center justify-center gap-2 hover:bg-zinc-50/20 transition-colors">
              <MapPin className="w-8 h-8 text-[--var(--primary)]" />
              <h3 className="text-sm font-bold">{t("location")}: </h3>
              <p>{t("locationCity")}</p>
            </GlassCard>
          </div>
          <ContactFormClient />
        </div>
      </div>
    </div>
  );
}
