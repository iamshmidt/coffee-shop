  // hamburger menu
  const hamburger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
  });