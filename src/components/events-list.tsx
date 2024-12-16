import EventCard from "./event-card"
import { getEvents } from "@/lib/server-utils";

type EventsListProp = {
    city: string;
}

export default async function EventsList({ city }: EventsListProp): Promise<JSX.Element> {
  const events = await getEvents(city);
  return (
    <section className="flex flex-wrap max-w-[1100px] gap-10 justify-center mt-16 lg:mt-24">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
