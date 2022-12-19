//console.log("hola")




let zapatos = [
    { id: 10, nombre: "zapatos Enzo Bonafé", categoria: "casual", precio: 14150, marca: "Enzo Bonafé", color: "marron", imagen: "http://drive.google.com/uc?export=view&id=1ZWcsDK6hYIydMAll6y0gO5J4YEmpKScm" },
    { id: 11, nombre: "zapatos Enzo Bonafé", categoria: "casual", precio: 19000, marca: "Enzo Bonafé", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1MMuARsjcyoMT0zTZks1jzHkGIiL-EpcB" },
    { id: 12, nombre: "zapatos Enzo Bonafé", categoria: "casual", precio: 17200, marca: "Enzo Bonafé", color: "marron", imagen: "http://drive.google.com/uc?export=view&id=12k8x9wKxP5nKNjOtxStTVFq4lqC0IfQL" },
    { id: 13, nombre: "zapatos Santoni",     categoria: "salir", precio: 18000, marca: "Santoni", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=13B-MgNeqcHuNG_g8F7dYKzS-iHuEC976" },
    { id: 14, nombre: "zapatos Santoni",     categoria: "salir", precio: 19550, marca: "Santoni", color: "marron", imagen: "http://drive.google.com/uc?export=view&id=1cpGJ3qHTUvdPCLERsNHmwXL0cEic5p-2" },
    { id: 15, nombre: "zapatos Santoni",     categoria: "salir", precio: 18600, marca: "Santoni", color: "negro", imagen: "http://drive.google.com/uc?export=view&id=1JPNLGxk-TMjrkrLn7u_EWLiIX0pP4d2t" }
]

//renderizado de cada tarjeta
let contenedor = document.getElementById("contenedor")
renderizarZapatos(zapatos)

let filtroCasual = document.getElementById("casual")
let filtroSalir = document.getElementById("salir")
let todos = document.getElementById("todos")

filtroCasual.addEventListener("click", renderizarZapatosFiltrados)
filtroSalir.addEventListener("click", renderizarZapatosFiltrados)
todos.addEventListener("click", renderizarZapatosFiltrados)


function renderizarZapatosFiltrados(e) {
    console.log(e.target.id)
    if (e.target.id == "todos") {
        renderizarZapatos(zapatos)
      } else {
        renderizarZapatos(zapatos.filter(zapato => zapato.categoria.toLowerCase() == e.target.id))
      }
    }

function renderizarZapatos(arrayZapatos) {
    contenedor.innerHTML = ""
    for (const zapato of arrayZapatos) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = ` 
    <h3>${zapato.nombre}</h3>
    <h4>$${zapato.precio}</h4>
   <img src=${zapato.imagen}>
   <button>Agregar al Carrito</button>
   `
        contenedor.appendChild(tarjeta)
    }

}


