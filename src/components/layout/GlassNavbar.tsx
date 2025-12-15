"use client"
import Link from "next/link"
import { ThemeToggle } from "../ui/ThemeToggle"
import TextType from "../TextType"
import { Download } from "lucide-react"
import ElectricBorder from "../ElectricBorder"
    export default function GlassNavbar() {
    return (
        
        <div className="fixed w-full top-5 z-50 flex items-center justify-center gap-8">
                <nav className="flex flex-row items-center justify-between px-6 py-2 backdrop-blur-md bg-zinc-50/10 border-[0.12rem] border-[--var(--border)]  rounded-[12rem] min-w-4xl z-50 ">
                    <div className="min-w-[120px]">
                        <TextType
                            text={["PagansDev"]}
                            typingSpeed={100}
                            pauseDuration={15000}
                            showCursor={true}
                            deletingSpeed = {10}
                            cursorCharacter="|"
                            className="text-xl font-bold"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-md font-semibold text-[--var(--primary-foreground)] hover:scale-110 transition-transform">
                            Home
                        </Link>
                        <Link href="/about" className="text-md font-semibold text-[--var(--primary-foreground)] hover:scale-110 transition-transform">
                            Sobre mim
                        </Link>
                        <Link href="/projects" className="text-md font-semibold text-[--var(--primary-foreground)] hover:scale-110 transition-transform">
                            Projetos
                        </Link>
                        <Link href="/contact" className="text-md font-semibold text-[--var(--primary-foreground)] hover:scale-110 transition-transform">
                            Contato
                        </Link>
                    </div>
                    <ElectricBorder
                     color="#FF9FFC"
                        speed={1}
                        chaos={0.3}
                        thickness={3}
                        style={{ borderRadius: 16 }}>
                    <button className="py-2 px-4 rounded-xl flex flex-row items-center gap-2 transition-colors hover:bg-zinc-200/20 cursor-pointer">
                        <Download />
                        <span>Download CV</span>
                    </button>
                    </ElectricBorder>
                </nav>
                <ThemeToggle />
        </div>
    )
}