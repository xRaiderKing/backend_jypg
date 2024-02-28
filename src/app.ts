import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

/**
 * Clase de inicio de la aplicacion NodeJsExpress
 * Autor: Jesus Yael Padron Grimaldo
 * Fecha 28 de Febrero del 2024
 */
class Server {
    private app: Application;

    // Inicializa la clase
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.app.listen(this.app.get("port"), () => {
          console.log("Server on port", this.app.get("port"));
      });      
    }
    // Configuracion de modulos
    config(): void {
        // configuración del puerto para el servidor
        this.app.set("port", 3000);
       
        // muestra las peticiones en consola
        this.app.use(morgan("dev"));
   
        // puertos de conexión de la API
        this.app.use(cors());
   
        // solo se permiten peticiones en formato JSON
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false,}),)
    }
  
    // Configuracion de rutas
    routes(){
        
    }
}

const server = new Server();