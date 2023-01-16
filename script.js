//Create the divs using JavaScript.
//put your grid squares inside another “container” div
//webpage with a 16x16 grid of square divs
let container = document.querySelector('.container');
container.style.gridTemplateColumns = 'repeat(16 , 1fr)';
container.style.gridTemplateRows = 'repeat(16 , 1fr)';

for (let i = 0; i < 256; i++) {
  let square = document.createElement('div');
  square.classList.add('cell');
  container.style.backgroundColor = ('#e0e0e0');
//change the div’s background color using JavaScript
  square.addEventListener('mouseover', () => {
    (square.style.backgroundColor = 'gray')
  });
  container.insertAdjacentElement('beforeend', square);
};
