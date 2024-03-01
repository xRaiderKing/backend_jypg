import { Router, RouterOptions } from 'express';
import { authController } from '../controllers/authController';
/*
 * Clase de la funcionalidad de rutas Login
*/ 

class AuthRoutes{
    // Objeto de tipo router
    public router: Router;

    // Se inicializa
    constructor(){
        this.router = Router();
        this.config();
    }

    config() {
        this.router.post('/', authController.iniciarSesion);        
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;