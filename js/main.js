//navbar scroll

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

//CLASSES
let btn = document.querySelector(".button-container");
let features = document.querySelector("#features-container");

btn.addEventListener("click", (e) => {
  features.classList.remove("features-container");
  void features.offsetWidth;
  features.classList.add("features-container");
  switch (e.target.id) {
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
      return;
  }
});

function yoga() {
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Yoga?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Yoga Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  document.querySelector("#features-container img").src = "img/yoga.jpg";
}

function group() {
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Group?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum`;
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Group Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  document.querySelector("#features-container img").src = "img/group.webp";
}

function solo() {
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Solo?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Solo Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  document.querySelector("#features-container img").src = "img/solo.jpg";
}

function stretch() {
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Stretch?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporisodio
    pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum
    repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Stretch Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  document.querySelector("#features-container img").src = "img/stret.webp";
}

//BMI CALCULATION

let tri = document.querySelector(".triangle");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");

weight.addEventListener("input", () => {
  let bmi = weight.value / (height.value / 100) ** 2;
  let percentage;
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

  if (percentage > 6 && percentage < 88) {
    tri.style.left = `${percentage}%`;
  }
});
