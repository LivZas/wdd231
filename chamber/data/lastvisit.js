document.addEventListener("DOMContentLoaded", () => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("visit-message");
  const main = document.querySelector("main");
  main.prepend(messageContainer);

  const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    messageContainer.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysPassed = Math.floor((now - Number(lastVisit)) / MILLISECONDS_IN_A_DAY);

    if (daysPassed < 1) {
      messageContainer.textContent = "Back so soon! Awesome!";
    } else if (daysPassed === 1) {
      messageContainer.textContent = "You last visited 1 day ago.";
    } else {
      messageContainer.textContent = `You last visited ${daysPassed} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
});
