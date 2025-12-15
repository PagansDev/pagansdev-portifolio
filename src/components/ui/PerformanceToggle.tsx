import { CircleGaugeIcon} from "lucide-react"
import usePerformanceMode from "../../hooks/usePerformanceMode"

export default function PerformanceToggle() {
    const { performanceMode, togglePerformanceMode } = usePerformanceMode()

    return (
        <div>
            <div
            className="inline-flex gap-2 items-center justify-center rounded-md border border-zinc-200 bg-white/20 p-2 text-sm font-medium transition-colors hover:bg-zinc-100/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950/20 dark:hover:bg-zinc-800/20 dark:focus-visible:ring-zinc-300 backdrop-blur cursor-pointer"
            >
            <CircleGaugeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100"/>
            <span> Modo:</span>
            <button 
            onClick={() => {
                togglePerformanceMode()
            }}
            className="bg-zinc-200/20 rounded-md py-0 px-2 text-sm font-medium">
                <span className="font-medium transform duration-200">{performanceMode === "quality" ? "Qualidade" : "Performance"}</span>
            </button>
            </div>
        </div>
    )
}