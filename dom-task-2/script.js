// let mq = window.matchMedia("(min-width : 700px)");
// let main = document.querySelector("main");
// let section = document.querySelector("section");
// let name = document.querySelector("#team span");
// let lastTimeWin = document.querySelector("#lastTimeWin span");
// let totalTimesWin = document.querySelector("#totalTimesWin span");
// let captain = document.querySelector("#captain span");
// let stateName = document.querySelector("#stateName span");
// let btn = document.querySelector("#btn");

let data = [
  {
    name: "CSK",
    fullName: "Chennai Super Kings",
    lastTitleYear: 2023,
    totalTitles: 5,
    captain: "MS Dhoni",
    state: "Tamil Nadu",
    primaryColour: "#FFFF3C",
    secondaryColour: "#0081E9",
  },
  {
    name: "MI",
    fullName: "Mumbai Indians",
    lastTitleYear: 2020,
    totalTitles: 5,
    captain: "Rohit Sharma",
    state: "Maharashtra",
    primaryColour: "#004BA0",
    secondaryColour: "#D1AB3E",
  },
  {
    name: "KKR",
    fullName: "Kolkata Knight Riders",
    lastTitleYear: 2024,
    totalTitles: 3,
    captain: "Shreyas Iyer",
    state: "West Bengal",
    primaryColour: "#3A225D",
    secondaryColour: "#F7D54E",
  },
  {
    name: "RR",
    fullName: "Rajasthan Royals",
    lastTitleYear: 2008,
    totalTitles: 1,
    captain: "Shane Warne",
    state: "Rajasthan",
    primaryColour: "#FF1493",
    secondaryColour: "#00ADEF",
  },
  {
    name: "SRH",
    fullName: "Sunrisers Hyderabad",
    lastTitleYear: 2016,
    totalTitles: 1,
    captain: "David Warner",
    state: "Telangana",
    primaryColour: "#FF6600",
    secondaryColour: "#000000",
  },
  {
    name: "GT",
    fullName: "Gujarat Titans",
    lastTitleYear: 2022,
    totalTitles: 1,
    captain: "Hardik Pandya",
    state: "Gujarat",
    primaryColour: "#1B2133",
    secondaryColour: "#DBBE6E",
  },
  {
    name: "RCB",
    fullName: "Royal Challengers Bengaluru",
    lastTitleYear: 2025,
    totalTitles: 1,
    captain: "Rajat Patidar",
    state: "Karnataka",
    primaryColour: "#FF0000",
    secondaryColour: "#000000",
  },
];

// btn.addEventListener("click", function () {
//   let num = Math.floor(Math.random() * data.length);
//   let team = data[num];

//   mq.addEventListener("change", function () {
//     if (mq.matches) {
//       name.textContent = `${team.fullName}`;
//     } else {
//       name.textContent = `${team.name}`;
//     }
//   });
//   lastTimeWin.textContent = `${team.lastTitleYear}`;
//   totalTimesWin.textContent = `${team.totalTitles}`;
//   captain.textContent = `${team.captain}`;
//   stateName.textContent = `${team.state}`;
//   btn.style.border = `2px solid ${team.secondaryColour}`;
//   main.style.backgroundColor = `${team.secondaryColour}`;
//   section.style.backgroundColor = `${team.primaryColour}`;
// });

let mq = window.matchMedia("(min-width : 700px)");
let main = document.querySelector("main");
let section = document.querySelector("section");
let name = document.querySelector("#team span");
let lastTimeWin = document.querySelector("#lastTimeWin span");
let totalTimesWin = document.querySelector("#totalTimesWin span");
let captain = document.querySelector("#captain span");
let stateName = document.querySelector("#stateName span");
let btn = document.querySelector("#btn");

let currentTeam = null;



btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * data.length);
  currentTeam = data[num];


  if (mq.matches) {
    name.textContent = currentTeam.fullName;
  } else {
    name.textContent = currentTeam.name;
  }

  lastTimeWin.textContent = currentTeam.lastTitleYear;
  totalTimesWin.textContent = currentTeam.totalTitles;
  captain.textContent = currentTeam.captain;
  stateName.textContent = currentTeam.state;
  btn.style.border = `2px solid ${currentTeam.secondaryColour}`;
  main.style.backgroundColor = currentTeam.secondaryColour;
  section.style.backgroundColor = currentTeam.primaryColour;
});

mq.addEventListener("change", function () {
  if (!currentTeam) return; 

  if (mq.matches) {
    name.textContent = currentTeam.fullName;
  } else {
    name.textContent = currentTeam.name;
  }
});