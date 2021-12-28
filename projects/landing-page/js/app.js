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

//make each section into an unordered list item
function makeLi (sections) {
    for(let i=0; i < sections.length; i++) {
        let section = sections[i];
        section.insertAdjacentHTML('beforebegin', "<li>");
        section.insertAdjacentHTML('afterend', "</li>");
}};

makeLi(sections)


//get the text from the section headings to put into a nav
function getHeadingText(sectionHeadings) {
    for (let i=0; i < sectionHeadings.length; i++) {
        let sectionHeading = sectionHeadings[i]
        //clone each heading so that we can use it without modifying the existing headings
        let clone = sectionHeading.cloneNode(true);
        //take the textContent from each heading clone
        let cloneText = clone.textContent
        console.log(cloneText)
        //append the cloned text onto a navbar
        let appendedNavbar = navbarList.append(cloneText)

        // this creates a TypeError and modifies the Navbar to only include Section 1.
        // clickNav(cloneText)

        //When I try this it modifies the Navbar to only include Section 1.
        // clickNav(appendedNavbar)        
    }
}

getHeadingText(sectionHeadings)

function clickNav (ele) {
    ele.addEventListener("click", function(event) {
        console.log("The click worked!")

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


