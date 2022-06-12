const grid = document.getElementById('grid');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');

let resolution = 34; 
let currentColor = '';
let currentMode = '';

//Making grid//
function makeGrid(size){
    makeRows(size);
    makeColumns(size);
    updateSizeValue();
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
const blackBtn = document.getElementById('black');
const pickColor = document.getElementById('input_color');
const pickBtn = document.getElementById('pick');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');
const slider = document.getElementById('pick_size');

blackBtn.onclick = () => setCurrentMode('black');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
pickColor.onchange = (e) => pickNewColor(e.target.value);
eraserBtn.onclick = () => setCurrentMode('#CEEFDA')
clearBtn.onclick = () => clearGrid();
slider.onmousemove = (e) => updateSizeValue(e.target.value);
slider.onchange = (e) => changeSize(e.target.value);


function setCurrentMode(newMode){
    currentMode = newMode;
}

function pickNewColor(newMode){
    currentMode = newMode;
    pickBtn.style.backgroundColor = currentMode;
}

function clearGrid(){
    grid.innerHTML = '';
    makeGrid(resolution);
}

function changeSize(newSize){
    updateSizeValue(newSize);
    resolution = newSize;
    clearGrid();
}

//Size section
function updateSizeValue(){
    document.getElementById('current_size').textContent = resolution + 'x' + resolution;
}

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

    else{
        e.target.style.backgroundColor = currentMode;
    }
}

window.onload = () => {
    makeGrid(resolution);
    currentMode = 'black';
}

