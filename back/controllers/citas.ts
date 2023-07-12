import { Request, Response } from 'express';
import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'trabajo backend',      
  database: 'trabajo_final',
});

function getCitas(req: Request, res: Response) {
 
  pool.getConnection()
    .then(async (conn) => {
      
      try {
        var query = 'SELECT citas.id, doctores.nombre AS nombre_doctor, pacientes.nombre AS nombre_paciente, citas.fecha, citas.hora FROM citas JOIN doctores ON citas.id_doctor = doctores.id JOIN pacientes ON citas.id_paciente = pacientes.id';
        const result = await conn.query(query);
        res.json(result);
      } catch (error) {
        console.error('Error al obtener las citas:', error);
        res.status(500).json({ error: 'Error al obtener las citas' });
      } finally {
        conn.release(); 
      }
    })
    .catch((error) => {
      console.error('Error al conectar con la base de datos:', error);
      res.status(500).json({ error: 'Error al conectar con la base de datos' });
    });
};

async function createCitas (req: Request, res: Response) {
  const { doctor_id, paciente_id, fecha, hora, } = req.body;

  const query = 'INSERT INTO citas (doctor_id, paciente_id, fecha, hora) VALUES (?, ?, ?, ?)';
  const values = [doctor_id, paciente_id, fecha, hora ];

  try {
    const conn = await pool.getConnection();
    await conn.query(query, values);
    conn.release();

    res.status(201).json({ message: 'cita creada exitosamente' });
  } catch (error) {
    console.error('Error al crear la cita:', error);
    res.status(500).json({ error: 'Error al crear la cita' });
  }
};

async function updateCitas(req: Request, res: Response) {
  const { id } = req.params;
  const { doctor_id, paciente_id, fecha, hora } = req.body;

  const query = 'UPDATE citas SET doctor_id = ?, paciente_id = ?, fecha = ?, hora = ? WHERE id = ?';
  const values = [doctor_id, paciente_id, fecha, hora, id];
  console.log
  try {
    const conn = await pool.getConnection();
    await conn.query(query, values);
    conn.release();

    res.json({ message: 'cita actualizada exitosamente' });
  } catch (error) {
    console.error('Error al actualizar la cita:', error);
    res.status(500).json({ error: 'Error al actualizar la cita' });
  }
};

async function deleteCitas(req: Request, res: Response) {
  const { id } = req.params;

  const query = 'DELETE FROM citas WHERE id = ?';

  try {
    const conn = await pool.getConnection();
    await conn.query(query, [id]);
    conn.release();

    res.json({ message: 'cita eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar la cita:', error);
    res.status(500).json({ error: 'Error al eliminar la cita' });
  }
};


export {
  getCitas,
  createCitas,
  updateCitas,
  deleteCitas
}