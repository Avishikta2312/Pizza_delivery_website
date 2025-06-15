const express = require('express');
const pizza = require('./Models/PizzaModel');
const db = require('./db');

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server Working");
});

app.get("/getPizzas", async (req, res) => {
    try {
        const pizzas = await pizza.find({});
        res.send(pizzas);
    } catch (err) {
        console.error("Error fetching pizzas:", err);
        res.status(500).send({ error: "Failed to fetch pizzas" });
    }
});


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
