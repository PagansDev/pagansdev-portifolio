import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import GlassNavbar from "@/components/layout/GlassNavbar";
import LiquidEther from "@/components/LiquidEther";
import CustomCursor from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PagansDev - Portfolio"
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
            <div className="fixed inset-0 -z-20 bg-background pointer-events-none transition-colors duration-300" />
            <CustomCursor />
            <GlassNavbar />
              <div className="fixed inset-0 -z-10 pointer-events-none">
                <LiquidEther
                  colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
                  mouseForce={20}
                  cursorSize={300}
                  isViscous={false}
                  viscous={30}
                  iterationsViscous={32}
                  iterationsPoisson={32}
                  resolution={0.4}
                  isBounce={false}
                  autoDemo={true}
                  autoSpeed={0.5}
                  autoIntensity={2.2}
                  takeoverDuration={0.25}
                  autoResumeDelay={3000}
                  autoRampDuration={0.6}
                />
              </div>
              <main className="relative min-h-screen max-w-[70%] mx-auto">
                {children}
              </main>
          </ThemeProvider>
      </body>
    </html>
  );
}
