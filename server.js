var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/question', function(req, res){
    console.log("Procesando /question...");
  res.send('<html>'
   	     +   '<body>'
  	     +     '<form   method="post"   action="/check">'
         +       '¿Quién inventó la Web? <p>'
         +       '<input  type="text"   name="respuesta" /><p>'
         +       '<input  type="submit" value="Enviar"/>'
         +     '</form>'
         +   '</body>'
         + '</html>'
         );
});

app.post('/check', function(req, res) {
    console.log("Procesando /check...");
  var respuesta = req.body.respuesta;
  var response = "Correcto, " + respuesta;

  if (respuesta !== 'Tim Berners Lee') {
    response = "Incorrecto, " + respuesta + " no";
  }
  
  res.send('<html>'
  	     +   '<body>'
  	     +     response + " inventó la Web <p>"
  	     +     '<a href="/question">Intentar de nuevo</a>'
         +   '</body>'
         + '</html>'
         );
});
console.log("Escuchando por 8000...");
app.listen(8000);