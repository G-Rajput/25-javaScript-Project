const usersList = document.querySelector(".users-list");
const loader = document.querySelector(".loader");
const scrollToTopButton = document.querySelector(".scroll-to-top-button");
const scrollToBottomButton = document.querySelector(".scroll-to-bottom-button");

function showLoader() {
  loader.classList.add("show-loader");
  usersList.classList.add("hide-users-list");
}

function removeLoader() {
  loader.classList.remove("show-loader");
  usersList.classList.remove("hide-users-list");
}

async function fetchUsersList() {
  showLoader();
  const response = await fetch("https://dummyjson.com/users?limit=100", {
    method: "GET",
  });

  const result = await response.json();

  if (result && result.users) {
    displayUsersList(result.users);
  }
  removeLoader();
}

function displayUsersList(getusers) {
  console.log(getusers);
  usersList.innerHTML = getusers
    .map(
      (user) =>
        `<li class='user'><p>${user.firstName} ${user.lastName}</p></li>`
    )
    .join(" ");
}

fetchUsersList();

scrollToTopButton.addEventListener("click", () => {
  //   window.scrollTo(0, 0);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollToBottomButton.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});
