document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const textareas = document.querySelectorAll('textarea');
  const textoGeneradoContainer = document.getElementById('textoGeneradoContainer');
  const textoGeneradoDiv = document.getElementById('texto_generado');

  const nombreInput = document.getElementById('nombre');

  let botonCopiar = document.createElement("span");
  botonCopiar.classList.add("copiar");
  botonCopiar.id = "copiar";
  botonCopiar.innerText = "Copiar";
  botonCopiar.addEventListener("click", () => {
      navigator.clipboard.writeText(textoGeneradoDiv.innerText);

      botonCopiar.innerText = "Copiado!"

      setTimeout(() => {
          botonCopiar.innerText = "Copiar"
      }, 2000);
  });const comentariosDisponiblesOk = [
    "Todo genial!",
    "Todo bien!",
    "Todo en orden",
    "Perfecto",
    "Genial",
    "Bien!",
    "Bien usado",
    "Bien aplicado"
];
const comentariosDisponiblesMal = [
    "No se ve uso de",
    "No encontré en el proyecto",
    "No hay",
    "No usaste",
    "En ninguna parte hay"
];

function obtenerComentarioAleatorio(comentarios) {
    if (comentarios.length === 0) return "Todo ok!";
    const index = Math.floor(Math.random() * comentarios.length);
    return comentarios[index];
}

let comentariosGenerados = [];

function generarComentarios() {
    comentariosGenerados = Array.from(checkboxes).map(checkbox => {
        const estado = checkbox.checked;
        return estado ? obtenerComentarioAleatorio(comentariosDisponiblesOk) : obtenerComentarioAleatorio(comentariosDisponiblesMal);
    });
}

function actualizarTextoGenerado() {
    let textoGenerado = '';
    const nombre = nombreInput.value.trim();
    textoGenerado += `Hola ${nombre}!<br><br>`;
    let mensajeFinalTexto;
    checkboxes.forEach((checkbox, index) => {
        const nombre = checkbox.previousElementSibling.textContent.trim();
        const nombreSinIcono = checkbox.previousElementSibling.dataset.nombre;
        const estado = checkbox.checked;
        const icono = estado ? '✅' : '❌';
        let comentario;
        if (checkbox.id === "generales") {
            mensajeFinalTexto = estado ? "<br>Felicitaciones por haber llegado hasta acá, y ahora a meterle con Backend o con lo que sigas! Abrazo!" : "<br>La entrega queda con nota final de 6, pero podés reentregar dentro de las próximas 72 horas para volver a corregirla. Abrazo!";
            comentario = textareas[index].value.trim().replace(/\n/g, '<br>') || (estado ? "Todo ok!" : "Aguardo correcciones!");
        } else {
            comentario = textareas[index].value.trim().replace(/\n/g, '<br>') || (estado ? comentariosGenerados[index] : `${comentariosGenerados[index]} ${nombreSinIcono}`);
        }
        textoGenerado += `${nombre}: ${icono} ${comentario}<br>`;
    });
    textoGeneradoDiv.innerHTML = textoGenerado;
    textoGeneradoContainer.append(botonCopiar);
    const mensajeFinal = document.createElement("p");
    mensajeFinal.innerHTML = mensajeFinalTexto;
    textoGeneradoDiv.appendChild(mensajeFinal);
}

function actualizarComentarios() {
    generarComentarios();
    actualizarTextoGenerado();
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', actualizarComentarios);
});

textareas.forEach(textarea => {
    textarea.addEventListener('input', actualizarTextoGenerado);
});

nombreInput.addEventListener("input", actualizarTextoGenerado);

    generarComentarios();

  actualizarTextoGenerado();

});