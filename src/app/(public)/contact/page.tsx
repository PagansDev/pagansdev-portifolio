"use client"
import { useState } from "react";
import HeaderText from "@/components/ui/HeaderText";
import GlassCard from "@/components/ui/GlassCard";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  MessageCircleMore,
  SendHorizonal,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = `De: ${name}\n\n Mensagem: ${message}`;
    return `https://wa.me/5515997294704?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex min-h-screen w-full flex-col py-32 px-4 sm:px-16">
        <div className="flex flex-col  gap-6 mb-12">
          <HeaderText
            title="Quer entrar em contato comigo?"
            subtitle='Estou disponível para contratação, freelance, projeto ou até mesmo para um simples "Olá!"'
          />
        </div>

        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4 w-75">
            <GlassCard className="p-4 flex flex-col items-center gap-4 hover:bg-zinc-50/20 transition-colors">
              <Mail className="w-12 h-12 text-[--var(--primary)]" />
              <h3 className="text-xl font-bold">Email</h3>
              <Link
                href="mailto:paulogabrielneves@hotmail.com"
                className="text-sm sm:text-base hover:underline break-all"
              >
                paulogabrielneves@hotmail.com
              </Link>
            </GlassCard>
            <GlassCard className="p-4 flex flex-col items-center gap-4 hover:bg-zinc-50/20 transition-colors">
              <Linkedin className="w-12 h-12 text-[--var(--primary)]" />
              <h3 className="text-xl font-bold">LinkedIn</h3>
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
              <h3 className="text-xl font-bold">GitHub</h3>
              <Link
                href="https://github.com/PagansDev"
                target="_blank"
                className="text-sm sm:text-base hover:underline text-center"
              >
                github.com/PagansDev
              </Link>
            </GlassCard>
            <GlassCard className="p-4 flex flex-row items-center gap-2 hover:bg-zinc-50/20 transition-colors">
              <MapPin className="w-8 h-8 text-[--var(--primary)]" />
              <h3 className="text-sm font-bold">Localização: </h3>
              <p>Sorocaba-SP</p>
            </GlassCard>
          </div>
          <div className="flex flex-1">
            <GlassCard className="p-8 flex flex-col w-full h-full gap-4 hover:bg-zinc-50/20 transition-colors">
              <div className="flex flex-row items-center gap-2">
                <MessageCircleMore className="w-8 h-8 text-[--var(--primary)]" />
                <h3 className="text-xl font-bold">
                  Envie uma mensagem via WhatsApp!
                </h3>
              </div>
              <label htmlFor="name" className="text-sm font-bold">
                Nome
              </label>
              <input
                type="text"
                id="name"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="message" className="text-sm font-bold">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Mensagem"
                onChange={(e) => setMessage(e.target.value)}
                cols={30}
                rows={10}
              ></textarea>
              <Link
              href={handleSend()}
              target="_blank"
              className="bg-teal-500/50 py-2 px-4 rounded-md hover:bg-teal-600/50 transition-colors flex flex-row items-center gap-2 self-end mt-auto">
                <span className="text-xl font-bold">Enviar</span>
                <SendHorizonal className="w-6 h-6" />
              </Link>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
