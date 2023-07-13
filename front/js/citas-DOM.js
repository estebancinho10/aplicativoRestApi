document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/app/citas", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      var tabla = document.getElementById("miTabla");
      var tbody = tabla.querySelector("tbody");

      data.forEach(function (item) {
        var fila = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");

        celda1.textContent = item.doctor_id;
        celda1.classList.add("info");
        celda2.textContent = item.paciente_id;
        celda2.classList.add("info");
        celda3.textContent = item.fecha;
        celda3.classList.add("info");
        celda4.textContent = item.hora;
        celda4.classList.add("info");

        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);

        tbody.appendChild(fila);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
});
