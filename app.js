// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon Toggling
const toggleIcon = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

// Initial Theme Check
const checkTheme = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    sunIcon.classList.remove("display-none");
  }
  sunIcon.classList.add("display-none");
};

// Manual Theme Switch
const switchTheme = () => {
  console.log("GGGGGGGGGGGGGGGG", document.documentElement);

  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "");
    toggleIcon();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  toggleIcon();
};

// call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
  switchTheme();
});

moonIcon.addEventListener("click", () => {
  switchTheme();
});

// invoke
checkTheme();
