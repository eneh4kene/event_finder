import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

type PaginationControlsProps = {
    previousPath: string,
    nextPath: string
}

const btnStyles = "bg-white/5 py-3 px-5 text-sm hover:bg-white/15 rounded-md flex items-center gap-x-2 transition"

export default function PaginationControls({previousPath, nextPath}: PaginationControlsProps) {
  return (
    <section className="flex w-full justify-between">
      {
        previousPath ? (
          <Link href={previousPath}
          className={btnStyles}>
              <ArrowLeftIcon />
              Previous
          </Link>
        ) : <div />
      }

      {
        nextPath && (
          <Link href={nextPath}
          className={btnStyles}>
              Next
              <ArrowRightIcon />
          </Link>   
        )
      }

    </section>
  )
}
