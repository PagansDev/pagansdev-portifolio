import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ThemeProvider } from "@/components/ThemeProvider";
import "../globals.css";
import GlassNavbar from "@/components/layout/GlassNavbar";
import LiquidBackground from "@/components/LiquidBackground";
import { PerformanceProvider } from "@/components/PerformanceProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import AnimatedContent from "@/components/AnimatedContent";
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
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
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ["https://www.pagansdev.site/api/og"],
      site: "https://www.pagansdev.site",
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent!`}
      >
        <NextIntlClientProvider messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
