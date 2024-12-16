import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: {[key: string]: string | string[] | undefined}
}

export function generateMetadata({params}: Props) {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional()
export default async function EventsPage({ params, searchParams }: EventsPageProps) {
  const city = params.city;
  const page = searchParams.page;
  const formattedCity = capitalize(city)
  const parsedPage = pageNumberSchema.safeParse(page)

  if (!parsedPage.success) {
    throw new Error("Invalid page number")
  }

  return (
    <main className="flex flex-col items-center py-24 px-6 min-h-[110vh]">
      <H1>{city === "all" ? "All Events" : `Events in ${formattedCity}`}</H1>

      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>

    </main>
  );
}
