"use strict";
const producto = {
    producto: "Libro",
    precio: 18.99,
    stock: true,
    toString: function(){
        return `Producto: ${this.producto} - Precio: ${this.precio}\$ - Stock: ${this.stock}`
    }
};

console.log(producto.toString());
console.log("Nombre: ", producto.producto);
console.log("Precio: ", producto.precio);
console.log("Stock: ", producto.stock);
console.log(`Producto: ${producto.producto} - Precio: ${producto.precio}\$ - Stock: ${producto.stock}`);

const flecha = (precio, unidades) => precio * unidades;
console.log("Total: ", flecha(12.5, 7));

// Crear una array de 3 objetos productos (nombre/precio)
// funcion de todo sumado

const productos = [{nombre: "Libro", precio: 19.99}, {nombre: "Ratón gaming", precio: 39.99}, {nombre: "Teclado mecánico", precio: 29.99}];
console.log(productos);

const total = (precio1, precio2, precio3) => precio1 + precio2 + precio3;
console.log("Total: ", total(productos[0].precio, productos[1].precio, productos[2].precio));

//uwu
const app = document.querySelector("#app");
const Nombre = "1º DAM, incultos";
app.textContent = `Hola ${Nombre}`;
app.innerHTML = `<div>
Hola<strong>
        ${Nombre}
    </strong>
</div>`;
//Metodos modernos getters y setters
console.log(app.getHTML());
const cod = `<strong>
        Despierta Ismael
    </strong>`;
app.setHTMLUnsafe(cod);

//Crear elementos HTML
const contenedor = document.createElement("section");
console.log(contenedor.isConnected);    //false -> no esta conectado/insertado
contenedor.innerHTML = "<p>Estoy creando una seccion a traves del metodo create elements</p>";
//Lo insertamos 
document.body.appendChild(contenedor);
console.log(contenedor.isConnected);

const seccion = contenedor;   //Esto no es una copia, sino una referencia en memoria al mismo elemento
//Si queremos copiar y clonar el elemento 
const section = contenedor.cloneNode(true);

//ejercicio container
const texto = document.querySelector("#container");
container.innerHTML = `<div>
    <strong>
        Hola
    </strong>
</div>`;
const div = document.createElement("div");
const strong = document.createElement("strong");
strong.textContent = `Malaga 3 - Burgos 0`;
div.appendChild(strong);
texto.appendChild(div);
document.body.appendChild(texto);
strong.className = "green";

// **Eventos**
const nombre = "Curro";

//1º FORMA: atributo HTML (caca)
// function saludar(){
//     const Texto = document.querySelector(".salida");
//     Texto.textContent = `Salida: Hola ${nombre}`;
// }

//2ª FORMA: API JS setAttribute - Añadimos el atributo HTML
// const boton = document.getElementById("btn");
// boton.setAttribute("onclick","saludar()");

//3º FORMA: addEventListener (la perita)
// const boton = document.getElementById("btn");
// const Texto = document.querySelector(".salida");
// boton.addEventListener("click", () => {
//     Texto.textContent = `Salida: Hola ${nombre}`;
// });

//Formas de pasar la funcion al addEvenListener
//Funcion definida aparte y pasar referencia (la clasica)
const boton = document.getElementById("btn");
const Texto = document.querySelector(".salida");
// function saludar(){
//     Texto.textContent = `Salida: Hola ${nombre}`;
// }
// boton.addEventListener("click", saludar); //SIN PARENTESIS LA FUNCION, SINO SE CARGA AUTOMATICAMENTE Y SALE DEL TIRON

//Funcion anonima (muy comun)
// boton.addEventListener("click", function () {
//     Texto.textContent = `Salida: Hola ${nombre}`;
// })

//Funcion flecha (de las mas usadas actualmente)
// boton.addEventListener("click", () => {
//     Texto.textContent = `Salida: Hola ${nombre}`;
// });

// ¿Para pasarle parametros?
function suma(num1, num2){
    Texto.textContent = num1 + num2;
}
// boton.addEventListener("click", () => suma(4, 6));

// Variante con funcion anonima
// boton.addEventListener("click", function (){
//     suma(7, 8);
// })

//Mini-reto: event input
//Reglas: no se puede usar el onclick ni settAttribute.
//        Usamos addEvenListener

//En cada click mostrar: Salida: has hecho X click(s).
//En reset: poner contador a 0 y mostrar: Salida: contador a 0.

// const buton = document.getElementById("btnReset");
// let contador = 0;
// const text = document.querySelector(".contador");
// boton.addEventListener("click", () => {
//     contador++;
//     text.textContent = `Has hecho: ${contador} clicks`; 
// });

// buton.addEventListener("click", () =>{
//     contador = 0;
//     text.textContent = `Has hecho: ${contador} clicks`; 
// });

//Mini-reto avanzado: combinar evento click + array para mostrar mensajer distinos segun el click.
//Cada click muestra el siguiente mensaje de un array. Cuando llegue al final, vuelve al principio.
const mensajes = [
    "Si llegas aqui, podrias ser de 1DAW",
    "No vas mal, estas alcanzando cierto nivel. Pareces Arbeloa",
    "Ufff Esto ya es otra cosa. Flick estaria orgulloso",
    "Te has subudo al gran Funesbuque"
];

const buton = document.getElementById("btnReset");
let contador = 0;
const text = document.querySelector(".contador");
boton.addEventListener("click", () => {
    text.textContent = mensajes[contador];
    contador++;
    if(contador == 4)
        contador = 0;
});

buton.addEventListener("click", () =>{
    contador = 0;
    text.textContent = mensajes[contador];
    contador++; 
});