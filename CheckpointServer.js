var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

net.createServer(function(sock) {

    let i = 0;
    let answer = Math.random() * 21;

   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);

   sock.on('data', function(data) {
       if (i == 0) {
           sock.write('OK');
       } else {
           if (data == answer) {
               sock.write('BINGO');
               sock.destroy();
           } else {
               sock.write('WRONG');
           }
       }
       i++;
       if (i==5)
        sock.destroy();
   });

   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
