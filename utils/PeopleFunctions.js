const url = "https://spies-test-server.vercel.app/people";
import fs from "node:fs/promises";

export async function getPeopleList(url, path) {
  try {
    const res = await fetch(url);
    const data = await res.text();
    await fs.writeFile(path, data);
    console.log("Data added");
  } catch (error) {
    console.log("Error: ", error);
  }
}

await getPeopleList(url, "../db/PEPOLE.json");
