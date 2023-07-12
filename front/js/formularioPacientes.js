function crearPaciente(event) {
  event.preventDefault();

  var form = new FormData(event.target);

  var nombres = form.get("nombres");
  var apellido = form.get("apellido");
  var cédula = form.get("cédula");
  var edad = form.get("edad");
  var teléfono = form.get("teléfono");

  var body = {
    nombre: nombres,
    apellido: apellido,
    documento: cédula,
    edad: edad,
    teléfono: teléfono,
  };
 

  fetch("http://localhost:3000/app/pacientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((respuesta) => {
      console.log(respuesta);
      alert(respuesta.message);
    });
}
