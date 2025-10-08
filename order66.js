function executeOrder66() {
            // Supprimer d'autres thèmes si nécessaires
            const existing = document.getElementById('order66-style');
            if (existing) return;

            // Appliquer le style Star Wars
            const style = document.createElement('style');
            style.id = 'order66-style';
            style.innerHTML = `
              @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

              html, body {
                background-color: #000000 !important;
                color: #FFE81F !important;
                font-family: 'Share Tech Mono', monospace !important;
              }

              * {
                background-color: transparent !important;
                border: none !important;
                box-shadow: none !important;
              }

              h1, h2, h3, h4, h5, h6 {
                color: #FFE81F !important;
                text-shadow: 0 0 10px red;
              }

              a {
                color: #FF3C00 !important;
                text-decoration: none;
              }

              .projetCarte, .cmdModal, .projetModal {
                background-color: rgba(255, 255, 255, 0.05) !important;
                border: 1px solid #444;
              }

              .cmdHeader {
                background-color: #111;
              }

              .wave-bg {
                background: radial-gradient(circle, rgba(255,232,31,0.1) 0%, rgba(0,0,0,1) 100%) !important;
              }

              .projetTag {
                background-color: rgba(255, 255, 255, 0.1) !important;
                color: #FF3C00 !important;
              }

              .skill-logo {
                filter: grayscale(1) brightness(1.3) contrast(1.5);
              }

              /* Animation d'entrée */
              .order66-animation::before {
                content: "EXECUTE ORDER 66";
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: black;
                color: red;
                font-size: 3rem;
                font-family: 'Share Tech Mono', monospace;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 99999;
                animation: fadeOut 4s ease forwards;
              }

              @keyframes fadeOut {
                0% { opacity: 1; }
                100% { opacity: 0; display: none; }
              }
            `;
            document.head.appendChild(style);

            // Appliquer une animation d’entrée dramatique
            document.body.classList.add('order66-animation');

            // Ajouter une image ou logo Star Wars en fond
            const bg = document.createElement('div');
            bg.id = 'sw-background';
            bg.style.position = 'fixed';
            bg.style.top = 0;
            bg.style.left = 0;
            bg.style.width = '100vw';
            bg.style.height = '100vh';
            bg.style.zIndex = -1;
            bg.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/stardust.png')";
            bg.style.opacity = "0.2";
            document.body.appendChild(bg);
          }