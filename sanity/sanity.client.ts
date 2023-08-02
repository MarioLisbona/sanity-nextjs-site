import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "ai70dbv7",
  dataset: "production",
  apiVersion: "2023-08-01",
  useCdn: false,
};

const client = createClient(config);

export default client;
