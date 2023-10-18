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

  // Define an array of alignment classes
  const alignClasses = ["text-start", "text-center", "text-end"];
  let alignIndex = 0; 

  button.addEventListener("click", () => {
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      column.classList.remove(...alignClasses); // Remove all alignment classes from the column
      column.classList.add(alignClasses[alignIndex]); // Add current alignment class to the column
    }

    // Increment the alignment index and wrap around if necessary
    alignIndex = (alignIndex + 1) % alignClasses.length;
  });
};

align();

// Task 3.2
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
        spotlightColumn.classList.add('col-12'); // full width for long text
      } else if (input.length > 50) {
        spotlightColumn.classList.add('col-md-6'); // 1/2 width on medium devices for medium size text
      } else {
        spotlightColumn.classList.add('col-md-4'); // 1/3 width on medium devices for short text
      }
    }
  });
};

handleSpotlight();

// Task 3.3
window.onload = () => {
  const showProgress = () => {
    const button = document.getElementById("task3-3-button");
    const progressBarContainer = document.querySelector(".progress");
    const progressBar = document.getElementById("task3-3-progress-bar");
    progressBarContainer.style.display = "none";

    // Get style property in stylesheet
    const computedStyle = window.getComputedStyle(progressBarContainer);

    const toggleProgressBar = () => {
      // Toggle the style.display of sec-navbar 
      if (computedStyle.display === "none") {
        progressBarContainer.style.display = "block";
        progressBarContainer.classList.add("sticky-top");
        console.log("Progress bar show");
      } else {
        progressBarContainer.style.display = "none";
        progressBarContainer.classList.remove("sticky-top");
        console.log("Progress bar hide");
      }
    }; 

    const updateProgress = () => {
      console.log("updating...");
      let y_pos = window.scrollY;
      let height = document.documentElement.scrollHeight - window.innerHeight;
      let width = String(Math.ceil((y_pos / height) * 100));
      let width_percent = Math.ceil((y_pos / height) * 100) + "%";
      console.log(width_percent);
      progressBar.style.width = width_percent;
      progressBar.setAttribute("aria-valuenow", width);
      console.log(progressBar.style.width); // check if width are correctly updated -> yes, but still shows empty bar on page (why?)
      console.log(progressBar.getAttribute("aria-valuenow"));
    };

    button.addEventListener("click", () => {
      console.log("click event triggered");
      toggleProgressBar();
      updateProgress(); // Update progress bar immediately when the button is clicked
    });

    document.addEventListener("scroll", () => {
      console.log("scroll event triggered");
      updateProgress();
    });
  };

  showProgress();
};

// Task 4,5,6
let commentID = 1002; // Starting ID for comments

// Add an event listener to load comments after the page has finished loading
window.addEventListener('load', () => {
  loadCommentsFromFile();
});

const processForm = () => {
  // Validate email format and check for emptiness 
  const validateEmail = () => {
    const emailInput = document.querySelector("#new-email");
    const emailError = document.querySelector("#new-email + .error-message");

    if (emailInput.validity.valueMissing) {
      emailError.textContent = "Email is required.";
      emailInput.classList.add("is-invalid");
      return false;
    } else if (emailInput.validity.typeMismatch) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.classList.add("is-invalid");
      return false;
    } else {
      emailError.textContent = "";
      emailInput.classList.remove("is-invalid");
      return true;
    }
  };

  // Validate if comment is not empty 
  const validateComment = () => {
    const commentInput = document.querySelector("#new-comment");
    const commentError = document.querySelector("#new-comment + .error-message");

    if (commentInput.validity.valueMissing) {
      commentError.textContent = "Comment is required.";
      commentInput.classList.add("is-invalid");
      return false;
    } else {
      commentError.textContent = "";
      commentInput.classList.remove("is-invalid");
      return true;
    }
  };

  const isEmailValid = validateEmail();
  const isCommentValid = validateComment();

  if (!isEmailValid || !isCommentValid) {
    return;
  }

  // Save comment to file
  saveCommentToFile();

  // Load comments from file and update the comments section
  loadCommentsFromFile();
};

const saveCommentToFile = () => {
  const emailInput = document.getElementById('new-email');
  const commentInput = document.getElementById('new-comment');
  const colorInput = document.querySelector("input[name=new-color]:checked");
  const email = emailInput.value;
  const comment = commentInput.value;
  const color = colorInput.value;
  const text = `${email}:${comment}:${color}\n`;

  // Fetch the existing file content from "hw1_file.txt"
  fetch("hw1_file.txt")
    .then(response => response.text())
    .then(data => {
      const existingContent = data;
      const updatedContent = existingContent + text;

      // Send a PUT request to update the file content with new data
      return fetch("hw1_file.txt", {
        method: "PUT",
        body: updatedContent,
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    })
    .then(response => {
      // Check if the file was saved successfully
      if (response.ok) {
        // Load comments from file and update the comments section
        loadCommentsFromFile();
        alert("Comment saved successfully.");
      } else {
        alert("Error saving comment.");
      }
    })
    .catch(error => {
      console.error("Error saving comment:", error);
    });
};

const loadCommentsFromFile = () => {
  let contentElement = document.getElementById("comment");

  // Fetch the file content from "hw1_file.txt"
  fetch("hw1_file.txt")
    .then(response => response.text())
    .then(data => {
      const emailCommentColorPairs = data.split('\n');
      let htmlContent = '';

      // Process each email, comment, and color pair
      for (const pair of emailCommentColorPairs) {
        if (pair !== '') {
          const [email, comment, color] = pair.split(':');
          const newCommentId = `c${commentID}`;

          // Construct the HTML content for each pair
          htmlContent += `<div id="${newCommentId}" class="d-flex">
                            <div class="flex-shrink-0 circle-show">
                              <svg height="80" width="80">
                                <circle cx="35" cy="35" r="30" fill="${color}">
                              </svg>
                            </div>
                            <div class="flex-grow-1 email-show">
                              <h5>${email}</h5>
                              <p>${comment}</p>
                            </div>
                          </div>`;

          commentID++; // Increment comment ID for the next comment
        }
      }

      // Set the generated HTML content to the comment element
      contentElement.innerHTML = htmlContent;
    })
    .catch(error => {
      console.error("Error loading comments:", error);
    });
}; 