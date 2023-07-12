document.addEventListener("DOMContentLoaded", function () {
  // Realizar una solicitud GET utilizando la función fetch
  fetch("http://localhost:3000/app/pacientes", {
    method: "GET",
  })
    .then((response) => response.json()) // Convertir la respuesta a JSON
    .then((data) => {
      var tabla = document.getElementById("miTabla");
      var tbody = tabla.querySelector("tbody");
      // Iterar sobre los datos recibidos y construir las filas de la tabla
      data.forEach(function (item) {
        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");
        var celda5 = document.createElement("td");

        celda1.textContent = item.nombre;
        celda2.textContent = item.apellido;
        celda3.textContent = item.documento;
        celda4.textContent = item.edad;
        celda5.textContent = item.telefono;

        celda1.classList.add("info");
        celda2.classList.add("info");
        celda3.classList.add("info");
        celda4.classList.add("info");
        celda5.classList.add("info");

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);
        fila.appendChild(celda5);

        tbody.appendChild(fila);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
});

function eliminarPaciente(documento) {
  var confirmacion = confirm(
    "¿Estás seguro de que deseas eliminar el registro con el id " + documento + "?"
  );

  if (confirmacion) {
    fetch("http://localhost:3000/app/pacientes/" + documento, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((respuesta) => {
        alert(respuesta.message);
      });
  } else {
    // El usuario seleccionó "Cancelar"
    alert("Cancelado");
  }
}
