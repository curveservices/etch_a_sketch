//Create the divs using JavaScript.
//put your grid squares inside another “container” div
//webpage with a 16x16 grid of square divs
const container = document.querySelector('.container');

let row;
let column;

for (let j = 0; j < 16; j++){
    row = document.createElement('div');
    row.className = 'flex-container';
    row.setAttribute('id','grid-item')
    container.appendChild(row);

    for (let i = 0; i<16; i++){
        column = document.createElement('div');
        column.className = 'flexboxes';
        column.classList.add = 'rows'
        column.setAttribute('id', 'grid-item')
        column.innerText = 'a'
        row.appendChild(column);
    }
}
const settings = document.createElement('div');
settings.classList.add('settings')

container.append(settings);
