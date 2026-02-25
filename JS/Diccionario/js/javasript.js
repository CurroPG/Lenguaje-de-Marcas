// OBJETOS (clave -> valor)
const carta = {
    cafe: { precio: 1.2, emoji: "☕", texto: "Café", alergenos: [] },
    te: { precio: 1.1, emoji: "🍵", texto: "Té-chai", alergenos: [] },
    pitufo: { precio: 1.8, emoji: "🥪", texto: "Pitufo mixto", alergenos: ["gluten"] },
    donut: { precio: 2, emoji: "🍩", texto: "Donut", alergenos: ["gluten", "huevo"] }
};

// ELEMENTOS HTML DEL DOM
const selectProducto = document.getElementById("selectProducto");
const tablaMenu = document.getElementById("tablaMenu");
const infoProducto = document.getElementById("infoProducto");

// Como acceder al valor de una clave. Notacion preferida -> con corchetes
const productoElegido = "pitufo";
console.log(`Notacion con punto: Producto elegido: ${carta.pitufo.precio}€`);
console.log(`Notacion con corchetes: El precio del producto elegido es: ${carta[productoElegido].precio}€`);

// Metodo para obtener las claves
const claves = Object.keys(carta);

// Rellenar el select
for (const clave of claves) {
    const opcion = document.createElement("option");
    opcion.value = clave;
    opcion.textContent = `${carta[clave].texto} ${carta[clave].emoji}`;
    selectProducto.appendChild(opcion);
}