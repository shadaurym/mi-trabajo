let x = 0

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let p2 = document.getElementById("p2")
        for (let i of data) {

            let input = document.createElement("input")
            input.id = x
            let label = document.createElement("label")
            let pp = document.createElement("p")
            let btn = document.createElement("button");
            btn.textContent = "Enviar";
            btn.value = x
            btn.addEventListener("click", (e) => {
                console.log(e.target.value)
                console.log(i.username)

            });

            label.textContent = i.name

            p2.appendChild(label)
            p2.appendChild(input)
            p2.appendChild(btn)
            p2.appendChild(pp)

            x++
        }
    })
// console.log(i.name) // pregunta
// console.log(i.username) // respuesta