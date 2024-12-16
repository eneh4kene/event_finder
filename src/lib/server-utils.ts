import { PrismaClient, TEvent } from "@prisma/client";
import { capitalize } from "./utils";
import prisma from "./db";

export async function getEvents(city: string) {
    const events = await prisma.tEvent.findMany({
        where: {
            city: city === "all" ? undefined : capitalize(city),
        },
        orderBy: {
            date: "asc"
        }
    })

    console.log(events)

    return events
}

export async function getEvent(slug: string):Promise<TEvent> {
    const event = await prisma.tEvent.findUnique({
        where: {
            slug: slug,
        }
    });

    return event
}