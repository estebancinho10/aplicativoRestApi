CREATE TABLE doctores (
id INT PRIMARY KEY AUTO_INCREMENT,
nombre 			VARCHAR(100)	NOT NULL,
apellido 		VARCHAR(100)	NOT NULL,
especialidad 	VARCHAR(100) 	NOT NULL,
consultorio 	VARCHAR(50)		NOT NULL,
email 			VARCHAR(100)	NOT NULL
);

ALTER TABLE pacientes ADD doctor_id INT;
ALTER TABLE pacientes ADD CONSTRAINT fk_doctor
  FOREIGN KEY (doctor_id) REFERENCES doctores(id);
  


INSERT INTO doctores (nombre, apellido, especialidad, consultorio, email) 
VALUES
('WILLIAM', 'ARIAS', 'cardiologia', 2, 'WILLIAM@GMAIL.COM'),
('CARMEN', 'MANRIQUE', 'dermatologia', 4, 'CARMEN@GMAIL.COM'),
('ALFRED', 'CASTAÑO', 'odontologia', 7, 'ALFRED@GMAIL.COM'),
('SAMUEL', 'ROJAS', 'radiologia', 8, 'SAMUEL@GMAIL.COM');

select * from doctores;

