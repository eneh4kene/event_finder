import EventsList from "@/components/events-list";
import H1 from "@/components/h1";

type EventsPageProps = {
  params: {
    city: string;
  };
};
export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events = await res.json();
  return (
    <main className="flex flex-col items-center py-24 px-6 min-h-[110vh]">
      <H1>{city === "all" ? "All Events" : `Events in ${formattedCity}`}</H1>

      <EventsList events={events} />
    </main>
  );
}
