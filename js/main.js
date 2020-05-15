
const titulo = document.querySelector('header div h1');
const  subtitle = document.getElementById('sub');
const  frase= document.getElementById('frase');


function typeWriter(elemento){
  const arrayTxt = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  arrayTxt.forEach((letra, i) =>{
    setTimeout(() =>{elemento.innerHTML += letra;}, 200*i)
  });
}


typeWriter(titulo);
