function simulateBSOD() {
          // Crée un écran bleu
          const bsod = document.createElement('div');
          bsod.id = 'bsod-simulation';
          bsod.style.position = 'fixed';
          bsod.style.top = 0;
          bsod.style.left = 0;
          bsod.style.width = '100vw';
          bsod.style.height = '100vh';
          bsod.style.backgroundColor = '#0000AA';
          bsod.style.color = '#FFFFFF';
          bsod.style.fontFamily = 'Consolas, monospace';
          bsod.style.fontSize = '18px';
          bsod.style.zIndex = 99999;
          bsod.style.padding = '2rem';
          bsod.style.display = 'flex';
          bsod.style.flexDirection = 'column';
          bsod.style.justifyContent = 'center';
          bsod.style.alignItems = 'center';
          bsod.innerHTML = `
            <div>
              <p>A problem has been detected and Windows has been shut down to prevent damage<br>to your computer.</p>
              <p>If this is the first time you've seen this Stop error screen,<br>restart your computer. If this screen appears again, follow<br>these steps:</p>
              <p>Check to make sure any new hardware or software is properly installed.<br>If this is a new installation, ask your hardware or software manufacturer<br>for any Windows updates you might need.</p>
              <p>If problems continue, disable or remove any newly installed hardware<br>or software. Disable BIOS memory options such as caching or shadowing.</p>
              <p>Technical information:<br>*** STOP: 0x0000007B (0xFFFFF880009A9928, 0xFFFFFFFFC0000034, ...)</p>
              <p>Collecting crash dump ...</p>
              <p>Please wait...</p>
            </div>
          `;
          setTimeout(() => {
            document.body.appendChild(bsod);
          }, 10000);

          // Supprimer l'écran BSOD après 10 secondes
          setTimeout(() => {
            bsod.remove();
          }, 20000);
        }