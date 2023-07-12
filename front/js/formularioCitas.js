function crearCITA(event) {
    event.preventDefault();
  
    var form = new FormData(event.target);
  
    var id_doctor = form.get("nombres");
    var id_paciente = form.get("nombres");
    var fecha = form.get("fecha");
    var hora = form.get("hora");
  
    var body = {
      id_doctor: id_doctor,
      id_paciente: id_paciente,
      fecha: fecha,
      hora: hora,
    };
  
    fetch("http://localhost:3000/citas", {
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
  