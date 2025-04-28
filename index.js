//ARQUIVO INÚTIL, SÓ USO PARA VERIFICAR.//

const express = require("express");

const server = express();

server.use(express.json())

server.listen(3000);

//query params = ?nome=Miguel&idade=19
//http://localhost:3000/hello?nome=Miguel&idade=19
//Route params = /hello/:nome
//http://localhost:3000/hello/Miguel

const customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
    { id: 2, name: "Google", site: "http://google.com" },
    { id: 3, name: "UOL", site: "http://uol.com.br" }
];

//GET
server.get("/customers", (req, res) => {
    return res.json(customers);
})

//GET EXPECIFICO
server.get("/customers/:id", (req, res) => {
    const id = Number.parseInt(req.params.id);
    const customer = customers.find(item => item.id === id);
    const status = customer ? 200 : 404;

    //debug com console.log 
    console.log("GET :: /customers/:id", JSON.stringify(customer))

    return res.status(status).json(customer);
});

//POST
server.post("/customers", (req, res) => {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, name, site };
    customers.push(newCustomer);

    return res.status(201).json(newCustomer);//retorna sucesso e qual foi criado
});

//UPDATE
server.put("/customers/:id", (req, res) => {
    const id = Number.parseInt(req.params.id);
    const { name, site } = req.body;

    const index = customers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers[index] = { id: Number.parseInt(id), name, site }
    }

    return res.status(status).json(customers[index]);
});

//DELETE
server.delete("/customers/:id", (req, res) => {

    const id = Number.parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
        customers.splice(index, 1);
    }

    return res.status(status).json();

});