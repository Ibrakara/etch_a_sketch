let resetButton = document.createElement('button')
let h1 = document.createElement('h1')
h1.textContent = 'ETCH-A-SKETCH'
document.body.appendChild(h1)
let container = document.createElement('div')
document.body.appendChild(container)
container.setAttribute('id', 'container')



container.appendChild(resetButton)
resetButton.textContent = 'Reset Button'

const table = document.createElement("table")
table.setAttribute("class", "table")
container.appendChild(table)

let tableRow, cell, cells;
let dim = 16;
let gridDensButton = document.createElement("button")
let randomRGBButton = document.createElement('button')

randomRGBButton.addEventListener('click', randomBackground)
resetButton.addEventListener('click', resetCells)


function resetCells() {
    for(let k = 0; k < (dim*dim); k++){
        cells[k].style.backgroundColor = 'white'
    }
}
    
function randomBackground (){
    for(let k = 0; k < (dim*dim); k++){
        var o = Math.round, r = Math.random, s = 255;
        let randomRGB = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';  
        cells[k].addEventListener("mouseover", function(){
        this.style.backgroundColor = randomRGB
    })
    }
}
gridDensButton.addEventListener("click", function() {
    dim = prompt("please give me the dimention up to 100", 100);
    while(dim > 100 || dim == null){
        alert('please enter a number less than 100!!!')
        dim = prompt("please give me the dimention up to 100", 100);
    }
    table.querySelector('tbody').remove()
    tableCreator(dim)
    return dim;
})

function tableCreator(dim) {   
    for(let i = 0; i < dim ; i++){
        tableRow = table.insertRow(i)    
        for(let j = 0; j < dim; j++){
            cell = tableRow.insertCell()
            cell.setAttribute("class", "cell")
        }
    }
    cells = document.querySelectorAll(".cell")

    for(let k = 0; k < (dim*dim); k++){
        cells[k].addEventListener("mouseover", function(){
        this.style.backgroundColor = "black"
    })
    }
}

tableCreator(dim)

container.appendChild(gridDensButton)
gridDensButton.textContent = "Set Grid Density"
container.appendChild(randomRGBButton)
randomRGBButton.textContent = 'Random RGB'










