function activateFightClubEasterEgg() {
  // Inject styles Fight Club
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes flicker {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    @keyframes glitch {
      0% { transform: none; }
      20% { transform: translate(-2px, 2px) skew(0.5deg); }
      40% { transform: translate(2px, -1px) skew(-0.5deg); }
      60% { transform: translate(-1px, 2px) skew(0.3deg); }
      80% { transform: translate(1px, -1px) skew(-0.3deg); }
      100% { transform: none; }
    }
    .fight-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      animation: flicker 0.2s steps(2, start) 5;
    }
    .fight-message {
      color: #ff0044;
      font-size: 3rem;
      font-weight: 900;
      font-family: 'Impact', 'Arial Black', sans-serif;
      text-transform: uppercase;
      text-shadow: 2px 2px #000;
      opacity: 0;
      animation: showMessage 0.6s ease-in-out 1.2s forwards;
    }
    @keyframes showMessage {
      to { opacity: 1; }
    }
    .glitch-all * {
      animation: glitch 1s infinite;
    }
  `;
  document.head.appendChild(style);

  // Création de l’overlay
  const overlay = document.createElement("div");
  overlay.className = "fight-overlay";
  overlay.innerHTML = `<div class="fight-message">You do not talk about Fight Club</div>`;
  document.body.appendChild(overlay);

  // Supprime l'overlay avant le glitch pour qu'on voie le site
  setTimeout(() => {
    overlay.remove();
    document.body.classList.add("glitch-all");
  }, 2500);
}
