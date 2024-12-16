import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export function generateMetadata({params}: EventsPageProps) {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}
export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;
  const formattedCity = capitalize(city)
  return (
    <main className="flex flex-col items-center py-24 px-6 min-h-[110vh]">
      <H1>{city === "all" ? "All Events" : `Events in ${formattedCity}`}</H1>
      
      <Suspense fallback={<Loading/>}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
