function activateMatrixMode() {
  // 1. Crée les styles
  const style = document.createElement("style");
  style.innerHTML = `
    #matrixOverlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: black; z-index: 9999; display: block; overflow: hidden;
    }
    #matrixCanvas {
      width: 100%; height: 100%; display: block;
    }
    .matrix-buttons {
      position: absolute; bottom: 10%; left: 50%;
      transform: translateX(-50%);
      display: flex; gap: 2rem; z-index: 10000;
    }
    .matrix-buttons button {
      padding: 1rem 2rem; font-size: 1.2rem; font-weight: bold;
      border: none; border-radius: 8px; cursor: pointer;
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }
    .btn-red { background-color: #b91c1c; color: white; }
    .btn-blue { background-color: #1e3a8a; color: white; }
    .vortex-bg {
      animation: vortex 6s linear infinite;
      background: repeating-radial-gradient(#0f0 0%, #000 5%, #0f0 10%);
      background-size: 200% 200%;
    }
    @keyframes vortex {
      0% { background-position: 0 0; transform: scale(1) rotate(0deg); }
      100% { background-position: 100% 100%; transform: scale(1.2) rotate(720deg); }
    }
  `;
  document.head.appendChild(style);

  // 2. Crée l'overlay Matrix
  const html = `
    <div id="matrixOverlay">
      <canvas id="matrixCanvas"></canvas>
      <div class="matrix-buttons">
        <button class="btn-red" id="btnRed">Pilule Rouge</button>
        <button class="btn-blue" id="btnBlue">Pilule Bleue</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", html);

  // 3. Lancer l’effet Matrix sur canvas
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters = "アァイィウエオカキクケコサシスセソ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
      const char = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);

  // 4. Bouton Rouge = vortex, Bleu = reload
  document.getElementById("btnRed").onclick = () => {
    document.getElementById("matrixOverlay").classList.add("vortex-bg");
  };

  document.getElementById("btnBlue").onclick = () => {
    location.reload();
  };
}
