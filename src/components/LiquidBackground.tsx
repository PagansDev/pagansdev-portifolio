"use client"

import LiquidEther from "@/components/LiquidEther";
import usePerformanceMode from "@/hooks/usePerformanceMode";

export default function LiquidBackground() {
    const { fluidProps } = usePerformanceMode();

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <LiquidEther
                colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
                mouseForce={fluidProps.mouseForce}
                BFECC={fluidProps.BFECC}
                cursorSize={fluidProps.cursorSize}
                isViscous={fluidProps.isViscous}
                viscous={fluidProps.viscous}
                iterationsViscous={fluidProps.iterationsViscous}
                iterationsPoisson={fluidProps.iterationsPoisson}
                resolution={fluidProps.resolution}
                isBounce={fluidProps.isBounce}
                autoDemo={fluidProps.autoDemo}
                autoSpeed={fluidProps.autoSpeed}
                autoIntensity={fluidProps.autoIntensity}
                takeoverDuration={fluidProps.takeoverDuration}
                autoResumeDelay={fluidProps.autoResumeDelay}
                autoRampDuration={fluidProps.autoRampDuration}
                interactive={fluidProps.interactive}
            />
        </div>
    );
}
