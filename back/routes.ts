import { Router } from 'express';
import { getPacientes, createPaciente, updatePaciente, deletePaciente } from './controllers/pacientes';

const app = Router();


app.get('/pacientes', getPacientes);
app.post('/pacientes', createPaciente);
app.put('/pacientes/:id', updatePaciente);
app.delete('/pacientes/:id', deletePaciente);


import { getDoctores, createDoctor, updateDoctor, deleteDoctor } from './controllers/doctores';


app.get('/doctores', getDoctores);
app.post('/doctores', createDoctor);
app.put('/doctores/:id', updateDoctor);
app.delete('/doctores/:id', deleteDoctor);

import {getCitas, createCitas, updateCitas, deleteCitas} from './controllers/citas';


app.get('/citas', getCitas);
app.post('/citas', createCitas);
app.put('/citas/:id', updateCitas);
app.delete('/citas/:id', deleteCitas);

import {getEspecialidades} from './controllers/especialidades';


app.get('/especialidades', getEspecialidades);
export default app

app.post('/citas', (req, res) => {
    const numeroDocumento = req.body.numeroDocumento;
    const especialidad = req.body.especialidad;
  
    res.json({ message: 'La cita se ha creado correctamente' });
  });