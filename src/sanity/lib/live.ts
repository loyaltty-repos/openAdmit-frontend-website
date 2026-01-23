import { defineLive } from "next-sanity/live";
import { env } from "@/env";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "vX",
  }),
  browserToken: env.SANITY_API_READ_TOKEN,
  serverToken: env.SANITY_API_READ_TOKEN,
});
