import { Request, Response } from 'express';
import mariadb from 'mariadb';


const pool = mariadb.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'trabajo backend',
  database: 'trabajo_final',
});

function getPacientes (req: Request, res: Response) {
  
  pool.getConnection()
    .then(async (conn) => {
      
      try {
        var query  = 'SELECT * FROM pacientes';
        const result = await conn.query(query);
        res.json(result);
      } catch (error) {
        console.error('Error al obtener los pacientes:', error);
        res.status(500).json({ error: 'Error al obtener los pacientes' });
      } finally {
        conn.release(); 
      }
    })
    .catch((error) => {
      console.error('Error al conectar con la base de datos:', error);
      res.status(500).json({ error: 'Error al conectar con la base de datos' });
    });
};

async function createPaciente (req: Request, res: Response)  {
    const { nombre, apellido, documento, edad, telefono  } = req.body;
    
    const query = 'INSERT INTO pacientes (nombre, apellido, documento, edad, telefono) VALUES (?, ?, ?, ?, ?)';
    const values = [nombre, apellido, documento, edad, telefono ];
    
    try {
      const conn = await pool.getConnection();
      await conn.query(query, values);
      conn.release();
      
      res.status(201).json({ message: 'Paciente creado exitosamente' });
    } catch (error) {
      console.error('Error al crear el paciente:', error);
      res.status(500).json({ error: 'Error al crear el paciente' });
    }
  };
  
  
  async function updatePaciente (req: Request, res: Response) {
    const { id } = req.params;
    const { documento, nombre, apellido, edad, telefono } = req.body;
    
    const query = 'UPDATE pacientes SET nombre = ?, apellido = ?, edad = ?, telefono = ?, documento = ? WHERE id = ?';
    const values = [nombre, apellido, edad, telefono, documento, id];
    console.log
    try {
      const conn = await pool.getConnection();
      await conn.query(query, values);
      conn.release();
      
      res.json({ message: 'Paciente actualizado exitosamente' });
    } catch (error) {
      console.error('Error al actualizar el paciente:', error);
      res.status(500).json({ error: 'Error al actualizar el paciente' });
    }
  };
  
  
 async function deletePaciente (req: Request, res: Response) {
    const { id } = req.params;
    
    const query = 'DELETE FROM pacientes WHERE documento = ?';
    
    try {
      const conn = await pool.getConnection();
      await conn.query(query, [id]);
      conn.release();
      
      res.json({ message: 'Paciente eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar el paciente:', error);
      res.status(500).json({ error: 'Error al eliminar el paciente' });
    }
  };

  
export {
    getPacientes, 
    createPaciente,
    updatePaciente,
    deletePaciente
  }