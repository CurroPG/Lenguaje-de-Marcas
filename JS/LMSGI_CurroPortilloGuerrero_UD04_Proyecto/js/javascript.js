document.addEventListener("DOMContentLoaded", function () {

    const botonPelicula = document.getElementById("btnPeliculas");
    const contenedorPelicula = document.getElementById("contPeliculas");
    const botonPersonaje = document.getElementById("btnPersonajes");
    const contenedorPersonaje = document.getElementById("contPersonajes");

    botonPelicula.addEventListener("click", () => {
        cargarPeliculas();
    });
    botonPersonaje.addEventListener("click", () => {
        cargarPersonajes();
    });

    /**
     * @function cargarPeliculas
     * @description Hace una petición al endpoint /films de la Ghibli API.
     * @returns {void}
     */
    function cargarPeliculas() {
        fetch("https://ghibliapi.vercel.app/films")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error HTTP: " + response.status);
                }
                return response.json();
            })
            .then(data => {
                mostrarPeliculas(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    /**
     * @function mostrarPeliculas
     * @description Recibe el array de películas y las muestra en el contenedor.
     * @param {Array} peliculas - Array de objetos película devueltos por la API
     * @returns {void}
     */
    function mostrarPeliculas(peliculas) {
        contenedorPelicula.innerHTML = "";

        for (const pelicula of peliculas) {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
            tarjeta.innerHTML = `
            <img src="${pelicula.image}" alt="${pelicula.title}">
            <h3>${pelicula.title}</h3>
            <p>Director: ${pelicula.director}</p>
            <p>Año: ${pelicula.release_date}</p>
            <p>Puntuación: ${pelicula.rt_score}%</p>
            `;
            contenedorPelicula.appendChild(tarjeta);
        }
    }

    /**
     * @function cargarPersonajes
     * @description Hace una petición al endpoint /people de la Ghibli API.
     * @returns {void}
     */
    function cargarPersonajes() {
        fetch("https://ghibliapi.vercel.app/people")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error HTTP: " + response.status);
                }
                return response.json();
            })
            .then(data => {
                mostrarPersonajes(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    /**
     * @function mostrarPersonajes
     * @description Recibe el array de personajes y los muestra en el contenedor.
     * @param {Array} personajes - Array de objetos personaje devueltos por la API
     * @returns {void}
     */
    function mostrarPersonajes(personajes) {
        contenedorPersonaje.innerHTML = "";
        for(const personaje of personajes){
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjeta";
            tarjeta.innerHTML = `
            <h3>${personaje.name}</h3>
            <p>Género: ${personaje.gender}</p>
            <p>Edad: ${personaje.age}</p>
            `;
            contenedorPersonaje.appendChild(tarjeta);
        }
    }

});