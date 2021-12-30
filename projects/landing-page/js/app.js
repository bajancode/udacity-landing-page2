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

//remove active class from all sections
let removeClass = function (sections) {
    for(let i = 0; i < sections.length; i++) {
        let section = sections[i];       
        section.removeAttribute("class", "your-active-class");
    }
}

//add active class to just one element
let addClass = function (section) {
    section.addAttribute("class", "your-active-class");
}

//Gets text from heading elements - scope has expanded, need to refactor and take out other stuff as it now also makes them into a navbar, and onClick removes all clases from sections

let getHeadingText = function(sectionHeadings) {
    for (let i=0; i < sectionHeadings.length; i++) {
        let sectionHeading = sectionHeadings[i]
        //clone each heading so that we can use it without modifying the existing headings
        let clone = sectionHeading.cloneNode(true);
        //create an anchor element
        let anchor = document.createElement("a")
         //take the textContent from each heading clone and add it to the anchor
        anchor.textContent = clone.textContent

         //append the cloned text onto navbar
         let appendedNavbar = navbarList.append(anchor)

        //add click event which removes active classes, adds active-class to clicked element, and scrolls to the section
        anchor.addEventListener("click", function(event) {
        event.preventDefault();
        //Remove any section classes
        removeClass(sections);

        //add section classes (not working)
        addClass(event.target.closest("section"))
        // this also didn't work:
        //event.target.closest("section").addClass("your-active-class")

        //scroll into view of the sectionHeading
        sectionHeading.scrollIntoView({ behavior: 'smooth' })

     })
  
    }
}

getHeadingText(sectionHeadings)



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


