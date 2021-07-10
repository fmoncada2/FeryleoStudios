// Cargar datos con JSON
let tagParrafo = document.querySelector("#info");
let pUrl = "https://my-json-server.typicode.com/fmoncada2/FeryleoStudios/Bienvenida";

fetch (pUrl,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
)
.then(response => response.json())
.then(datos => {
    let Parrafo = datos;

    Parrafo.forEach(element => {
        let tagTit = document.createElement("h2");
        let tagText = document.createElement("p");

        tagTit.innerHTML = element.Tit;
        tagText.innerHTML = element.Historia;

        tagParrafo.appendChild(tagTit);
        tagParrafo.appendChild(tagText);
    });
});
