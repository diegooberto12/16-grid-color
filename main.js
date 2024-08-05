const container = document.getElementById("container");




function CrearHilera(padre){
    for (let i = 0; i < 16; i++){

const cuadrado = document.createElement("div");

cuadrado.classList.add("style-1");

cuadrado.textContent=`este cuadro es ${i + 1}`;

padre.appendChild(cuadrado);
}};

for (let i = 0; i < 16; i++){

const rectangulo = document.createElement("div");

rectangulo.classList.add("style-2");

CrearHilera(rectangulo);

container.appendChild(rectangulo);
};