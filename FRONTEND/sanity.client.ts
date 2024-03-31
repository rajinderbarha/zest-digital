import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "dexthfb7",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
};

const client = createClient(config);

export default client;