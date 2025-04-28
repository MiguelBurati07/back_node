const { Router } = require("express");
const routes = new Router;

//NOVO GET
routes.get("/", (req, res) => {
    return res.json({ message: "Hello" });
});



//para sempre exportar corretamente, se atentar de fazer no inicio
module.exports = routes;