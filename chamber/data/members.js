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
