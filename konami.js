function activateKonamiCodeEasterEgg() {
  const konamiSequence = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];
  let konamiProgress = [];

  window.addEventListener("keydown", function (e) {
    konamiProgress.push(e.key);
    if (konamiProgress.length > konamiSequence.length) {
      konamiProgress.shift();
    }

    if (konamiProgress.join(",") === konamiSequence.join(",")) {
      window.open("mario/index.html", "_blank");
      konamiProgress = [];
    }
  });
}

activateKonamiCodeEasterEgg();
