document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(
    ["headerColor", "footerColor", "sectionColor", "articleColor", "textColor", "linkColor"],
    (colors) => {
      for (const key in colors) {
        if (colors[key]) {
          const input = document.getElementById(key);
          if (input) input.value = colors[key];
        }
      }
    }
  );
});
document.getElementById("save").addEventListener("click", () => {
  const colors = {
    headerColor: document.getElementById("headerColor").value,
    footerColor: document.getElementById("footerColor").value,
    sectionColor: document.getElementById("sectionColor").value,
    articleColor: document.getElementById("articleColor").value,
    textColor: document.getElementById("textColor").value,
    linkColor: document.getElementById("linkColor").value
  };
  chrome.storage.sync.set(colors, () => {
    alert("Your theme has been successfully changed.Refresh the website to see the changes.");
    window.close();
  });
});
document.getElementById("reset").addEventListener("click", () => {
  chrome.storage.sync.remove(
    ["headerColor", "footerColor", "sectionColor", "articleColor", "textColor", "linkColor"],
    () => {
      alert("The website theme has returned to default.Refresh the website to see the changes.");
      window.close();
    }
  );
});