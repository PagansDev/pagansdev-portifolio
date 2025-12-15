"use client"

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

interface FluidSimulationConfig {
  cursorSize: number;                
  resolution: number;
  BFECC: boolean;
  mouseForce: number;
  isBounce: boolean;
  autoDemo: boolean;
  autoSpeed: number;
  autoIntensity: number;
  takeoverDuration: number;
  autoResumeDelay: number;
  autoRampDuration: number;
  isViscous: boolean;
  viscous: number;
  iterationsViscous: number;
  iterationsPoisson: number;
  interactive: boolean;
}

interface PerformanceContextType {
  performanceMode: string;
  togglePerformanceMode: () => void;
  fluidProps: FluidSimulationConfig;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
    const [performanceMode, setPerformanceMode] = useState("quality")

    useEffect(() => {
        const storedMode = localStorage.getItem("perf-mode")
        if (storedMode) {
            setPerformanceMode(storedMode)
        }
    }, [])

    const togglePerformanceMode = () => {
        const newMode = performanceMode === "quality" ? "performance" : "quality"
        setPerformanceMode(newMode)
        localStorage.setItem("perf-mode", newMode)
    }

    const fluidProps: FluidSimulationConfig = useMemo(() => {
    if (performanceMode === "performance") {
      // --- PERFORMANCE MODE ---
      return {
        cursorSize: 300,
        resolution: 0.1,
        isBounce: false,      
        BFECC: false,
        mouseForce: 30, // Restored force for auto-demo
        autoDemo: true,        
        autoSpeed: 0.3,        
        autoIntensity: 2.2,
        isViscous: false,
        viscous: 10,
        iterationsViscous: 8,
        iterationsPoisson: 8,
        takeoverDuration: 0.25,
        autoResumeDelay: 500,
        autoRampDuration: 0.6,
        interactive: false // Disabled user interaction
      };
    } else {
      // --- QUALITY MODE ---
      return {
        cursorSize: 300,
        resolution: 0.4, 
        isBounce: false,      
        BFECC: true,
        mouseForce: 30,
        autoDemo: true,
        autoSpeed: 0.5,
        autoIntensity: 2.2,
        takeoverDuration: 0.25,
        autoResumeDelay: 3000,
        autoRampDuration: 0.6,
        isViscous: true,
        viscous: 30,
        iterationsViscous: 32,
        iterationsPoisson: 32,
        interactive: true
      };
    }
  }, [performanceMode])

  return (
    <PerformanceContext.Provider value={{ performanceMode, togglePerformanceMode, fluidProps }}>
      {children}
    </PerformanceContext.Provider>
  );
}

export function usePerformanceContext() {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error('usePerformanceContext must be used within a PerformanceProvider');
  }
  return context;
}
