async function getPeopleDataRaw() {
  const peopleDataRaw = await fetch("http://api.open-notify.org/astros.json");
  const peopleData = await peopleDataRaw.json();

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
