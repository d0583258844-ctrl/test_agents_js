import fs from "node:fs/promises";

export async function GetCallRecordsTranscriptions(url, path) {
  try {
    const res = await fetch(url);
    const data = await res.text();
    await fs.writeFile(path, data);
    return "Data transcriptions added";
  } catch (error) {
    console.log("Error: ", error);
  }
}
