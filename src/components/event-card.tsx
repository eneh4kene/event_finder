import { TEvent } from "@/lib/types"
import Image from "next/image"
import Link from "next/link";

type EventCardProp = {
    event: TEvent
}

export default function EventCard({event}: EventCardProp) {
    const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });

 return (
   <Link
     href={`/event/${event.slug}`}
     className="hover:scale-105 active:scale-105 transition"
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
   </Link>
 );
};
