CREATE TABLE especialidades (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre 		VARCHAR(100)	NOT NULL
);

SELECT C.id AS cita_id, D.nombre AS nombre_doctor, E.nombre AS especialidad, P.nombre AS nombre_paciente, C.fecha, C.hora
FROM Citas AS C
JOIN Doctores AS D ON C.doctor_id = D.id
JOIN Especialidades AS E ON D.especialidad = E.id
JOIN Pacientes AS P ON C.paciente_id = P.id;


insert into especialidades (nombre) values ("1, medicina general");
insert into especialidades (nombre) values ("2, cardiologia");
insert into especialidades (nombre) values ("3, medicina interna");
insert into especialidades (nombre) values ("4, dermatologia");
insert into especialidades (nombre) values ("5, rehabilitacion fisica");
insert into especialidades (nombre) values ("6, psicologia");
insert into especialidades (nombre) values ("7, odontologia");
insert into especialidades (nombre) values ("8, radiologia");

select * from especialidades;


