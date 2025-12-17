import fs from "node:fs/promises";

export async function getPeopleList(url, path) {
  try {
    const res = await fetch(url);
    const data = await res.text();
    await fs.writeFile(path, data);
    return "Data people added";
  } catch (error) {
    console.log("Error: ", error);
  }
}

export async function SearchPeopleByName(Name, path) {
  const data = await fs.readFile(path, "utf-8");
  const data1 = JSON.parse(data);
  for (let i = 0; i < data1.length; i++) {
    const element = data1[i];
    if (element["name"] === Name) {
      console.log(element);
      return;
    }
  }
  console.log("User name not found!");
}

export async function SearchPeoplebyAge(Age, path) {
  const data = await fs.readFile(path, "utf-8");
  const data1 = JSON.parse(data);
  for (let i = 0; i < data1.length; i++) {
    const element = data1[i];
    if (element["age"] === Age) {
      console.log(element);
      return;
    }
  }
  console.log("User age not found!");
}
