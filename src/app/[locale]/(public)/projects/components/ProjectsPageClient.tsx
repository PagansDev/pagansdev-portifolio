"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Carousel from "@/components/Carousel";
import ImageViewer from "@/components/ui/ImageViewer";
import { ExternalLink, Github, Lock, Workflow } from "lucide-react";
import type { Project, ProjectLabels } from "./types";

interface ProjectsPageClientProps {
  projects: Project[];
  labels: ProjectLabels;
}

export default function ProjectsPageClient({
  projects,
  labels,
}: ProjectsPageClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {projects.map((item, index) => (
          <GlassCard
            key={index}
            className="flex flex-col h-full overflow-hidden group hover:-translate-y-2 transition-transform duration-300 p-0"
            style={{ width: "100%" }}
          >
            <div className="relative p-0 overflow-hidden h-[300px] w-full">
              <Carousel
                items={item.images.map((img, i) => ({
                  id: i,
                  image: img,
                  title: "",
                  subtitle: "",
                }))}
                baseWidth={600}
                height="300px"
                autoplay={true}
                loop={true}
                pauseOnHover={true}
                onImageClick={(img) => setSelectedImage(img)}
              />
            </div>

            <div className="flex flex-col flex-1 p-6">
              <div className="flex justify-between items-start gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {item.description && (
                <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              )}

              <div className="mt-auto space-y-4">
                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        text={tag}
                        bgColor="bg-blue-100 dark:bg-blue-500/10"
                        textColor="text-blue-700 dark:text-blue-200"
                        borderColor="border-blue-200 dark:border-blue-500/20"
                      />
                    ))}
                  </div>
                )}

                <div className="flex gap-2 pt-4 border-t border-zinc-200 dark:border-white/5">
                  {item.repoUrl ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(item.repoUrl);
                      }}
                      className="flex-1 py-2.5 bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-all"
                    >
                      <Github size={16} /> {labels.repository}
                    </button>
                  ) : (
                    <div className="flex-1 py-2.5 bg-zinc-50 dark:bg-black/20 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-zinc-400 dark:text-zinc-500 cursor-not-allowed border border-zinc-100 dark:border-white/5">
                      <Lock size={16} /> {labels.private}
                    </div>
                  )}

                  {item.deployUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(item.deployUrl);
                      }}
                      className="flex-1 py-2.5 bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 border border-primary/20 dark:border-primary/30 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-primary dark:text-white transition-all shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]"
                    >
                      <ExternalLink size={16} /> {labels.project}
                    </button>
                  )}

                  {item.showInstallButton && (
                    <Link
                      href="/lexomni"
                      className="flex-1 py-2.5 bg-cyan-500/10 dark:bg-cyan-500/20 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/30 border border-cyan-500/20 dark:border-cyan-500/30 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 transition-all"
                    >
                      <Workflow size={16} /> {labels.installInCursor}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </section>

      <ImageViewer
        isOpen={!!selectedImage}
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
