const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const game = document.getElementById("game");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {

  intro.style.transition = "opacity 1.5s";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.classList.add("hidden");
    game.classList.remove("hidden");
  }, 1500);

  music.play().catch(() => {
    console.log("Music autoplay blocked");
  });
});
