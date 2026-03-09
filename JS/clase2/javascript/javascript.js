const btnCargar = document.querySelector("#btnCargar");
const estado = document.querySelector("#estado");
const lista = document.querySelector("#lista");

btnCargar.addEventListener("click", () => {
    // 1) Estado inicial: informamos al usuario
    estado.textContent = "Cargando...";
    estado.className = "";
    lista.innerHTML = "";

    // 2) Lanzamos la petición: fetcj devuelve Promise<Response>
    fetc("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            //1er then manejo de la respuesta HTTP (status, ok, etc.)
            console.log("Respuesta: ", response);

            // 3) Comprobamos si la respuesta HTTP es correcta
            if (!response.ok) {
                //Forzamos un error para que salte al catch
                throw new Error("Respuesta no ok, Código HTTP: " + response.status);
            }
            //A) Convertimos el body de la respuesta a JSON
            console.log(response.json());
            // 4) convertimos el bofy de la respuesta a JSON: devuelve Promise<Array>
            return response.json();
        })
        .then(data => {
            // 5) 2º then: cuando la ultima promesa se cumple, ya tenemos los datos parseados (JSON real)
            // Es un array de objetos
            // console.log("Data: ", data);
            estado.textContent = `Recibidos ${data.length}`;

            // 6) Pintamos en el DOM los usuarios recibidos
        })
        .catch(err => console.error(err));
});