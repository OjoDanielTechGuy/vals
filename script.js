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
