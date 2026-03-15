document.addEventListener("DOMContentLoaded", function () {

    const botonLocations = document.getElementById("btnLocations");
    const contenedorLocations = document.getElementById("contLocations");
    const botonSpecies = document.getElementById("btnSpecies");
    const contenedorSpecies = document.getElementById("contSpecies");

    botonLocations.addEventListener("click", () => {
        cargarLocations();
    });

    botonSpecies.addEventListener("click", () => {
        cargarSpecies();
    });

    /**
     * @function cargarLocations
     * @description Hace una petición al endpoint /locations de la Ghibli API.
     * @returns {void}
     */
    function cargarLocations() {
        fetch("https://ghibliapi.vercel.app/locations/")
            .then(response =>{
                if(!response.ok) {
                    throw new Error("Error HTTP: " + response.status)
                }
                return response.json();
            })
            .then(data => {
                mostrarLocations(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    /**
     * @function mostrarLocations
     * @description Recibe el array de localizaciones y las muestra en el contenedor.
     * @param {Array} locations - Array de objetos localización devueltos por la API
     * @returns {void}
     */
    function mostrarLocations(locations) {
        contenedorLocations.innerHTML = "";
        for (const localizacion of locations) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
            tarjeta.innerHTML = `
            <h3>${localizacion.name}</h3>
            <p>Clima: ${localizacion.climate}</p>
            <p>Terreno: ${localizacion.terrain}</p>
            `;
            contenedorLocations.appendChild(tarjeta);
        }
    }

    /**
     * @function cargarSpecies
     * @description Hace una petición al endpoint /species de la Ghibli API.
     * @returns {void}
     */
    function cargarSpecies() {
        fetch("https://ghibliapi.vercel.app/species/")
            .then(response => {
                if(!response.ok){
                    throw new Error("Error HTTP: " + response.status)
                }
                return response.json();
            })
            .then(data => {
                mostrarSpecies(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    /**
     * @function mostrarSpecies
     * @description Recibe el array de especies y las muestra en el contenedor.
     * @param {Array} species - Array de objetos especie devueltos por la API
     * @returns {void}
     */
    function mostrarSpecies(species) {
        contenedorSpecies.innerHTML = "";
        for (const especie of species) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
            tarjeta.innerHTML = `
            <h3>${especie.name}</h3>
            <p>Clasificación: ${especie.classification}</p>
            <p>Color de ojos: ${especie.eye_colors}</p>
            <p>Color de pelo: ${especie.hair_colors}</p>
            `;
            contenedorSpecies.appendChild(tarjeta);
        }
    }

});