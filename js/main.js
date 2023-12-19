// buttons menu hover

let navlinks = document.querySelectorAll(".nav-container nav ul li a");
let navMenu = document.querySelector(".nav-container");

navlinks.forEach((navLinksIcon) => {
  navLinksIcon.addEventListener("mouseenter", () => {
    navMenu.classList.add("navlinks-hover");
  });
});

navlinks.forEach((navLinksIcon) => {
  navLinksIcon.addEventListener("mouseleave", () => {
    navMenu.classList.remove("navlinks-hover");
  });
});

// search button submenu
let searchButton = document.querySelector("nav .desktop-nav .link-search i");
let desktopNav = document.querySelector(".desktop-nav");
let searchContainer = document.querySelector(".search-container");
let overlayBlur = document.querySelector(".overlay-blur");
let overlayBackgroundSearch = document.querySelector(".overlay-search-bg");
let navMenuWidth = document.querySelector(".nav-container");

searchButton.addEventListener("click", () => {
  searchContainer.classList.toggle("hide");
  overlayBackgroundSearch.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// bag button submenu

let bagButton = document.querySelector("nav .desktop-nav .link-bag i");
let bagContainer = document.querySelector(".bag-container");
let overlayBackgroundBag = document.querySelector(".overlay-bag-bg");

bagButton.addEventListener("click", () => {
  bagContainer.classList.toggle("hide");
  overlayBackgroundBag.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// submenu support
let supportButton = document.querySelector("nav .desktop-nav .support-menu");
let supportContainer = document.querySelector(".support-container ");
let overlayBackgroundSupport = document.querySelector(".overlay-support-bg");

supportButton.addEventListener("click", () => {
  supportContainer.classList.toggle("hide");
  overlayBackgroundSupport.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// accessories sub menu
let accessoriesButton = document.querySelector(
  "nav .desktop-nav .accessories-menu"
);

let accessoriesContainer = document.querySelector(".accessories-container");
let overlayBackgroundAccessories = document.querySelector(
  ".overlay-accessories-bg"
);

accessoriesButton.addEventListener("click", () => {
  accessoriesContainer.classList.toggle("hide");
  overlayBackgroundAccessories.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// start submenu Tv & Home

let tvHomeButton = document.querySelector("nav .desktop-nav .tvhome-menu");
let overlayBackgroundTvHome = document.querySelector(".overlay-Tv-Home-bg");
let TvHomeContainer = document.querySelector(".Tv-Home-container");

tvHomeButton.addEventListener("click", () => {
  TvHomeContainer.classList.toggle("hide");
  overlayBackgroundTvHome.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// start submenu entertaiment

let EntertaimentButton = document.querySelector(
  "nav .desktop-nav .entertaiment-menu"
);
let entertaimentContainer = document.querySelector(".entertaiment-container");

let overlayBackgroundEntertaiment = document.querySelector(
  ".overlay-entertaiment-bg"
);

EntertaimentButton.addEventListener("click", () => {
  entertaimentContainer.classList.toggle("hide");
  overlayBackgroundEntertaiment.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// start entertaiment submenu
let airpodButton = document.querySelector(".airpod-menu");
let airpodContainer = document.querySelector(".airpod-container");
let overlayBackgrounAirPod = document.querySelector(".overlay-airpod-bg");

airpodButton.addEventListener("click", () => {
  airpodContainer.classList.toggle("hide");
  overlayBackgrounAirPod.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// start vision submenu
let visionButton = document.querySelector("nav .desktop-nav .vision-menu");

let visionContainer = document.querySelector(".vision-container");
let overlayBackgroundvision = document.querySelector(".overlay-vision-bg");

visionButton.addEventListener("click", () => {
  visionContainer.classList.toggle("hide");
  overlayBackgroundvision.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// start submenu Wach
let watchButton = document.querySelector("nav .desktop-nav .watch-menu");
let overlayBackgroundwatch = document.querySelector(".overlay-watch-bg");
let watchContainer = document.querySelector(".watch-container");

watchButton.addEventListener("click", () => {
  watchContainer.classList.toggle("hide");
  overlayBackgroundwatch.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// start submenu iPhone
let iPhoneButton = document.querySelector("nav .desktop-nav .iPhone-menu");
let overlayBackgroundiPhone = document.querySelector(".overlay-iPhone-bg");
let iPhoneContainer = document.querySelector(".iPhone-container");

iPhoneButton.addEventListener("click", () => {
  iPhoneContainer.classList.toggle("hide");
  overlayBackgroundiPhone.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// start submenu iPad
let iPadButton = document.querySelector("nav .desktop-nav .iPad-menu");
let overlayBackgroundiPad = document.querySelector(".overlay-iPad-bg");
let iPadContainer = document.querySelector(".iPad-container");

iPadButton.addEventListener("click", () => {
  iPadContainer.classList.toggle("hide");
  overlayBackgroundiPad.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// start submenu Mac
let MacButton = document.querySelector("nav .desktop-nav .Mac-menu");
let overlayBackgroundMac = document.querySelector(".overlay-Mac-bg");
let MacContainer = document.querySelector(".Mac-container");

MacButton.addEventListener("click", () => {
  MacContainer.classList.toggle("hide");
  overlayBackgroundMac.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// start submenu Store
let StoreButton = document.querySelector("nav .desktop-nav .Store-menu");
let overlayBackgroundStore = document.querySelector(".overlay-Store-bg");
let StoreContainer = document.querySelector(".Store-container");

StoreButton.addEventListener("click", () => {
  StoreContainer.classList.toggle("hide");
  overlayBackgroundStore.classList.toggle("show");
  overlayBlur.classList.toggle("show");
});

// logo content loaded
let logoAppleButton = document.querySelector("nav .desktop-nav .link-logo");
logoAppleButton.addEventListener("DOMContentLoaded", () => {});

// --------------------------------------------------------

// mobile menu

// menu humburger open
let humburgerButton = document.querySelector(".humburger-menu-open");

let backgroundOpenHumburger = document.querySelector(".humburger-menu-bg");
let mobileNav = document.querySelector(".mobile-nav");
let humburgerContainer = document.querySelector(".humburger-container");
let navMenuContainer = document.querySelector(".nav-container");
let closeButton = document.querySelector(".closeBtn");

humburgerButton.addEventListener("click", () => {
  backgroundOpenHumburger.classList.add("show");
  humburgerContainer.classList.add("show");
});

closeButton.addEventListener("click", () => {
  backgroundOpenHumburger.classList.remove("show");
  humburgerContainer.classList.remove("show");
});

// foooter accordion minus 959 size

const accordionBtn = document.querySelectorAll(".contentBx");
let accordionContent = document.querySelectorAll(".content");

for (i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// End footer in size minus 959

// Start API

fetch("https://parsa-farshah.github.io/Apple-json/db.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.products.forEach((elem) => {
      const markup = `
    <div class="content-container-1">
        <img src="${elem.image}" alt="">
      <div class="information">
        <p class="new">${elem.date}</p>
        <p class="phone-model">${elem.name}</p>
        <p class="material">${elem.information}</p>
        <p class="price">${elem.price}</p>
        <p class="buy">Buy</p>
       <div class="learn-more">
          <a href="#">Learn more</a>
          <img src="./images/content/arrow right.svg" alt="">
       </div>
      </div>
    </div>



  
`;
      document
        .querySelector(".row-images")
        .insertAdjacentHTML("beforeend", markup);
    });
  })
  .catch((error) => console.log(error));

// End API
