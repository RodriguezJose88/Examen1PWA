//user controller
import express, { Request, Response, response } from "express";
import { UserStorageGateway } from "./user.storage.gateway";
import { GetAllUsersInteractor } from "../../../modules/use-cases/gat-all-users-interactor";

export class  UserController{
    static async getAll(req: Request, res: Response){
        try {
            const repository = new UserStorageGateway();
            const interactor = new GetAllUsersInteractor(repository);
            const data = await interactor.execute();
            res.status(200).json(data);
        } catch (error) {
            console.log(error)
            res.status(400).json({message: "Error"});
        }
    }
}


export const createUser = (req: Request, res: Response) => {
 try {
 // Obtén los datos del usuario de la solicitud
 const { username, password, status,person } = req.body;

// creacion


 // Devuelve una respuesta exitosa
 return res.status(200).json({ message: 'Usuario registrado exitosamente' });
 } catch (error) {
 // Maneja el error y devuelve una respuesta de error
 return res.status(500).json({ error: 'Ha ocurrido un error al registrar el usuario' });
 }
};



export const userRouter = express.Router();
userRouter.get("/", [], UserController.getAll);