import { Router } from "express";
//importa como a classe
import customers from "./app/controllers/CustomersController";

const routes = new Router();

//ROTAS PARA OS CONTROLLERS
routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.destroy);



//para sempre exportar corretamente, se atentar de fazer no inicio
export default routes;
