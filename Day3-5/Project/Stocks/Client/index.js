const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use('/register', (req, res) => {
    return res.render('signup', {title: "Register"});
});

app.use('/stock/add', (req, res) => {
    return res.render('stock-add', {title: "Add Stock"});
});


app.use('/stock/:id(\\d+)', (req, res) => {
    const stockId = parseInt(req.params.id, 10);
    return res.render('stock-detail', {title: "Stock Detail", stockId: stockId});
});

app.use('/stock/edit/:id(\\d+)', (req, res) => {
    const stockId = parseInt(req.params.id, 10);
    return res.render('stock-edit', {title: "Stock Edit", stockId: stockId});
});

app.use('/stock/delete/:id(\\d+)', (req, res) => {
    const stockId = parseInt(req.params.id, 10);
    return res.render('stock-delete', {title: "Stock Delete", stockId: stockId});
});


app.use('/stock', (req, res) => {
    return res.render('stock-list', {title: "Stocks"});
});


app.use('/transactions', (req, res) => {
    return res.render('transaction-list', {title: "Transactions"});
});
app.use('/transaction/add', (req, res) => {
    return res.render('transaction-add', {title: "Add Transactions"});
});

app.use('/login',(req, res) => {
    return res.render('login', {"title": "Login"});
});

app.use('/', (req, res) => { 
    return res.render('login', {"title": "Login"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}, date ${new Date().toLocaleDateString()}...`)});