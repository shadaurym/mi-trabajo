let pregunta = document.getElementById("pregunta")
let respuesta = document.getElementById("respuesta")
let lista = document.getElementById("lista")

let user = []

let enviar = document.getElementById("enviar");
enviar.addEventListener("click", fnEnviar)

function fnEnviar() {
    user.push({
        pregunta: pregunta.value,
        respuesta: respuesta.value
    })

    console.log(user)

    lista.textContent = ""
    for (let i of user) {
        let p = document.createElement("p")
        p.textContent = i.pregunta + " - " + i.respuesta
        lista.appendChild(p)
    }
}

