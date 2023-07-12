DROP DATABASE IF EXISTS Trabajo_Final;
CREATE DATABASE Trabajo_Final CHARACTER SET utf8mb4;
use Trabajo_Final;

CREATE TABLE pacientes (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nombre 			VARCHAR(100)	NOT NULL,
apellido 		VARCHAR(100)	NOT NULL,
documento 		INT 			NOT NULL,	
edad 			INT				NOT NULL,
telefono 		VARCHAR(100)	NOT NULL
);




INSERT INTO pacientes (nombre, apellido, documento, edad, telefono) 
VALUES 
('rogelio', 'gonzalez', '1584758693', 22, 4574585),
('armando', 'manzanares', '57845962', 78, 3458596);

select * from pacientes;





