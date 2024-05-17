const changeThemeBtn = document.querySelector(".change-theme-btn");
const body = document.querySelector("body");
body.setAttribute("data-theme", "dark");

changeThemeBtn.setAttribute("data-theme", "dark");
changeThemeBtn.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
  }
  if (changeThemeBtn.getAttribute("data-theme") === "dark") {
    changeThemeBtn.setAttribute("data-theme", "light");
  } else {
    changeThemeBtn.setAttribute("data-theme", "dark");
  }
  console.log(changeThemeBtn.getAttribute("data-theme"));
});
