const tabContainer = document.querySelector(".container");
const tabs = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".content");

tabContainer.addEventListener("click", (event) => {
  console.log(event.target.dataset);
  const currentId = event.target.dataset.id;

  if (currentId) {
    tabs.forEach((btn) => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");

    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    const currentElement = document.getElementById(currentId);
    currentElement.classList.add("active");
  }
});
