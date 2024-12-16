import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-6 pt-24">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />

    </div>
  )
}
