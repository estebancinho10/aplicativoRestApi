# Aplicativo Web (Rest Api) 

este proyecto se basa en un aplicativo web que por medio de formularios recibe la información de pacientes y doctores, los almacena en una base de datos SQL luego con la ayuda de DOM los muestra en una lista en otra pagina.


## Tabla de contenido

- [Características](#caracteristicas)
- [Instalación](#instalacion)
- [Uso](#uso)
- [Ejemplos Y Pruebas](#ejemplosypruebas)
- [Contribución](#contribucion)


## Características:

Este aplicativo permite; crear, leer, actualizar y eliminar (CRUD) tanto pacientes como doctores.
contiene unos archivos html llamados "FormularioDeDoctores" "FormularioDeCitas" y "FormularioDePacientes"donde por parte del usuario se puede agregar información según al formulario que abra y por parte del backend eliminar y actualizar dicha información que se encuentra en la base de datos.


## Instalación:

Para la instalación sera necesario contar con un editor de texto como por ejemplo vs code, que tu entorno laboral cuente con las siguientes extensiones; express, controlRoutes, MariaDB. ademas de tener instalado; Node js, Javascript, sql server. Para realizar pruebas de este proyecto se podrá realizar mediante la aplicación de POSTMAN


## Uso:

Después de haber descargado el proyecto en tu ordenador sera necesario que habrás el proyecto desde tu editor de texto ya teniendo tu ambiente configurado de la manera que se explico anteriormente en la INSTALACIÓN podrás visualizar los diferentes archivos como los son archivos ts, js, sql, html, css, json y este readme.md.
Ahora es necesario que te ubiques en el archivo formulario doctores que se encuentra dentro de la carpeta front le des click derecho y haz click la opción open with live server al realizar esta acción te abrirá una pestaña nueva en tu navegador para mostrar el formulario, a la misma vez puedes realizar esta acción de click derecho en el archivo lista de doctores el cual abrirá también una nueva pestaña en tu navegador mostrándote la información de los datos guardados en la base de datos. Ahora teniendo estos dos archivos abiertos en tu navegador es necesario que te ubiques en la pestaña que muestra el formulario de doctores y llenes la información del formulario luego haz click en enviar. Inmediatamente dirígete a la pestaña donde esta la lista de doctores en la parte superior de al lado izquierdo de la pagina encontraras un botón de actualizar haciendo click sobre el botón visualizaras la la información que acabaste de agregar en el formulario. 
Esta y toda la información que desees agregar se guardara de manera automática en la base de datos.

para eliminar un doctor deberás de ingresar al archivo listaDeDoctores.html que se encuentra ubicado en la carpeta front al final del código encontraras una linea de código con la opción de eliminar este se eliminara introduciendo el id del doctor que se le fue asignado cuando se creo en el formulario (este ID lo asigna la base de datos sql podrás verlo ingresando al sql server e inscribiendo la instrucción SELECT * FROM doctores) y asi mismo podrás hacerlo con pacientes y citas. en el siguiente paso se hará una representación gráfica de ejemplos de como puedes realizar el CRUD de esta aplicación por medio de POSTMAN


## Ejemplos y Pruebas:


A continuación se adjuntas algunas imágenes que muestran las pruebas que se le realizaron a la API por medio de la aplicación de postman, se relaciona comentario con imagen asi:

get de doctores
![traerá todos los registros de los doctores almacenada en la base de datos](/getDoctores.png)
post de doctores
![permitirá crear un nuevo registro de doctor](/postDoctores.png)
put doctores
![permitirá editar y actualizar un registro existente de doctor](/putDoctores.png)
delete doctores
![eliminara el registro de un doctor](/deleteDoctores.png)

get de pacientes
![traerá todos los registros de los pacientes almacenada en la base de datos](/getPacientes.png)
post de pacientes
![permitirá crear un nuevo registro de paciente](/postPacientes.png)
put pacientes
![permitirá editar y actualizar un registro existente de paciente](/putPacientes.png)
delete pacientes
![eliminara el registro de un paciente](/deletePaciente.png)

get de citas
![traerá todos los registros de las citas almacenada en la base de datos](/getCitas.png)
post de citas
![permitirá crear un nuevo registro de cita](/postCitas.png)
put citas
![permitirá editar y actualizar un registro existente de una cita](/putCitas.png)
delete citas
![eliminara el registro de una cita](/deleteCitas.png)

get especialidades
![traerá las especialidades disponibles para las citas](/getEspecialidades.png)

A CONTINUACIÓN LA IMAGEN QUE PRUEBA QUE TODOS LOS CRUD¨S QUEDARON EN FUNCIONAMIENTO 

![EL TOTAL DEL CRUD REALIZADO A CADA TABLA DE LA BASE DE DATOS](/postman.png)


listado de doctores

![listad de docotores guardados en la base de datos](/ListaDeDoctores.png)

listado de pacientes

![listado de pacientes guardados en la base de datos](/ListaDePcientes.png)

istado de citas

![listado de citas guardadas en la base de datos](/listadoDeCitas.png)


## Contribución:

Para quien desee continuar con este proyecto pueden terminar la lógica de como editar y eliminar citas pues por tiempo no se logro con el objetivo para terminar con esas dos accione. la estructura del proyecto esta establecida de la siguiente manera:

1 carpeta back: donde va a encontrar toda la lógica de la API del lado del backend están todos los archivos de TYPE SCRIPT archivos importantes como "routes.ts" donde se encuentran las rutas para realizar el CRUD de pacientes,doctores y citas. o también el archivo "server.ts" donde se encuentran las importaciones de las extensiones a utilizar.

2 carpeta front: donde se encuentran los archivos de formularios, las listas, el style.css todo de la parte del frontend y el usuario.

3 por ultimo encontraras los archivos de las tablas que se realizaron en SQL SERVER y este README.MD

este proyecto se puede utilizar como un bosquejo para realizar una consultoría de datos con base de datos relacional.





