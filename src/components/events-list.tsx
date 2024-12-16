import EventCard from "./event-card"
import { getEvents } from "@/lib/server-utils";
import PaginationControls from "./pagination-controls";

type EventsListProp = {
    city: string;
    page?: number
}

export default async function EventsList({ city, page=1 }: EventsListProp) {
  const {events, totalCount} = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath = totalCount > page * 6 ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className="flex flex-wrap max-w-[1100px] gap-10 justify-center mt-16 lg:mt-24">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath}/>
    </section>
  );
}
