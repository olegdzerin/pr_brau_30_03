var express = require('express');
var app = express();
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
var fortunes = ["Переможи",
    "Небійся",
    "Сюрпризи",
    "Будь простіше"
];


app.get('', function (req,res) { 
    res.render('home');
});
app.get('/about', function (req, res) { 
    var randomFortune = fortunes[
        Math.floor(Math.random() * (fortunes.length))];
    res.render('about', { fortune: randomFortune });
});
// пользовательская страница 404
app.use(function(req, res){
// res.type('text/plain');
// res.status(404);
// res.send('404 — Не найдено');
    res.writeHead(404, { 'Content-type': 'text/plain' });
   res.end('404 - Не найдено');
 
});
// пользовательская страница 500
app.use(function(err, req, res, next){
console.error(err.stack);
res.type('text/plain');
res.status(500);
res.send('500 — Ошибка сервера');
});
app.listen(app.get('port'), function(){
console.log( 'Express запущен на http://localhost:' +
app.get('port') + '; нажмите Ctrl+C для завершения.' );
});