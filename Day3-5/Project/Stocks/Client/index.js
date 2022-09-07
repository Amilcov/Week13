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

app.use('/stock/:stockId(\\d+)/transaction/:transactionId(\\d+)', (req, res) => {
    const stockId = parseInt(req.params.stockId, 10);
    const transactionId = parseInt(req.params.transactionId, 10);
    return res.render('transaction-detail', {title: "Transaction Detail", stockId, transactionId});
});

app.use('/stock/:stockId(\\d+)/transaction/edit/:transactionId(\\d+)', (req, res) => {
    const stockId = parseInt(req.params.stockId, 10);
    const transactionId = parseInt(req.params.transactionId, 10);
    return res.render('transaction-edit', {title: "Transaction edit", stockId, transactionId});
});

app.use('/stock/:stockId(\\d+)/transaction/delete/:transactionId(\\d+)', (req, res) => {
    const stockId = parseInt(req.params.stockId, 10);
    const transactionId = parseInt(req.params.transactionId, 10);
    return res.render('transaction-delete', {title: "Transaction Delete", stockId, transactionId});
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


app.use('/users/:userId(\\d+)/transaction/add/', (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    return res.render('transaction-add', {title: "Add Transactions", userId: userId});
});

app.use('/users/:userId(\\d+)/stock/:stockId(\\d+)/transaction/add/', (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const stockId = parseInt(req.params.stockId, 10);
    return res.render('transaction-add', {title: "Add Transactions", userId, stockId});
});

app.use('/transaction/:id(\\d+)', (req, res) => {
    const transactionId = parseInt(req.params.id, 10);
    return res.render('transaction-detail', {title: "Transaction detail", transactionId: transactionId});
});


app.use('/transaction/add', (req, res) => {
    return res.render('transaction-add', {title: "Add Transactions"});
});

app.use('/transaction/edit/:id(\\d+)', (req, res) => {
    const transactionId = parseInt(req.params.id, 10);
    return res.render('transaction-edit', {title: "Transaction Edit", transactionId});
});

app.use('/transaction/delete/:id(\\d+)', (req, res) => {
    const transactionId = parseInt(req.params.id, 10);
    return res.render('transaction-delete', {title: "Transaction Delete", transactionId});
});

app.use('/transaction', (req, res) => {
    return res.render('transaction-list', {title: "Transactions"});
});

app.use('/login',(req, res) => {
    return res.render('login', {"title": "Login"});
});

app.use('/', (req, res) => { 
    return res.render('login', {"title": "Login"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}, date ${new Date().toLocaleDateString()}...`)});