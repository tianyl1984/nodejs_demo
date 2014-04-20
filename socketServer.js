var net = require("net");
var times = 0;

exports.demo = function(){
	var port = 5555;
	net.createServer(function(conn){
		conn.on("data",function(data){
			times++;
			console.log("Receive:" + data.toString());
			conn.write("Hello " + times +"\n");	
		});	
	}).listen(port);
	console.log("start on " + port);
}
