// console.log("helloWorld!");

const varTitulo = document.getElementById("titulo");
const varTexto =document.getElementById("texto");

cinst Lista textos = ["uno","dos","tres","cuatro","cinco"];

let estadoInicial=true;
let indice =0;
// console.log("helloWorld!");

const varTitulo = document.getElementById("titulo");

varTitulo.addEventListener("click", () => {
    if (estadoInicial === true) {
        varTitulo.innerText = "¡Buenos días!";
        varTitulo.style.color = "blue";
        varTitulo.style.backgroundColor = "yellow";
    } else {
        varTitulo.innerText = "¡Hola Mundo!";
        varTitulo.style.color = "red";
        varTitulo.style.backgroundColor = "transparent";
    }
});


varTitulo.addEventListener("click" , ()=>{

})
varTexto.addEventListener("click", ()=> {
varTexto.innerText = listaTextos[indice];
indice =indice + 1;
}else{
varTexto.innerText ="fin";
}
})