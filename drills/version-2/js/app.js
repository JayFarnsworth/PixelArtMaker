var buttons = document.getElementsByClassName('buttons');
var screen = document.getElementById('screen');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (event)=>{
    var tar = event.target.textContent;
    var eq = screen.textContent;
    var split = eq.split(' ');
    if (screen.textContent == 'Error') {
      screen.textContent = tar;
    } else if (tar == 'C') {
      screen.textContent = '';
    } else if (tar == '=') {
      if (split[0] == '0' && eq.includes('÷')) {
        screen.textContent = 'Error';
      } else {
      screen.textContent = eval(eq);}
    } else if (tar == '1'||tar == '2'||tar == '3'||tar == '4'||tar == '5'||tar == '6'||tar == '7'||tar == '8'||tar == '9'||tar == '0'){
      screen.textContent += tar;
    } else {
      screen.textContent += ' ' + tar + ' ';
    }
})
}
