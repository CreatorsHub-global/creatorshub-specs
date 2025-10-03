// Quick example (Node 18+ has fetch built-in)
import { CreatorsHubClient } from "../../sdk/js/index.ts";

const client = new CreatorsHubClient({ baseUrl: "https://api.creatorshub.global" });

const main = async () => {
  try {
    const profile = await client.getCreatorProfile("demo");
    console.log("Profile:", profile);
  } catch (e) {
    console.error("Error:", e.message);
  }
};

main();
