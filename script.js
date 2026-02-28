const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const game = document.getElementById("game");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  intro.style.opacity = 0;
  setTimeout(() => {
    intro.classList.add("hidden");
    game.classList.remove("hidden");
  }, 1000);

  music.volume = 0;
  music.play();

  let fade = setInterval(() => {
    if (music.volume < 0.5) {
      music.volume += 0.02;
    } else {
      clearInterval(fade);
    }
  }, 200);
});
