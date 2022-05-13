"use strict";

const modal = document.querySelector("[data-modal]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close]");

// modal function
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

modalCloseBtn.addEventListener("click", modalCloseFunc);
modalCloseOverlay.addEventListener("click", modalCloseFunc);

// Notificatiion toast functionallity
const notifiToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// Notification function
const notifiCloseFunc = function () {
  notifiToast.classList.add("closed");
};

toastCloseBtn.addEventListener("click", notifiCloseFunc);



// ------SELECTING ELEMENTS FOR THE MOBILE NAVIGATION-----
const dataMenuOpenBtn = document.querySelectorAll("[data-mobile-menu-open-btn]");
const dataMenuClosebtn = document.querySelectorAll("[data-menu-close-btn]");
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");

const addIcon = document.querySelectorAll(".add-icon");
const removeIcon = document.querySelectorAll(".remove-icon");


for(let i=0; i<dataMenuClosebtn.length; i++){
// CLOSE BUTTON FUNCTION
    dataMenuClosebtn[i].addEventListener("click", () => {
    mobileMenu[i].classList.remove("active");
  });
}

for(let i=0; i<dataMenuOpenBtn.length; i++){
// OPEN BUTTON FUNCTION 
    dataMenuOpenBtn[i].addEventListener("click", () => {
    mobileMenu[i].classList.add("active");
  });
}



    // ACCORDION FUNCTIONALITY
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordionData = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener("click", function () {

    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordionData.length; i++) {
      if (clickedBtn) break;

      if (accordionData[i].classList.contains("active")) {
        accordionData[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
   
  });
}
