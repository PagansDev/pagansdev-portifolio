import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import GlassNavbar from "@/components/layout/GlassNavbar";
import LiquidBackground from "@/components/LiquidBackground";
import { PerformanceProvider } from "@/components/PerformanceProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import AnimatedContent from "@/components/AnimatedContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PagansDev - Portfolio",
  description: "Desenvolvimento, projetos e ideias. Conheça meu trabalho.",
  openGraph: {
    title: "PagansDev - Portfolio",
    description: "Desenvolvimento, projetos e ideias. Conheça meu trabalho.",
    url: "https://www.pagansdev.site",
    siteName: "PagansDev",
    images: [
      {
        url: "https://www.pagansdev.site/api/og",
        width: 1366,
        height: 768,
        alt: "PagansDev Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PagansDev - Portfolio",
    description: "Desenvolvimento, projetos e ideias. Conheça meu trabalho.",
    images: ["https://www.pagansdev.site/api/og"],
    site: "https://www.pagansdev.site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent!`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PerformanceProvider>
            <div className="fixed inset-0 -z-20 bg-background pointer-events-none transition-colors duration-300" />
            <CustomCursor />
            <GlassNavbar />
            <LiquidBackground />
            <main className="relative min-h-screen sm:max-w-full md:max-w-[73%] mx-auto">
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                recalculateOnPathChange={true}
              >
                {children}
              </AnimatedContent>
            </main>
          </PerformanceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
