var pesoSlider = document.getElementById("sliderPeso");
var pesoOutput = document.getElementById("pesotOutput");
var alturaSlider = document.getElementById("altura-slider");
var alturaOutput = document.getElementById("altura-output");

//function to be called from the html
function valorPeso(newVal){
  pesoSlider.value = newVal;
}

//add function from the js
pesoSlider.addEventListener("input", updateValueOutPutPeso );

function updateValueOutPutPeso(e){
  pesotOutput.value = e.srcElement.value;
}

function valorAltura(newVal){
  alturaSlider.value = newVal;
}

//add function from the js
alturaSlider.addEventListener("input", updateValueOutPutAltura );

function updateValueOutPutAltura(e){
  alturaOutput.value = e.srcElement.value;
}

const button = document.getElementById('btnCalcular');
button.addEventListener('click', function() {
  let peso = document.getElementById("pesoOutput").value;
  let altura = document.getElementById('altura-output').value;
  let alturaEmMetros = (altura / 100);
  let alturaAoQuadrado = (alturaEmMetros * alturaEmMetros);
  
  let imc = (peso / alturaAoQuadrado);
  
  let resultadoParagrafo = document.querySelector('#resultado p');
  resultadoParagrafo.innerHTML = imc.toFixed(2);
});