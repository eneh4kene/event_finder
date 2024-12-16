import "server-only"
import { capitalize } from "./utils";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

export const getEvents = unstable_cache(async (city: string, page=1) => {
    const events = await prisma.tEvent.findMany({
        where: {
            city: city === "all" ? undefined : capitalize(city),
        },
        orderBy: {
            date: "asc"
        },
        take: 6,
        skip: (page - 1) * 6
    })

    let totalCount;

    if (city === "all") {
        totalCount = await prisma.tEvent.count()
    } else {
        totalCount = await prisma.tEvent.count({
            where: {
                city: capitalize(city)
            }
        })
    }

    return {events, totalCount}
})

export const getEvent = unstable_cache( async (slug: string) => {
    const event = await prisma.tEvent.findUnique({
        where: {
            slug: slug,
        }
    });

    if (!event) {
        return notFound();
    }

    return event
})