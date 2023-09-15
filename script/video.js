document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".video-container");

  videoContainers.forEach(function (container) {
    const video = container.querySelector("video");

    container.addEventListener("mouseenter", function () {
      video.play();
    });

    container.addEventListener("mouseleave", function () {
      video.pause();
    });
  });
});
