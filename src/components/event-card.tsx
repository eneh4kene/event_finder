"use client"

import { TEvent } from "@prisma/client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image"
import Link from "next/link";
import { useRef } from "react";

type EventCardProp = {
    event: TEvent
}

const MotionLink = motion(Link)

export default function EventCard({event}: EventCardProp) {
    const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.5 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);


 return (
   <MotionLink
     ref={ref}
     href={`/event/${event.slug}`}
     className="hover:scale-105 active:scale-105 transition"
     style={{
       // @ts-ignore
       scale: scaleProgress,
       // @ts-ignore
       opacity: opacityProgress,
     }}
     initial={{
       opacity: 0,
       scale: 0.8,
     }}
   >
     <div className="w-[300px] bg-gray-800 rounded-xl overflow-hidden shadow-lg">
       <div className="relative">
         <Image
           src={event.imageUrl}
           alt={event.name}
           width={300}
           height={200}
           className="w-full h-[200px] object-cover"
         />
         <span className="absolute top-2 left-2 bg-black text-accent text-sm font-semibold py-1 px-2 rounded">
           {formattedDate}
         </span>
       </div>
       <div className="p-4">
         <h3 className="text-white text-lg font-bold">{event.name}</h3>
         <p className="text-gray-400 text-sm">By {event.organizerName}</p>
         <p className="text-gray-500 text-sm mt-1">{event.location}</p>
         <Link
           href={`/event/${event.slug}`}
           className="mt-4 inline-block text-blue-500 hover:text-blue-400 text-sm font-medium"
         >
           View Details
         </Link>
       </div>
     </div>
   </MotionLink>
 );
};
