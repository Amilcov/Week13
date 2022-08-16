const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));



app.use('/login', (req, res) => {
    return res.render('login', {"title": "Login"});
});

app.use('/register', (req, res) => {
    return res.render('signup', {title: "Register"})
});

app.use('/stocks', (req, res) => {
    return res.render('stocks-list', {title: "Stocks", stocks: []})
});

app.use('/transactions', (req, res) => {
    return res.render('transactions-list', {title: "Transactions", transactions: []})
});
app.use('/home', (req, res) => {
    return res.json({"home":"home"});
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}...`)});