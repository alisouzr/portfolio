window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function() {
  var work = document.querySelector(".work");
  work.style.opacity = 1 - window.scrollY / 500;
})
