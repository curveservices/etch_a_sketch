//HTML button to run Javascript function 'onclick'

let color = 'black'

//Create the divs using JavaScript.
//put your grid squares inside another “container” div
function populateContainer(size){
  let container = document.querySelector('.container');
  let squares = container.querySelectorAll('div');
  squares.forEach(div=> div.remove());
container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size*size
for (let i = 0; i < amount; i++) {
  let square = document.createElement('div');
  square.classList.add('cell');
  container.style.backgroundColor = ('#e0e0e0');
//Set up a “hover” effect so that the grid divs change color
//change the div’s background color using JavaScript
  square.addEventListener('mouseover', colorSquare);
  container.insertAdjacentElement('beforeend', square);
};
}
//webpage with a 16x16 grid of square divs
populateContainer(16);

//add input asking for new grid
//set limit between 2px - 100px
function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateContainer(input);
  } else {
    console.log('input error! to many or to few squares');
  }
}

function colorSquare() {
  this.style.backgroundColor = color
}

function changeColor(choice) {
  color = choice;
}
