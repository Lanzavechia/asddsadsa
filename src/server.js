const express = require('express');
const exphbs = require('express-handlebars');
const fetch = require('node-fetch');
const path = require('path');



// Initializations
const app = express();

// Setings

app.set('port', process.env.PORT || 4001);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
// Middlewars

app.use(express.urlencoded({extended: false}));

// Routes
app.get('/',async(req,res) =>{
    res.render('index')
})
app.get('/pedido',async(req,res) =>{
    res.render('layouts/pedido')
})


// Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports= app;