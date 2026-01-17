let value = 0;
let saveEl = document.getElementById("save-el");

function addno() {
  value++;
  document.getElementById("value").innerHTML = value;
}

function decno() {
  value--;
  document.getElementById("value").innerHTML = value;
}

function saveno() {
  console.log("Value saved: " + value);
  let valueStr = value + ", ";
  saveEl.textContent += valueStr;
  value = 0;
  document.getElementById("value").innerHTML = value;
}



