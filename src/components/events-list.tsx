import { TEvent } from "@/lib/types"
import EventCard from "./event-card"

type EventsListProp = {
    events: TEvent[]
}

export default function EventsList({events}: EventsListProp) {
  return (
    <section className="flex flex-wrap max-w-[1100px] gap-10 justify-center mt-16 lg:mt-24">
        {
            events.map(event => <EventCard key={event.id} event={event} />)
        }
    </section>
)
}
