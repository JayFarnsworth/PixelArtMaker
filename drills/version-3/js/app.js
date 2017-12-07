var brush;
var eraser = document.getElementsByClassName("erase")[0];
eraser.addEventListener('click', ()=>{
  brush = 'white';
})
function createCanvas() {
  for (var i = 0; i < 100; i++) {
    newSquare = document.createElement('div');
    newSquare.id = i;
    newSquare.setAttribute('class', 'square');
    document.getElementById('canvas').appendChild(newSquare);
    addClickListenerCanvas(newSquare);
  }
}
function createPalette() {
  for (var i = 0; i < 10; i++) {
    newColor = document.createElement('div');
    newColor.id = i;
    switch(i) {
      case 0:
        newColor.setAttribute('class', 'black');
        newColor.style.backgroundColor = 'black';
        break;
      case 1:
        newColor.setAttribute('class', 'white');
        newColor.style.backgroundColor = 'white';
        break;
      case 2:
        newColor.setAttribute('class', 'red');
        newColor.style.backgroundColor = 'red';
        break;
      case 3:
        newColor.setAttribute('class', 'orange')
        newColor.style.backgroundColor = 'orange';
        break;
      case 4:
        newColor.setAttribute('class', 'yellow')
        newColor.style.backgroundColor = 'yellow';
        break;
      case 5:
        newColor.setAttribute('class', 'green')
        newColor.style.backgroundColor = 'green';
        break;
      case 6:
        newColor.setAttribute('class', 'turquoise')
        newColor.style.backgroundColor = 'turquoise';
        break;
      case 7:
        newColor.setAttribute('class', 'blue')
        newColor.style.backgroundColor = 'blue';
        break;
      case 8:
        newColor.setAttribute('class', 'purple')
        newColor.style.backgroundColor = 'purple';
        break;
      case 9:
        newColor.setAttribute('class', 'grey')
        newColor.style.backgroundColor = 'grey';
        break;
    };
    newColor.setAttribute('class', 'color');
    document.getElementById('palette').appendChild(newColor);
    addClickListenerColors(newColor);
  }
}
function addClickListenerCanvas(element) {
  element.addEventListener('click', ()=>{
    event.target.style.backgroundColor = brush;
    console.log(event.target.id);
  })
};
function addClickListenerColors(element) {
  element.addEventListener('click', ()=>{
    brush = event.target.style.backgroundColor;
    console.log(brush);
  })
};
createCanvas();
createPalette();
