<html>
	<body>
		<h1>HI</h1>
	</body>
</html>
<script type="text/javascript" src="http://localhost/socket.io.js"></script>
<script>
	var socket = io.connect("http://localhost:8888");
	socket.on("connect", function() {
		console.log("connect");
	});
	socket.on("message", function(data) 
	{
		console.log("here " + data);
	});
</script>