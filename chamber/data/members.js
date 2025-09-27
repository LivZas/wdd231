const members = [
  { name: "Mcdonalds", address: "sabana grande", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Gold" },
  { name: "KFC", address: "el recreo", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Silver" },
  { name: "Mykonos", address: "caracas", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Member" },
  { name: "Arturos", address: "sabana grande", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Gold" },
  { name: "Wendys", address: "el recreo", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Silver" },
  { name: "Cines Unidos", address: "sambil", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Member" },
  { name: "Cinex", address: "el recreo", phone: "xxx-xxxxx", website: "https://google.com", image: "https://via.placeholder.com/150", level: "Gold" }
];
const container = document.getElementById("members-container");
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
