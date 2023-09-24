window.addEventListener("DOMContentLoaded", function (event) {
  updateTheme();
});

document.getElementById("toggle").addEventListener("click", function (event) {
  event.preventDefault();

  document.documentElement.classList.add("transition");
  setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);

  if (localStorage.theme === "light") {
    localStorage.theme = "dark";
  } else if (localStorage.theme === "dark") {
    localStorage.removeItem("theme");
  } else {
    localStorage.theme = "light";
  }

  document.documentElement.classList.add("transition");
  setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);

  updateTheme();
});

function updateTheme() {
  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const mode = localStorage.theme || "pref";

  const pref = document.getElementById("pref");
  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");
  if (mode === "pref") {
    pref.classList.remove("hidden");
    sun.classList.add("hidden");
    moon.classList.add("hidden");
  } else if (mode === "light") {
    pref.classList.add("hidden");
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
  } else {
    pref.classList.add("hidden");
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
  }
}
