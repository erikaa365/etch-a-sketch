const grid = document.getElementById('grid');
let rows = document.getElementsByClassName('gridRow');


function makeGrid(size){
    makeRows(size);
    makeColumns(size);
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
            rows[j].appendChild(newCell).className = 'cell';
        }
    }
}


makeGrid(20);