import http from "http";

http.createServer( (req, res) => {

    res.write('Holaaaaaa planeta');

    res.end();

})
.listen( 8080 );

console.log('Escuchando en el puerto 8080');