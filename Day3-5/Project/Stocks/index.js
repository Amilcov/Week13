const express = require('express');
const path = require('path');
//var varHTML  = require('./public/js/var.js');
//let { isLogin, firstName } = require('./public/js/var.js');
const app = express();

const checkLogin = (req, res, next) => {
    res.locals.isLogin = true;
    res.locals.firstName = 'Adri3';
    next();
};

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));

    //  let isLogin = varHTML.getLogin();
    //  let firstName = varHTML.getName();

app.use('/login',(req, res) => {
    return res.render('login', {"title": "Login"});
})

app.use('/register', (req, res) => {
    return res.render('signup', {title: "Register"});
});

app.use('/stocks', checkLogin,(req, res) => {
    return res.render('stocks-list', {title: "Stocks"});
});

app.use('/transactions', (req, res) => {
    return res.render('transaction-list', {title: "Transactions"});
});
app.use('/transaction/add', (req, res) => {
    return res.render('transaction-add', {title: "Transactions Add"});
});

app.use('/', (req, res) => { 
    return res.render('login', {"title": "Login"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {console.log(`Server is listening on port ${PORT}...`)});