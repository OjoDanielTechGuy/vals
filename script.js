$(window).on("load", function () {
  $("#loader").fadeOut(500, function () {
    $(this).remove();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("background-music");
  const musicToggle = document.getElementById("music-toggle");
  const musicIcon = document.getElementById("music-icon");

  // Toggle play/pause
  musicToggle.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      musicIcon.textContent = "pause";
    } else {
      audio.pause();
      musicIcon.textContent = "play_arrow";
    }
  });
});

// Fetch data using AJAX (Simulated with setTimeout)
function fetchData(callback) {
  setTimeout(() => {
    const slides = [
      "❤️ Love",
      "💖 Passion",
      "💘 Forever",
      "💕 Together",
      "😍 Soulmates",
      "💞 Romance",
    ];
    callback(slides);
  }, 1000);
}

// Initialize Swipers
function initSwipers(slides) {
  const swiperWrapper1 = document.querySelector(".mySwiper1 .swiper-wrapper");
  const swiperWrapper2 = document.querySelector(".mySwiper2 .swiper-wrapper");

  slides.forEach((text) => {
    swiperWrapper1.innerHTML += `<div class="swiper-slide cursiveText ">${text}</div>`;
    swiperWrapper2.innerHTML += `<div class="swiper-slide cursiveText">${text}</div>`;
  });

  // Swiper Instances
  let swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    direction: "vertical", // Moves Top → Bottom
    speed: 1500,
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: { delay: 2000, disableOnInteraction: false },
  });

  let swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    direction: "vertical", // Moves Bottom → Top
    speed: 1500,
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      reverseDirection: true,
    },
  });

  // Sync Swipers
  swiper1.controller.control = swiper2;
  swiper2.controller.control = swiper1;
}

// Fetch and Initialize
fetchData(initSwipers);
