var http = require('http');

//nodeĬ�ϵ�client��http.globalAgent�������޸�Ĭ��client�Ĳ�����
http.globalAgent.maxSockets = 100;

exports.demo = function(){
	get();	
}

function get(){
	http.get("http://www.baidu.com",function(response){
		console.log("statusCode:" + response.statusCode);
		console.log("----------->>header>>-----------");
		for(var key in response.headers){
			console.log(key + ":" + response.headers[key]);
		}		
		console.log("-----------<<header<<-----------");
		
		var body = [];
		response.on("data",function(chunk){
				body.push(chunk);
		});
		
		response.on("end",function(){
			body = Buffer.concat(body);
			console.log("body:\n" + body.toString());	
		});
	});	
}