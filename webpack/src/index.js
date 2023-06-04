import './scss/styles.scss';
const dropMenuList = document.querySelector(".drop-menu__list"),
    dropMenuItem = document.querySelectorAll(".drop-menu__item"),
    dropMenuLink = document.querySelectorAll(".drop-menu__link"),
    toggleButton = document.querySelector(".hamburger-toggle");

eventListeners();

function eventListeners() {
    toggleButton.addEventListener("click", toggleMenu);
    dropMenuList.addEventListener("click", addActiveToListItems);
}

function toggleMenu(e) {
    toggleButton.classList.toggle("open");
    dropMenuList.classList.toggle("active");
    console.log(toggleButton)
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
        dropMenuLink.classList.add("drop-menu__link--active");
    } else if (target.classList.contains("drop-menu__link")) {
        removeActiveClasses();
        target.parentElement.classList.add("drop-menu__item--active");
        target.classList.add("drop-menu__link--active");
    }
}

