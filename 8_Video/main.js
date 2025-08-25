const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slice")) {
    btn.classList.add("slice");
    video.pause();
  } else {
    btn.classList.remove("slice");
    video.play();
  }
});

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
