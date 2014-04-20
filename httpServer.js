
var http = require('http');

var times = 0;

exports.demo = function(){
	var port = 8012;
	http.createServer(function(request,response){
		times++;
		console.log("----------->>-----------" + times);
		var body = [];
		console.log("method:" + request.method);
		console.log("requestUrl:" + request.url);
		
		console.log("----------->>header>>-----------");
		for(var key in request.headers){
			console.log(key + ":" + request.headers[key]);
		}		
		console.log("-----------<<header<<-----------");
		
		request.on("data",function(chunk){
				body.push(chunk);
		});
		request.on("end",function(){
			body = Buffer.concat(body);
			console.log("body:\n" + body.toString());	
		});
		console.log("-----------<<-----------" + times);
		
		response.writeHead(200,{"Content-Type":"text-plain"});
		response.end("Hello World!\n");
	}).listen(port);
	console.log("Listen on " + port);	
}