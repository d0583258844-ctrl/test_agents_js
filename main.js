import input from "analiza-sync";
import {
  getPeopleList,
  SearchPeopleByName,
  SearchPeoplebyAge,
} from "./utils/PeopleFunctions.js";
import { GetCallRecordsTranscriptions } from "./utils/transcriptionsFunctions.js";

const url1 = "https://spies-test-server.vercel.app/people";
const url2 = "https://spies-test-server.vercel.app/transcriptions";

const path_to_DbPeople = "db/PEOPLE.json";
const path_to_Dbtranscriptions = "db/TRANSCRIPTIONS.json";

const menu_for_display = {
  Search_People_by_Name: "Search People by Name",
  Search_People_by_Age: "Search People by Age",
  Find_Dangerous_People_Goal: "Find Dangerous People Goal",
  Exit: "Exit",
};

GetCallRecordsTranscriptions(url2, path_to_Dbtranscriptions);
getPeopleList(url1, path_to_DbPeople);
async function menu() {
  const Menu = menu_for_display;
  let userinput;
  console.log("Hello");
  console.log("-----------menu----------");
  do {
    let i = 0;
    Object.keys(Menu).forEach((key) => {
      i++;
      console.log(`\n${i} ${Menu[key]}`);
    });

    userinput = input("Enter your choice:\n");
    if (userinput == "1") {
      console.log("You choose to Search People by Name");
      userinput = input("Enter the name you loking for:\n");
      await SearchPeopleByName(userinput, path_to_DbPeople);
    }
    if (userinput == "2") {
      console.log("You choose to Search People by Age");
      userinput = input("Enter the user age you loking for:\n");
      await SearchPeoplebyAge(userinput, path_to_DbPeople);
    }
    if (userinput == "3") {
      console.log("");
    }
  } while (userinput !== "4");
  {
    console.log("Good bey");
  }
}

menu();
