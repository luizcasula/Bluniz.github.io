
const titulo = document.querySelector('header div h1');
const  subtitle = document.getElementById('sub');
const  frase= document.getElementById('frase');
const  sobreCorpo = document.getElementById('stats');
const btn = document.getElementById('btn');
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');

var i = 0;


//teste
console.log(btn);
console.log(sobreCorpo);
//

btn.onclick = typeOpacity;

function typeWriter(elemento){
  const arrayTxt = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  arrayTxt.forEach((letra, i) =>{
    setTimeout(() =>{elemento.innerHTML += letra;}, 200*i)
  });
}

function typeOpacity(){
  if(i === 0){
  sobreCorpo.style.opacity = '1';
  btn.innerHTML = 'Esconder';
  i = 1;
}  else{
  sobreCorpo.style.opacity = '0';
  btn.innerHTML = 'Clique aqui';
  i = 0;

}

  
}


typeWriter(titulo);
