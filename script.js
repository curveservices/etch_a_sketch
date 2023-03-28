//HTML button to run Javascript function 'onclick'
// ----------------------------------------------
let color = "black";

//Create the divs using JavaScript.
//put grid squares inside “container” div
function populateContainer(size) {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    container.style.backgroundColor = "#e0e0e0";
    //Set up “hover” effect so the divs change color using JavaScript
    square.addEventListener("mouseover", colorSquare);
    container.insertAdjacentElement("beforeend", square);
  }
}
//webpage with a 16x16 grid of square divs
populateContainer(16);

//add input asking for new grid, set limit between 2px - 100px
function changeSize(input) {
  input >= 2 && input <= 100 ? populateContainer(input) : console.log("input error! to many or to few squares");
};

// random color found thanks to stack overflow!!
function colorSquare() {
  color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
}

function changeColor(choice) {
  color = choice;
}

function resetContainer() {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "#e0e0e0"));
}
