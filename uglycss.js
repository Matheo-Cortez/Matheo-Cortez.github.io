function applyUglyCSS() {
        const style = document.createElement('style');
        style.innerHTML = `
          body {
            background-color: #ffccff !important;
            font-family: "Comic Sans MS", cursive, sans-serif !important;
            color: #00ff00 !important;
          }
          h1, h2, h3, h4, h5, h6 {
            color: #ff0000 !important;
            text-shadow: 2px 2px #000000;
          }
          p {
            background-color: #ffff00 !important;
            padding: 10px;
            border: 3px dotted blue;
          }
          button {
            background-color: cyan !important;
            color: darkred !important;
            font-weight: bold;
            border: 4px double black;
            padding: 10px 20px;
          }
          a {
            color: magenta !important;
            text-decoration: underline wavy red;
          }
          * {
            transition: none !important;
          }
        `;
        document.head.appendChild(style);
      }