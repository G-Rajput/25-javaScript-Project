const HexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".hex-copy-color");

//create hex color
HexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }

  const hexColor = `#${hexColorOutput}`;
  hexColorValue.textContent = hexColor;
  hexColorContainer.style.backgroundColor = hexColor;
  HexBtn.style.color = hexColor;
});

//RGB Color Generator

const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbColorValue = document.querySelector(".rgb-color-value");
const rgbCopyBtn = document.querySelector(".rgb-copy-color");

rgbBtn.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;
  const rgbColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`;
  rgbColorValue.textContent = rgbColor;
  rgbColorContainer.style.backgroundColor = rgbColor;
  rgbBtn.style.color = rgbColor;
});

function copyHexColorToClipBoard() {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("Hex Color is copied to clipboard");
}

hexCopyBtn.addEventListener("click", copyHexColorToClipBoard);

function copyRgbColorToClipBoard() {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("RGB Color is copied to clipboard");
}

rgbCopyBtn.addEventListener("click", copyRgbColorToClipBoard);
