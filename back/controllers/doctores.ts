import { Request, Response } from 'express';
import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'trabajo backend',
  database: 'trabajo_final',
});

function getDoctores(req: Request, res: Response) {

  pool.getConnection()
    .then(async (conn) => {

      try {
        var query = 'SELECT * FROM doctores';
        const result = await conn.query(query);
        res.json(result);
      } catch (error) {
        console.error('Error al obtener los doctores:', error);
        res.status(500).json({ error: 'Error al obtener los doctores' });
      } finally {
        conn.release(); 
      }
    })
    .catch((error) => {
      console.error('Error al conectar con la base de datos:', error);
      res.status(500).json({ error: 'Error al conectar con la base de datos' });
    });
};

async function createDoctor (req: Request, res: Response) {
  const { nombre, apellido, especialidad, consultorio, email } = req.body;

  const query = 'INSERT INTO doctores (nombre, apellido, especialidad, consultorio, email) VALUES (?, ?, ?, ?, ?)';
  const values = [nombre, apellido, especialidad, consultorio, email ];

  try {
    const conn = await pool.getConnection();
    await conn.query(query, values);
    conn.release();

    res.status(201).json({ message: 'doctor creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el doctor:', error);
    res.status(500).json({ error: 'Error al crear el doctor' });
  }
};


async function updateDoctor(req: Request, res: Response) {
  const { id } = req.params;
  const { nombre, apellido, especialidad, consultorio, email } = req.body;

  const query = 'UPDATE doctores SET nombre = ?, apellido = ?, especialidad = ?, consultorio = ?, email = ? WHERE id = ?';
  const values = [nombre, apellido, especialidad, consultorio, email, id];
  console.log
  try {
    const conn = await pool.getConnection();
    await conn.query(query, values);
    conn.release();

    res.json({ message: 'doctor actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el doctor:', error);
    res.status(500).json({ error: 'Error al actualizar el doctor' });
  }
};


async function deleteDoctor(req: Request, res: Response) {
  const { id } = req.params;

  const query = 'DELETE FROM doctores WHERE id = ?';

  try {
    const conn = await pool.getConnection();
    await conn.query(query, [id]);
    conn.release();

    res.json({ message: 'doctor eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el doctor:', error);
    res.status(500).json({ error: 'Error al eliminar el doctor' });
  }
};


export {
  getDoctores,
  createDoctor,
  updateDoctor,
  deleteDoctor
}