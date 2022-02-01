// Sticky menu background

// hamburger menu
const hamburger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

const calendarHandler = document.querySelectorAll(".calendar-toggle-handler");
const calendarMenu = document.querySelector(".calendar-menu");


calendarHandler.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    calendarMenu.classList.toggle("open");
  });
});

const galleryWrapper = document.querySelector('#gallery-wrapper');

if (!!galleryWrapper) {
  const galleryItems = galleryWrapper.querySelectorAll(".item");

  galleryItems.forEach((element) => {
    element.addEventListener("click", (event) => {
      document.querySelector(".modal-title").innerText = element.dataset.coffee;
      document.querySelector(".modal-body").innerText =
        element.dataset.description;
      $("#description-modal").modal("show");
    });
  });
}
