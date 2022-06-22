// We keep backupAstrosData, so it can work on Github Pages.
// Unfortunately, astronauts api is hosted on http and Github Pages is hosted on https.
const backupAstrosData = {
  number: 10,
  people: [
    { name: "Oleg Artemyev", craft: "ISS" },
    { name: "Denis Matveev", craft: "ISS" },
    { name: "Sergey Korsakov", craft: "ISS" },
    { name: "Kjell Lindgren", craft: "ISS" },
    { name: "Bob Hines", craft: "ISS" },
    { name: "Samantha Cristoforetti", craft: "ISS" },
    { name: "Jessica Watkins", craft: "ISS" },
    { name: "Cai Xuzhe", craft: "Tiangong" },
    { name: "Chen Dong", craft: "Tiangong" },
    { name: "Liu Yang", craft: "Tiangong" },
  ],
  message: "success",
};

async function getPeopleDataRaw() {
  let peopleData;
  try {
    const peopleDataRaw = await fetch("http://api.open-notify.org/astros.json");
    peopleData = await peopleDataRaw.json();
  } catch (error) {
    peopleData = backupAstrosData;
  }

  return peopleData;
}

function addPeopleNames(people) {
  const peopleContainer = document.querySelector("#people-in-space-list");

  if (peopleContainer) {
    people.forEach((item) => {
      const nameItem = document.createElement("li");
      nameItem.innerText = `${item.craft}:\u00A0\u00A0${item.name}`;

      peopleContainer.appendChild(nameItem);
    });
  }
}

function addPeopleNumber(peopleNumber) {
  const peopleNumberContainer = document.querySelector(
    "#people-in-space-number"
  );

  if (peopleNumberContainer) {
    peopleNumberContainer.innerText = peopleNumber;
  }
}

async function init() {
  getPeopleDataRaw();
  const peopleData = await getPeopleDataRaw();

  addPeopleNumber(peopleData.number);
  addPeopleNames(peopleData.people);
}

init();
