/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const sectionHeadings = document.getElementsByClassName("section__heading");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the nav

function makeLi (sections) {
    for(let i=0; i < sections.length; i++) {
        let section = sections[i];
        section.insertAdjacentHTML('beforebegin', "<li>");
        section.insertAdjacentHTML('afterend', "</li>");
}};

makeLi(sections)



//getting text from h2 elements, cloned so don't modify initial html. May need to rename as doing more now
function getHeadingText(sectionHeadings) {
    for (let i=0; i < sectionHeadings.length; i++) {
        let sectionHeading = sectionHeadings[i]
        let clone = sectionHeading.cloneNode(true);
        let cloneText = clone.textContent
        console.log(cloneText)
        // clickNav(cloneText)

        let appendedNavbar = navbarList.append(cloneText)

        //wouldl ike to do the clickNav but seems to return it to Section 1 only and it doesn't work...hrm...
        //is it b/c appendedNavbar is one list?
        // clickNav(appendedNavbar)
        
    }

}

getHeadingText(sectionHeadings)

function clickNav (ele) {
    ele.addEventListener("click", function(event) {
        console.log("pudddddddddding")

        event.preventDefault();
    }  )
}







// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


