var net = require('net');
var bp = require('./binary-parser').BinaryParser;
var parser = new BinaryParser();



var client = new net.Socket();
client.connect(12345, "192.168.0.101", function() {
	console.log('Connected');
});
 

var buf = [];

client.on('data', function(data) {
	var buf2 = [];
	buf.push(data);
	for (i = 0 ; i < data.length; i+=4)
	{
		if (data.length - i < 4) 
		{
			buf = data.slice(i, data.length);
			break;
		}
		var u32bytes = data.slice(i, i+4);
		str = (Uint32Array(u32bytes)[3] << 24) + (Uint32Array(u32bytes)[2] << 16) + (Uint32Array(u32bytes)[1] << 8) + Uint32Array(u32bytes)[0];
		console.log(str);

	}
	client.write(new Buffer(str/1000.0));
});
 
client.on('close', function() {
	console.log('Connection closed');
});

/*
var net = require('net');

var server = net.createServer(function(socket) {

	var client = new net.Socket();
	client.connect(12345, "192.168.0.101", function() {
		console.log('Connected');
	});

	var buf = [];

	client.on('data', function(data) {
		var buf2 = [];
		buf.push(data);
		for (i = 0 ; i < data.length; i+=4)
		{
			if (data.length - i < 4) 
			{
				buf = data.slice(i, data.length);
				break;
			}
			var u32bytes = data.slice(i, i+4);
			console.log(u32bytes);
			str = (Uint32Array(u32bytes)[3] << 24) + (Uint32Array(u32bytes)[2] << 16) + (Uint32Array(u32bytes)[1] << 8) + Uint32Array(u32bytes)[0];
			console.log(str);

		}
		socket.write(new Buffer(str/1000.0));
	});
	 
	client.on('close', function() {
		console.log('Connection closed');
	});

}).listen(8888, "127.0.0.1");

console.log("Here");

 */