"use client"

import { usePerformanceContext } from "@/components/PerformanceProvider";

export default function usePerformanceMode() {
    return usePerformanceContext();
}