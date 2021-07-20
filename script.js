var clickNumber1 = 0;
var clickNumber2 = 0;

function addToD1ClickNumber(amount) {
  clickNumber1 = clickNumber1 + amount;
  document.getElementById("d1ClickNumber").innerHTML = clickNumber1;
  
}

function addToD2ClickNumber(amount) {
  clickNumber2 = clickNumber2 + amount;
  document.getElementById("d2ClickNumber").innerHTML = clickNumber2;
  
}
