var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
var client = new net.Socket();
var i = 0

client.connect(PORT, HOST, function() {
 console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 client.write('5835512009');
});

client.on('data', function(data) {
	 console.log('DATA: ' + data);
	 if(data=="OK")
	 {
    // Get process.stdin as the standard input object.
      var standard_input = process.stdin;

      // Set input character encoding.
      //standard_input.setEncoding('utf-8');

      // Prompt user to input data in console.
      console.log("Please input number in command line."  + "#" + (i+1));

      // When user input data and click enter key.
      standard_input.on('data', function (data) {

          // User input exit.
          if(data === 'exit\n'){
              // Program exit.
              console.log("User input complete, program exit.");
              process.exit();
          }else
          {
              client.write(''+ data)
          }
      });
	 }
	  else if(data=="WRONG" && i < 5)
	 {
     var standard_input = process.stdin;

     // Set input character encoding.
     //standard_input.setEncoding('utf-8');

     // Prompt user to input data in console.
     console.log("Please input number in command line."  + "#" + (i+1));

     // When user input data and click enter key.
     standard_input.on('data2', function (data2) {

         // User input exit.
         if(data === 'exit\n'){
             // Program exit.
             console.log("User input complete, program exit.");
             process.exit();
         }else
         {
             client.write('' + data2)
         }
     });
	 }
	 else if(data=="BINGO")
	 {
    console.log("correct!");
	 	client.destroy()
    process.exit();
	 }
	 if(i == 5)
	 {
		 client.destroy()
     process.exit();
	 }
	 i++


});

client.on('error', (err) => console.log(err))
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});
