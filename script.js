// Hide loader after page loads
$(window).on("load", function () {
  $("#loader").fadeOut(500, function () {
    $(this).remove();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("background-music");
  const musicToggle = document.getElementById("music-toggle");
  const musicIcon = document.getElementById("music-icon");
  const closeIcon = document.getElementById("closeModal");
  const modelContainer = document.getElementById("modelContainer");
  const openModal = document.getElementById("openModal");
  // Try autoplay with silent start (for browser compliance)
  audio.muted = true;
  audio
    .play()
    .then(() => {
      audio.muted = false; // Unmute once it starts
    })
    .catch(() => {
      console.log("Autoplay blocked. Waiting for user interaction.");
    });

  closeIcon.addEventListener("click", function () {
    modelContainer.style.display = "none";
  });

  openModal.addEventListener("click", function () {
    modelContainer.style.display = "block";
  });

  // Toggle play/pause on button click
  musicToggle.addEventListener("click", function () {
    if (audio.paused) {
      audio.play().catch((error) => {
        console.log("Error playing audio:", error);
      });
      musicIcon.src = "pause.svg"; // Change to pause icon
    } else {
      audio.pause();
      musicIcon.src = "play.svg"; // Change to play icon
    }
  });
});
