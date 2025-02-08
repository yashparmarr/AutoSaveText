const textarea = document.getElementById("autosave");
const saveKey = "autosaveText";

// Load saved text
textarea.value = localStorage.getItem(saveKey) || "";

// Auto-save on input
textarea.addEventListener("input", () => {
  localStorage.setItem(saveKey, textarea.value);
});
