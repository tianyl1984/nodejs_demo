var net = require("net");

exports.demo = function(){
	var client = net.connect({host:"127.0.0.1",port:5555},function(){
		client.write("hello server!\n");	
	});
	client.on("data",function(data){
		console.log(data.toString());
		client.end();
	});
}
