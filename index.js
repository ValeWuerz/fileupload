var express = require('express');
var formidable = require('formidable');
const port = process.env.PORT || 8083;


var app = express();

/* app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
}); */
app.use('/', express.static('public'))

app.post('/', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, ()=>{
console.log("app is started and listening to the port : http://localhost:"+port);
});