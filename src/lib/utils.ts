import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(city: string) {
    const result = city.charAt(0).toUpperCase() + city.slice(1)
    return result;
}