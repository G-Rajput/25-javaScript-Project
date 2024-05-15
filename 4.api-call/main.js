const postsListContainer = document.querySelector(".posts-list-container");

const url = "https://jsonplaceholder.typicode.com/posts";

// Fetch using XHR

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      displayResults(xhr.response);
    } else {
      console.log("Some Error Ocurred !");
    }
  };
}

//Fetch using fetch method

function fetchUsingFetchMethod() {
  const fetchRequest = fetch(url, { method: "GET" });
  fetchRequest
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((e) => console.log(e));
}

function displayResults(posts) {
  postsListContainer.innerHTML = posts
    .map(
      (postItem) => `<div class="post-item">
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p></div>`
    )
    .join(" ");
}

// fetchUsingXHR();

fetchUsingFetchMethod();
