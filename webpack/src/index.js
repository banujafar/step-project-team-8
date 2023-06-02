import './scss/styles.scss';
const hamburgerMenu = document.querySelector(".hamburger-menu"),
    dropMenuList = document.querySelector(".drop-menu__list"),
    // clickedMenu = document.querySelector(".clicked-menu"),
    dropMenuItem = document.querySelectorAll(".drop-menu__item"),
    dropMenuLink = document.querySelectorAll(".drop-menu__link");
eventListeners();

function eventListeners() {
    hamburgerMenu.addEventListener("click", toggleMenu);
    dropMenuList.addEventListener("click", addActiveToListItems);
}

function toggleMenu() {
    dropMenuList.classList.toggle("active");
    hamburgerMenu.firstElementChild.classList.toggle("disabled");
    hamburgerMenu.classList.toggle("hamburger-menu--active");
}
function removeActiveClasses() {
    for (let i = 0; i < dropMenuItem.length; i++) {
        dropMenuItem[i].classList.remove("drop-menu__item--active");
        dropMenuLink[i].classList.remove("drop-menu__link--active");
    }
}

function addActiveToListItems(e) {
    const target = e.target;
    if (target.classList.contains("drop-menu__item")) {
        removeActiveClasses();
        target.classList.add("drop-menu__item--active");
        target.querySelector(".drop-menu__link").classList.add("drop-menu__link--active");
    } else if (target.classList.contains("drop-menu__link")) {
        removeActiveClasses();
        target.parentElement.classList.add("drop-menu__item--active");
        target.classList.add("drop-menu__link--active");
    }
}
