// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Lista para almacenar los nombres


function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    let regex = /\d/; 

    if (regex.test(nombre)) {
        alert("Por favor, ingresa un nombre válido.");
        input.value = "";
        return false;
    }
    

    amigos.push(nombre); 
    actualizarLista(); 
    input.value = ""; 
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        li.className = "name-item";
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li class="result-item">🎉 Amigo Secreto: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
