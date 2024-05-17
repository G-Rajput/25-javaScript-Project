const quoteWrapper = document.querySelector(".quote-wrapper");
const refreshBtn = document.querySelector(".refresh-button");

function fetchRandomQuotes() {
  fetch("https://api.quotable.io/quotes/random")
    .then((response) => response.json())
    .then((result) => {
      if (result) {
        displayQuote(result[0]);
      }
    })
    .catch((e) => console.log(e));
}

function displayQuote(getQuote) {
  console.log(getQuote);
  quoteWrapper.innerHTML = `<div class= 'quote-item'>
    <p>${getQuote.author}</p>
    <p>${getQuote.content}</p>
    <p>${getQuote.dateAdded}</p>
    <p>${getQuote.tags[0]}</p>
    </div>`;
}

fetchRandomQuotes();

refreshBtn.addEventListener("click", () => {
  fetchRandomQuotes();
});
