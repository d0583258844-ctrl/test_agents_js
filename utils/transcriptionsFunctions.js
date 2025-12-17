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

const arr_of_Dangerous_items = ["death", "knife", "bomb", "attack"];

export async function FindDangerousPeople(path) {
  const data = await fs.readFile(path, "utf-8");
  const data1 = JSON.parse(data);
  for (let i = 0; i < data1.length; i++) {
    const element = data1[i];
    if(element["content"].includs(arr_of_Dangerous_items.forEach())) {
      console.log(element);
      return;
    }
  }
  console.log;
}
