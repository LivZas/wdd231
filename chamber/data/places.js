document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".places-grid");

  fetch("data/places.json")
    .then((response) => response.json())
    .then((places) => {
      places.forEach((place) => {
        const card = document.createElement("div");
        card.classList.add("place-card");

        card.innerHTML = `
          <img data-src="${place.image}" alt="${place.alt}" src="images/placeholder.png" class="lazy"> 
          <div class="content">
            <h2>${place.title}</h2>
            <p>${place.description}</p>
            <p class="source"><em>${place.info}</em></p>
            <a href="${place.link}" class="learn-more" target="_blank">Learn More</a>
          </div>
        `;

        container.appendChild(card);
      });

      const lazyImages = document.querySelectorAll("img.lazy");

      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    })
    .catch((error) => console.error("Error loading JSON data:", error));
});
