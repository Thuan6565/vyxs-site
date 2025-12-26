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

<script>
function uploadScript() {
    const title = document.getElementById("title").value;
    const desc  = document.getElementById("desc").value;
    const link  = document.getElementById("link").value;

    if (!title || !link) {
        alert("Please fill required fields");
        return;
    }

    const issueBody =
`### Script Description
${desc}

### Script Link
${link}

### Submitted via VyXs`;

    const issueUrl =
`https://github.com/Thuan6565/script-Vyxs/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(issueBody)}`;

    // Hiện thông báo
    const toast = document.getElementById("toast");
    toast.style.display = "block";

    // Ẩn sau khi chuyển
    setTimeout(() => {
        window.location.href = issueUrl;
    }, 1800); // 1.8s
}
</script>

