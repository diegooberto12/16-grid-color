const container = document.getElementById("container");

function coloresRandom(){
const colores = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
color="#";
coloresaSize=colores.length
for (let i =0 ; i < 6; i++){
randomletter= Math.floor(Math.random()* coloresaSize)
color += colores[randomletter];
}
return color
}


function CrearHilera(padre){
    for (let i = 0; i < 16; i++){

const cuadrado = document.createElement("div");

cuadrado.classList.add("style-1");

cuadrado.textContent=`este cuadro es ${i + 1}`;
cuadrado.addEventListener("mouseover",() => {

    cuadrado.style.backgroundColor = coloresRandom();
    console.log(cuadrado.style.backgroundColor);
    
} )
// cuadrado.addEventListener("click", () =>{
//     cuadrado.style.backgroundColor= coloresRandom()
// })

padre.appendChild(cuadrado);
}};

for (let i = 0; i < 16; i++){

const rectangulo = document.createElement("div");

rectangulo.classList.add("style-2");

CrearHilera(rectangulo);

container.appendChild(rectangulo);


};



