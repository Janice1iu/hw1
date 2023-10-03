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


