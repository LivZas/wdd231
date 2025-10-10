document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".places-grid");

  fetch("data/places.json")
    .then((response) => response.json())
    .then((places) => {
      places.forEach((place) => {
        const card = document.createElement("div");
        card.classList.add("place-card");

        card.innerHTML = `
          <img src="${place.image}" alt="${place.alt}"> 
          <div class="content">
            <h2>${place.title}</h2>
            <p>${place.description}</p>
            <p class="source"><em>${place.info}</em></p>
            <a href="${place.link}" class="learn-more" target="_blank">Learn More</a>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Error loading JSON data:", error));
});
