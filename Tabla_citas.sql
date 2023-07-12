CREATE TABLE citas (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
id_doctor		INT				NOT NULL,
id_paciente 	INT	UNSIGNED	NOT NULL,
fecha       	DATE 			NOT NULL,
hora 			TIME 			NOT NULL,

FOREIGN KEY (id_doctor) REFERENCES doctores(id),
FOREIGN KEY (id_paciente) REFERENCES pacientes(id)
);


insert into citas (id_doctor, id_paciente, fecha, hora)
values
(2, 4, '2023-05-18', '14:30:00'),
(3, 3, '2023-08-21', '19:30:00'),
(4, 2, '2023-10-31', '10:30:00');

SELECT citas.id, doctores.nombre AS nombre_doctor, pacientes.nombre AS nombre_paciente, citas.fecha, citas.hora
FROM citas
JOIN doctores ON citas.id_doctor = doctores.id
JOIN pacientes ON citas.id_paciente = pacientes.id;

select * from citas;