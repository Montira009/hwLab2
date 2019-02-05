var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
//var ans =[1,2,3,4,5]
//var ans =[6,7,8,9,10]
//var ans =[11,12,13,14,15]
var ans =[16,17,18,19,20]
var i=0

var client = new net.Socket();
client.connect(PORT, HOST, function() {
   console.log('CONNECTED TO: ' + HOST + ':' + PORT);
   client.write('5835512009');
});

client.on('data', function(data) {
   console.log('DATA: ' + data);
   if(data=='OK'){
     client.write(''+ans[i])
   }
   if(data=='WRONG'){
     client.write(''+ans[i])
   }
   if(data=='BINGO')
   {
     console.log("BINGO");
     client.destroy();
   }
   if(i==5){
     client.destroy();
   }
   i++
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
   console.log('Connection closed');
});
