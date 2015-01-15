/**
 * Created by tomerweller on 1/12/15.
 */

var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render('index', { name: req.param("name") });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});