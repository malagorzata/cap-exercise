const crown = document.querySelector("#crown");
const visor = document.querySelector("#visor");

let currentColor = "yellow";

function setColor(element, colorString) {
  element.style.fill = colorString;
}

function init() {
  setColor(crown, "hsl(350, 100%, 80%)");

  setColor(visor, "hsl(350, 100%, 17%)");

  crown.addEventListener("click", (event) => {
    setColor(event.target, currentColor);
    console.log(event.target);
  });

  visor.addEventListener("click", (event) => {
    setColor(event.target, currentColor);

    console.log(event.target);
  });
  document.querySelectorAll(".color-selector").forEach((element) => {
    element.addEventListener("click", (event) => {
      currentColor = event.target.style.backgroundColor;
    });
  });
}

init();
