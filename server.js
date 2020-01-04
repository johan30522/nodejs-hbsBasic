const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/hbs');

app.use(express.static(__dirname + '/public'));


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'johan arroyo'
    });
})
app.get('/about', function(req, res) {
    res.render('about');
})

app.listen(3001)