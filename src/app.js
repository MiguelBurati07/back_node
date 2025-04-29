import express from "express";
import routes from "./routes";

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

//necessario para instanciar a classe 
export default new App().server;

//////// 15:08 da aula 0604 //////////////