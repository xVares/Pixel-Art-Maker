// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//global variables
const height = document.querySelector('#inputHeight')
const width = document.querySelector('#inputWidth')
const gridTable  = document.querySelector('#pixelCanvas')
const colorPicker = document.querySelector('#colorPicker')
const submitButton  = document.querySelector('#button')


//function insert <tr> & <td> elements to <table>
function makeGrid() {
  
  gridTable.innerHTML = "";
  
  for(let r = 1; r <= height.value; r++){
    //const newTr = document.createElement('tr');
    //gridTable.appendChild(newTr);
    const row = gridTable.insertRow();
    
    for(let c = 1; c <= width.value; c++){
      //const newTd = document.createElement('td');
      //newTr.appendChild(newTd);
      row.insertCell()
    }
  }
  const tableCells  = document.querySelectorAll('td')
  
  tableCells.forEach(function (cell){
    cell.addEventListener('click', function (e){
      
      if(e.target.style.backgroundColor === ""){
        // console.log(e.target.style.backgroundColor)
          e.target.style.backgroundColor = colorPicker.value;
        }else {
          e.target.style.backgroundColor = "";
        }
    });
  }); 
}

//prevent default & create grid
submitButton.addEventListener('click', function(click) {
  click.preventDefault();
  makeGrid();
});






