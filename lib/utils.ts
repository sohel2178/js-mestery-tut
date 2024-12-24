import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { techMap } from "@/constants/techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDevIconClassName = (techName: string) => {
  const normalizeName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalizeName]
    ? `${techMap[normalizeName]} colored`
    : "devicon-javascript-plain";
};
