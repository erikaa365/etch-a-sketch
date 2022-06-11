const grid = document.getElementById('grid');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
let resolution = 28; 

let currentColor = '';
let currentMode = '';

//Making grid//
function makeGrid(size){
    makeRows(size);
    makeColumns(size);
    console.log(cells);
    console.log(cells.length);
}

function makeRows(rowNum){
    for(r = 0; r < rowNum; r++){
        let row = document.createElement('div');
        grid.appendChild(row).className = 'gridRow';
    }
}
    
function makeColumns(cellNum){
    for(i = 0; i < rows.length; i++){
        for(j = 0; j < cellNum; j++){
            let newCell = document.createElement('div');
            newCell.addEventListener('mouseover', draw);
            newCell.addEventListener('mousedown', draw);
            rows[j].appendChild(newCell).className = 'cell';
        }
    }
}

//Button actions//
const blackbtn = document.getElementById('black');
const pickbtn = document.getElementById('pick');
const rainbowbtn = document.getElementById('rainbow');
const eraserbtn = document.getElementById('eraser');
const clearbtn = document.getElementById('clear');

blackbtn.onclick = () => setCurrentMode('black');
rainbowbtn.onclick = () => setCurrentMode('rainbow');
//pickbtn.onclick = () => setCurrentMode('pickColor);
eraserbtn.onclick = () => setCurrentMode('#CEEFDA')
clearbtn.onclick = () => clearGrid();



function setCurrentMode(value){
    currentMode = value;
}

function clearGrid(){
    grid.innerHTML = '';
    makeGrid(resolution);
}

//Size section
document.getElementById('current_size').textContent = resolution + 'x' + resolution;

//Drawing//
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function draw(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    

    if(currentMode == 'rainbow'){
        const r = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        let rainbow = `rgb(${r}, ${g}, ${b})`;
        e.target.style.backgroundColor = rainbow;
    }

    if(currentMode == 'pickColor'){

    }

    else{
        e.target.style.backgroundColor = currentMode;
    }
}

window.onload = () => {
    makeGrid(resolution);
    currentMode = 'black';
}

