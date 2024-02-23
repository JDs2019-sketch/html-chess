
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");


  setTimeout(function () {
    sections.forEach(function (section) {
      section.classList.add("animate");
    });
  }, 100);
});


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const title = document.querySelector("header h1");
  const header = document.querySelector("header");
  const button = document.querySelector("button");


  setTimeout(function () {
    sections.forEach(function (section) {
      section.classList.add("animate");
    });
  }, 100);


  setTimeout(function () {
    title.classList.add("fadeInTitle");
  }, 200);


  setTimeout(function () {
    header.classList.add("fadeInHeader");
  }, 300);


  setTimeout(function () {
    button.classList.add("scaleButton");
  }, 400);
});
