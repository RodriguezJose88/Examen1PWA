import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import express, { Request, Response, response } from "express";

export async function hash(password:string) {
    return new Promise((resolve,reject) => {
       bcryptjs.hash(password, process.env.BCRYPTJS!, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
            
        });
    });
};
const app = express();

// Definir la ruta para registrar un usuario
app.post('/register', async (req, res) => {
    try {
    // Registrar persona

    // Registrar usuario
    
    // Registrar roles
    const { username, password, role, fullname, area } = req.body;
   
    // Hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcryptjs.hash(password, saltRounds);
   
    // Crear el token JWT
    const token = jwt.sign(
    { username: username, role: role, fullname: fullname, area: area },
    'secret_key'
    );
   

   
    res.status(201).json({ message: 'Usuario registrado con éxito', token: token });
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
    }
   });

export async function compare(params:string) {
    
};
