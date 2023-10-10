/* I declare that the lab work here submitted is original 
except for source material explicitly acknowledged,
and that the same or closely related material has not been 
previously submitted for another course.
I also acknowledge that I am aware of University policy and 
regulations on honesty in academic work, and of the disciplinary 
guidelines and procedures applicable to breaches of such
policy and regulations, as contained in the website.

University Guideline on Academic Honesty: 
https://www.cuhk.edu.hk/policy/academichonesty/

Student Name : Liu Man Yin
Student ID : 1155159567
Class/Section : CSCI2720
Date : 29/9/2023 */

// Task 3.0
// Function to show or hide sec-navbar
const toggleNavbar = () => {
  // Get referneces to elements
  const showHideLink = document.getElementById("showHide-link");
  const secNavbar = document.getElementById("sec-navbar");
  // Get style property in stylesheet
  const computedStyle = window.getComputedStyle(secNavbar);

  // Toggle the style.display of sec-navbar 
  if (computedStyle.display === "none") {
    secNavbar.style.display = "block";
    showHideLink.textContent = "Hide";
  } else {
    secNavbar.style.display = "none";
    showHideLink.textContent = "Show";
  }
};

// Toggle on click
const showHideNavItem = document.getElementById("showHide-nav-item");
showHideNavItem.addEventListener("click", toggleNavbar);

// Task 3.1
const align = () => {
  const button = document.getElementById("task3-1-button");
  const columns = document.getElementsByClassName("task3-1-column");

  // Define an array of all 3 alignments 
  const alignClasses = ["text-start", "text-center", "text-end"];
  let alignIndex = 0; // Current alignment index

  const applyAlignment = () => {
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      column.classList.remove(...alignClasses); // Remove all alignment classes from the column
      column.classList.add(alignClasses[alignIndex]); // Add current alignment class to the column
    }
  };

  const handleClick = () => {
    applyAlignment();
    // Increment the alignment index and wrap around after 3
    alignIndex = (alignIndex + 1) % alignClasses.length;
  };

  button.addEventListener("click", handleClick);

  // Apply initial alignment when the page loads
  applyAlignment();

  // Apply alignment on window load event as well
  window.addEventListener("load", handleClick);
};

align();
/*
// Task 3.2
const handleSpotlight = () => {
  const button = document.getElementById("task3-2-button");

  button.addEventListener("click", () => {
    const input = prompt("Enter a spotlight of Chihara Junior");
    alert(`The spotlight you input is: ${input}`);

    if (input !== null && input.trim() !== "") {
      const spotlightColumn = document.getElementById('spotlightColumn');
      const spotlightBox = document.createElement('div');
      spotlightBox.className = 'spotlightBox container container-gradient';
      spotlightBox.textContent = input;
      spotlightColumn.appendChild(spotlightBox);
    }
  });
}; 

handleSpotlight();*/

const handleSpotlight = () => {
  const button = document.getElementById("task3-2-button");

  button.addEventListener("click", () => {
    const input = prompt("Enter a spotlight of Chihara Junior");
    alert(`The spotlight you input is: ${input}`);

    if (input !== null && input.trim() !== "") {
      const spotlightRow = document.getElementById('spotlightRow');
      const spotlightColumn = document.createElement('div');
      spotlightColumn.className = 'col spotlightColumn';
      spotlightColumn.textContent = input;
      spotlightRow.appendChild(spotlightColumn);

      // Also add to Task3.1 class for alignment
      spotlightColumn.classList.add('task3-1-column');

       // Apply responsive class based on text length
       if (input.length > 100) {
        spotlightColumn.classList.add('col-12'); // Set column to full width for long text
      } else if (input.length > 50) {
        spotlightColumn.classList.add('col-md-6'); // Set column to half width on medium devices for medium-length text
      } else {
        spotlightColumn.classList.add('col-md-4'); // Set column to one-third width on medium devices for short text
      }
    }
  });
};

handleSpotlight();



/*
// Task 3.1
const align = () => {
  const button = document.getElementById("task3-1-button");
  const column1 = document.getElementById("task3-1-column-1"); // Updated ID
  const column2 = document.getElementById("task-3-1-column-2");

  // Define an array of alignment classes
  const alignmentClasses = ["text-start", "text-center", "text-end"];
  let alignmentIndex = 0; // Current alignment index

  button.addEventListener("click", () => {
    column1.classList.remove(...alignmentClasses); // Remove all alignment classes from column 1
    column2.classList.remove(...alignmentClasses); // Remove all alignment classes from column 2

    column1.classList.add(alignmentClasses[alignmentIndex]); // Add current alignment class to column 1
    column2.classList.add(alignmentClasses[alignmentIndex]); // Add current alignment class to column 2

    // Increment the alignment index and wrap around if necessary
    alignmentIndex = (alignmentIndex + 1) % alignmentClasses.length;
  });
};

align();
*/
/*
// Output content in p
//const outputElement = document.getElementById("para")
//console.log(outputElement.innerHTML); 

// Get references to the submitButton and textInput elements
const myButton = document.getElementById("submitButton");
const myTextInput = document.getElementById("textInput");

// Add an event listener for the click event
myButton.addEventListener("click", function() {

  // Get the content of the text input
  const myTextInputContent = myTextInput.value;
  const confirmMessage = "You inputted: " + myTextInputContent + "\nConfirm to submit?";
  // Ask for confirmation
  if (confirm(confirmMessage)) {
    // Create the review box element and set its content
    const reviewBox = document.createElement("div");
    reviewBox.className = "reviewBox";
    reviewBox.textContent = myTextInputContent;
    // Add new class for the new review box
    reviewBox.classList.add("newReviewBox");

    // Find the last review box element
    //const lastReviewBox = document.querySelector(".reviewBox:last-of-type");

    // Find the last review box element
    const reviewBoxes = document.querySelectorAll(".reviewBox");
    const lastReviewBox = reviewBoxes[reviewBoxes.length - 1];

    // Append the review box after the last review box
    lastReviewBox.insertAdjacentElement("afterend", reviewBox);

    // Clear the input field after submission
    myTextInput.value = "";
  }
});

const myButton2 = document.getElementById("colorButton");

myButton2.addEventListener("click", function() {
  alert("Change the color of all review boxes to blue");
  reviewBox.css("background-color", "blue");
});
*/

