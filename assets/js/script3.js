document.addEventListener("keydown", function(event) {

    if (event.key === "a" || event.key === "A") {
        let color = 'pink';
        changeColor(color)
    } else if (event.key === "s" || event.key === "S") {
        let color = 'orange';
        changeColor(color)
        event.style.backgroundColor = color;
    } else if (event.key === "d" || event.key === "D") {
        let color = 'lightskyblue';
        changeColor(color)
    } else if (event.key === "q" || event.key === "Q"){
        agregarElemento(color="darkViolet");
    } else if (event.key === "w" || event.key === "W"){
        agregarElemento(color="dimGrey");
    } else if (event.key === "e" || event.key === "E"){
        agregarElemento(color="Brown");
    }
    
});

function changeColor(color, elementoId="elemento1") {
    let element = document.getElementById(elementoId);
    element.style.backgroundColor = color;
}

function agregarElemento(color) {
    // Obtenemos el elemento contenedor por su ID
    contenedor = document.querySelector("#newContainer");
    // Creamos un nuevo elemento <div>
    nuevoElemento = document.createElement("div");
    nuevoElemento.style.width = '200px'
    nuevoElemento.style.height = '200px'
    nuevoElemento.style.border = '10px solid black'
    nuevoElemento.style.backgroundColor = color
    // Agregamos el nuevo elemento al contenedor
    contenedor.appendChild(nuevoElemento);
    }