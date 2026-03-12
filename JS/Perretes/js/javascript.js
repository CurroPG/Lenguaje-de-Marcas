const botonPerrete = document.getElementById("btnPerro");
const resultado = document.getElementById("resultado");

botonPerrete.addEventListener("click", () =>{
    fetch("https://api.thedogapi.com/v1/images/search")
        .then(response => {
            console.log("Respuesta: ", response);
            if (!response.ok) {
                throw new Error("Respuesta no ok, Código HTTP: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            //const aleatorio = Math.floor(Math.random()*data.length);
            //imagen.innerHTML = u[aleatorio];
            // console.log(data);
            // console.log(data[0].url);
            const urlImage = data[0].url;
            const imagen = document.createElement("img");
            imagen.src = urlImage;
            imagen.className = "imagenanimal";
            resultado.innerHTML = "";
            resultado.appendChild(imagen);
        })
        .catch(err => {
            imagen.textContent = "Error cargando usuarios";
            imagen.className = "error";
            console.log(err);
        });
});