const express = require('express');
const app = express();
const port = 3000;

let products = [
    { id: 1, name: "Məhsul 1", price: 10, quantity: 100 },
    { id: 2, name: "Məhsul 2", price: 15, quantity: 200 },
    { id: 3, name: "Məhsul 3", price: 20, quantity: 50 },
    { id: 4, name: "Məhsul 4", price: 25, quantity: 30 },
    { id: 5, name: "Məhsul 5", price: 30, quantity: 60 },
    { id: 6, name: "Məhsul 6", price: 40, quantity: 80 },
    { id: 7, name: "Məhsul 7", price: 50, quantity: 90 },
    { id: 8, name: "Məhsul 8", price: 60, quantity: 110 },
    { id: 9, name: "Məhsul 9", price: 70, quantity: 120 },
    { id: 10, name: "Məhsul 10", price: 80, quantity: 130 }
];

app.get('/products', (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const offset = (page - 1) * limit;
    const paginatedProducts = products.slice(offset, offset + limit);
    res.json(paginatedProducts);
});

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Məhsul tapılmadı');
    }
});

app.listen(port, () => {
    console.log(`Server http://localhost:${port} ünvanında işləyir`);
});
