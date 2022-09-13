// test to see if script linked
console.log("index.js script linked to index.html!");


//this is the DOM ID for the hamburger menu button
const menuButton = document.querySelector(".navbar-toggler");
//this is the DOM ID for the div container for all the drop down options in the nav bar
const menuOptions = document.querySelector(".navbar-collapse");

//this function will auto-collapse the nav bar menu when the user clicks on one of the options
function autoCollapse() {

    //change the class attr of buttonto "navbar-toggler collapsed"
    menuButton.setAttribute("class", "navbar-toggler collapsed");
    //change the aria-expanded attr of button to "false"
    menuButton.setAttribute("aria-expanded", "false");
    //change the nav bar menu options div class to "navbar-collapse collapse"
    menuOptions.setAttribute("class", "navbar-collapse collapse");

};

// click listener to trigger the auto-collapse of the nav menu
menuOptions.addEventListener("click", autoCollapse);


//setup scroll / viewport based animation for section headers h3s
let options = {
    // root: document.querySelector("#section-links"),
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};

//this function below make ALL the sections fade in once the section-links is visible in the view port
const scrollAnimationFade = () => {
    console.log("TEST - scrollAnimationFade function has been called");
    const jsScrollElements = document.querySelectorAll(".js-scroll"); //ID all elements with the class js-scroll

    for (const jsScrollElement of jsScrollElements) {
        jsScrollElement.classList.add("scrolled");
    }
};

let observer = new IntersectionObserver(scrollAnimationFade, options);

observer.observe(document.querySelector("#section-links"));