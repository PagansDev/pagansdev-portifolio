"use client";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";
import PerformanceToggle from "../ui/PerformanceToggle";
import TextType from "../TextType";
import { Download, Menu, X } from "lucide-react";
import ElectricBorder from "../ElectricBorder";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function GlassNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Sobre" },
    { href: "/projects", label: "Projetos" },
    { href: "/contact", label: "Contato" },
  ];

  return (
    <>
      <div
        className={`fixed w-full z-50 flex items-center justify-center transition-all duration-300 ${
          isMenuOpen ? "top-0" : "top-0 md:top-5"
        }`}
      >
        <nav
          className={`flex flex-col md:flex-row items-center justify-between backdrop-blur-md bg-zinc-900/5 dark:bg-zinc-50/10 border-b md:border-[0.12rem] border-zinc-200 dark:border-white/10 md:rounded-[12rem] transition-all duration-300 z-50 ${
            isMenuOpen
              ? "w-full rounded-none h-screen md:h-auto bg-zinc-900/95 dark:bg-zinc-950/95"
              : "w-full md:w-auto md:min-w-7xl px-6 py-2"
          }`}
        >
          <div className="w-full md:w-auto flex items-center justify-between px-4 py-3 md:p-0">
            <button
              className="md:hidden p-2 text-zinc-900 dark:text-zinc-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:block min-w-[120px]">
              <TextType
                text={["PagansDev"]}
                typingSpeed={100}
                pauseDuration={15000}
                showCursor={true}
                deletingSpeed={10}
                cursorCharacter="|"
                className="text-xl font-bold font-mono"
              />
            </div>

            <div className="md:hidden">
              <ElectricBorder
                color="#FF9FFC"
                speed={1}
                chaos={0.3}
                thickness={2}
                style={{ borderRadius: 8 }}
              >
                <a
                  href="/CV Paulo Gabriel Neves Santos - 05-01-2026.pdf"
                  download="CV_Paulo_Gabriel_Neves_Santos.pdf"
                  className="py-1.5 px-3 text-sm rounded-lg flex flex-row items-center gap-2 transition-colors hover:bg-zinc-200/20 cursor-pointer"
                >
                  <Download size={16} />
                  <span className="font-semibold text-xs whitespace-nowrap">
                    DOWNLOAD CV
                  </span>
                </a>
              </ElectricBorder>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-900 dark:text-zinc-100 backdrop-blur-sm shadow-sm"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <ElectricBorder
              color="#FF9FFC"
              speed={1}
              chaos={0.3}
              thickness={3}
              style={{ borderRadius: 16 }}
            >
              <a
                href="/CV Paulo Gabriel Neves Santos - 05-01-2026.pdf"
                download="CV_Paulo_Gabriel_Neves_Santos.pdf"
                className="py-2 px-4 rounded-xl flex flex-row items-center gap-2 transition-colors hover:bg-zinc-200/20 cursor-pointer"
              >
                <Download />
                <span>Download CV</span>
              </a>
            </ElectricBorder>
          </div>

          {isMenuOpen && (
            <div className="md:hidden w-full flex flex-col items-center justify-center gap-8 py-10 h-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-bold transition-all duration-300 flex items-center gap-3 ${
                      isActive
                        ? "text-zinc-900 dark:text-zinc-50 scale-105"
                        : "text-zinc-500 dark:text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                    }`}
                  >
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>
          )}
        </nav>
      </div>

      {!isMenuOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
          <ThemeToggle />
          <PerformanceToggle />
        </div>
      )}
    </>
  );
}
