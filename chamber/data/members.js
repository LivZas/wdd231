const members = [
  { name: "Mcdonald's", address: "Sabana Grande", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Gold" },
  { name: "KFC", address: "El Recreo", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Silver" },
  { name: "Mykonos", address: "Caracas", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Member" },
  { name: "Arturos'", address: "Sabana Grande", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Gold" },
  { name: "Wendy's", address: "El Recreo", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Silver" },
  { name: "Cines Unidos", address: "Sambil", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Member" },
  { name: "Cinex", address: "El Recreo", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Gold" }
];

const container = document.getElementById("members-container");

function displayMembers() {
  if (!container) return;
  container.innerHTML = "";
  members.forEach(member => {
    const section = document.createElement("section");
    section.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone number:</strong> ${member.phone}</p>
      <p><strong>Membership Level:</strong> ${member.level}</p>
      <a href="${member.website}" target="_blank">Details</a>
    `;
    container.appendChild(section);
  });
}

if (container) {
  displayMembers();

  document.getElementById("gridView").addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
    document.getElementById("gridView").classList.add("active");
    document.getElementById("listView").classList.remove("active");
  });

  document.getElementById("listView").addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
    document.getElementById("listView").classList.add("active");
    document.getElementById("gridView").classList.remove("active");
  });
}

const spotlightContainer = document.getElementById("spotlight");

function getRandomSpotlights(members, count = 3) {
  const eligible = members.filter(m => m.level === "Gold" || m.level === "Silver");
  const shuffled = eligible.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displaySpotlights() {
  if (!spotlightContainer) return;
  const spotlights = getRandomSpotlights(members, 2);
  spotlightContainer.innerHTML = "";
  spotlights.forEach(member => {
    const section = document.createElement("section");
    section.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Level:</strong> ${member.level}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    spotlightContainer.appendChild(section);
  });
}

displaySpotlights();

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
  const formTimestampInput = document.getElementById('formTimestamp');
  if (formTimestampInput) {
    const timestamp = new Date().toISOString();
    formTimestampInput.value = timestamp;
  }

  const params = new URLSearchParams(window.location.search);

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const organization = document.getElementById("organization");
  const timestampEl = document.getElementById("timestamp");

  if (firstName) firstName.textContent = params.get("firstName") || "";
  if (lastName) lastName.textContent = params.get("lastName") || "";
  if (email) email.textContent = params.get("email") || "";
  if (phone) phone.textContent = params.get("phone") || "";
  if (organization) organization.textContent = params.get("organization") || "";

  const rawTimestamp = params.get("timestamp");
  if (rawTimestamp && timestampEl) {
    const dateObj = new Date(rawTimestamp);
    const year = dateObj.getUTCFullYear();
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getUTCDate()).padStart(2, '0');
    const hour = String(dateObj.getUTCHours()).padStart(2, '0');
    const minutes = String(dateObj.getUTCMinutes()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hour}:${minutes} UTC`;
    timestampEl.textContent = formattedDate;
  }
});
