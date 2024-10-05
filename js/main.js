// Add an event listener for the scroll event
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  // If the vertical scroll is greater than 50 pixels, add the 'scrolled' class
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    // Remove the 'scrolled' class if the scroll position is less than or equal to 50 pixels
    nav.classList.remove("scrolled");
  }
});

// CLASSES
let buttons = document.querySelectorAll(".button-container button"); // Select all buttons in the button container
let features = document.querySelector("#features-container"); // Select the features container

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove 'selected' class from all buttons and add it to the clicked button
    buttons.forEach((btn) => btn.classList.remove("selected"));
    this.classList.add("selected");

    // Switch case to determine which button was clicked and call the corresponding function
    switch (this.id) {
      case "yoga":
        yoga();
        break;
      case "group":
        group();
        break;
      case "solo":
        solo();
        break;
      case "stretch":
        stretch();
        break;
      default:
        return; // Exit the function if no case matches
    }
  });
});

// Function to update content for Yoga
function yoga() {
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Yoga?"; // Update heading
  document.querySelectorAll("#features-container p")[0].innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!";
  // Update schedule details
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Yoga Your Time.";
  document.querySelectorAll("#features-container p")[1].innerHTML =
    "Saturday-Sunday: 8:00am - 10:00pm";
  document.querySelectorAll("#features-container p")[2].innerHTML =
    "Monday-Tuesday: 8:00am - 10:00pm";
  document.querySelectorAll("#features-container p")[3].innerHTML =
    "Wednesday-Friday: 8:00am - 10:00pm";
  document.querySelector("#features-container img").src = "img/yoga.jpg"; // Update image source
}

// Function to update content for Group classes
function group() {
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Group?"; // Update heading
  document.querySelectorAll("#features-container p")[0].innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum.";
  // Update schedule details
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Group Your Time.";
  document.querySelectorAll("#features-container p")[1].innerHTML =
    "Saturday-Sunday: 8:00am - 10:00pm";
  document.querySelectorAll("#features-container p")[2].innerHTML =
    "Monday-Tuesday: 8:00am - 10:00pm";
  document.querySelectorAll("#features-container p")[3].innerHTML =
    "Wednesday-Friday: 8:00am - 10:00pm";
  document.querySelector("#features-container img").src = "img/group.webp"; // Update image source
}

// Function to update content for Solo classes
function solo() {
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Solo?"; // Update heading
  document.querySelectorAll("#features-container p")[0].innerHTML =
    "In, nihil recusandae. Atque, illum corporisodio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!";
  // Update schedule details
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Solo Your Time.";
  document.querySelectorAll("#features-container p")[1].innerHTML =
    "Saturday-Sunday: 8:00am - 10:00pm";
  document.querySelectorAll("#features-container p")[2].innerHTML =
    "Monday-Tuesday: 8:00am - 10:00pm";
  document.querySelectorAll("#features-container p")[3].innerHTML =
    "Wednesday-Friday: 8:00am - 10:00pm";
  document.querySelector("#features-container img").src = "img/solo.jpg"; // Update image source
}

// Function to update content for Stretch classes
function stretch() {
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Stretch?"; // Update heading
  document.querySelectorAll("#features-container p")[0].innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!";
  // Update schedule details
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Stretch Your Time.";
  document.querySelectorAll("#features-container p")[1].innerHTML =
    "Saturday-Sunday: 8:00am - 10:00pm";
  document.querySelectorAll("#features-container p")[2].innerHTML =
    "Monday-Tuesday: 8:00am - 10:00pm";
  document.querySelectorAll("#features-container p")[3].innerHTML =
    "Wednesday-Friday: 8:00am - 10:00pm";
  document.querySelector("#features-container img").src = "img/stret.webp"; // Update image source
}

// BMI CALCULATION

let tri = document.querySelector(".triangle"); // Select the triangle element
let height = document.querySelector("#height"); // Select the height input
let weight = document.querySelector("#weight"); // Select the weight input

// Add an event listener to the weight input for changes
weight.addEventListener("input", () => {
  // Calculate BMI
  let bmi = weight.value / (height.value / 100) ** 2;
  let percentage;

  // Calculate percentage based on BMI value
  if (bmi > 13.5 && bmi < 18.5) {
    percentage = 7 + ((bmi - 13.5) * 16) / 5;
  } else if (
    (bmi > 25 && bmi < 30) ||
    (bmi >= 30 && bmi < 35) ||
    (bmi >= 35 && bmi < 40)
  ) {
    percentage = 40 + ((bmi - 24.5) * 16) / 5;
  } else if (bmi >= 18.5 && bmi < 25) {
    percentage = 23 + ((bmi - 18.5) * 16) / 7;
  }

  // Update the position of the triangle based on the calculated percentage
  if (percentage > 6 && percentage < 88) {
    tri.style.left = `${percentage}%`;
  }
});
