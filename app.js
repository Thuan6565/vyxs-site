// Button Scripts -> scripts.html
document.addEventListener("DOMContentLoaded", () => {
    const scriptsBtn = document.getElementById("scriptsBtn");

    if (scriptsBtn) {
        scriptsBtn.addEventListener("click", () => {
            window.location.href = "scripts.html";
        });
    }
});

// Button Scripts -> scripts.html
document.addEventListener("DOMContentLoaded", () => {
    const scriptsBtn = document.getElementById("getbtn");

    if (scriptsBtn) {
        scriptsBtn.addEventListener("click", () => {
            window.location.href = "scripts.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const scriptsBtn = document.getElementById("upbtn");

    if (scriptsBtn) {
        scriptsBtn.addEventListener("click", () => {
            window.location.href = "upload.html";
        });
    }
});

fetch("scripts.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("scripts-container");

    data.forEach(script => {
      const box = document.createElement("div");
      box.className = "script-box";

      box.innerHTML = `
        <h2>${script.title}</h2>
        ${script.description ? `<p>${script.description}</p>` : ""}
        <button onclick="openGit('${script.link}')">
            Get on GitHub
        </button>
      `;

      container.appendChild(box);
    });
  });

function openGit(url) {
    window.open(url, "_blank");
}
