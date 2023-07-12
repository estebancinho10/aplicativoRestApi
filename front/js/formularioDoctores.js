function crearDoctores(event) {
  event.preventDefault();

  var form = new FormData(event.target);

  var nombres = form.get("nombres");
  var apellido = form.get("apellidos");
  var especialidad = form.get("especialidad");
  var consultorio = form.get("consultorio");
  var email = form.get("email");

  var body = {
    nombre: nombres,
    apellido: apellido,
    especialidad: especialidad,
    consultorio: consultorio,
    email: email,
  };
 
  fetch("http://localhost:3000/app/doctores", {
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
