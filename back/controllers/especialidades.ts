import { Request, Response } from 'express';
import mariadb from 'mariadb';


const pool = mariadb.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'trabajo backend',
  database: 'trabajo_final',
});

function getEspecialidades(req: Request, res: Response) {
  
  pool.getConnection()
    .then(async (conn) => {
      
      try {
        var query = 'SELECT * FROM especialidades';
        const result = await conn.query(query);
        res.json(result);
      } catch (error) {
        console.error('Error al obtener las especialidades:', error);
        res.status(500).json({ error: 'Error al obtener las especialidades' });
      } finally {
        conn.release(); 
      }
    })
    .catch((error) => {
      console.error('Error al conectar con la base de datos:', error);
      res.status(500).json({ error: 'Error al conectar con la base de datos' });
    });
};

export {
  getEspecialidades
  
} 