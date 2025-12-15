"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { CrosshairDark, CrosshairLight } from "@/components/icons/CrosshairIcons";

export default function CustomCursor() {
  const { resolvedTheme } = useTheme();

  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      if (cursorRef.current) {

        const x = e.clientX - 32;
        const y = e.clientY - 32;
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer");
      setIsPointer(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", checkPointer);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", checkPointer);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mounted, isVisible]);

  if (!mounted) return null;


  const isDark = resolvedTheme === "dark";

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-9999 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ willChange: "transform" }}
    >
      
      <div 
        className={`w-16 h-16 flex items-center justify-center transition-all duration-300 ${
          isPointer ? "animate-[spin_3s_linear_infinite] scale-110" : ""
        }`}
      >
        {isDark ? (
          <CrosshairDark className={`w-full h-full ${isPointer ? "animate-pulse" : ""}`} />
        ) : (
          <CrosshairLight className={`w-full h-full ${isPointer ? "animate-pulse" : ""}`} />
        )}
      </div>
    </div>
  );
}
