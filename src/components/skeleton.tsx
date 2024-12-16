import { cn } from "@/lib/utils"

type skeletonProp = {
    className?: string
}

export default function Skeleton({className}: skeletonProp) {
  return <div className={cn("h-4 w-[70vw] rounded-lg bg-white/10 animate-pulse", className)}/>
}