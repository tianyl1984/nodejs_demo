var http = require('http');
var URL = require('url');
var querystring = require("querystring");

http.globalAgent.maxSockets = 100;

exports.demo = function(){
	//get();
	post();
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

function post(){
	var url = URL.parse("http://127.0.0.1:8082/dc-framework/dm/demo!ueditorToCms.action");
	var paramdata = querystring.stringify({uuuu:"aaa中文"});
//	console.log(url.hostname);
	var option = {
		hostname:url.hostname,
		port:url.port,
		path:url.path,
		method:"POST",
		headers:{
			"Content-type":"application/x-www-form-urlencoded",
			"Content-length":paramdata.length,
			"User-agent":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0",
			"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
			"accept-language":"zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3",
			"connection":"keep-alive"
		}
	}
	var req = http.request(option,function(resp){
		console.log("status:" + resp.statusCode);
		resp.setEncoding("utf8");
		resp.on("data",function(chunk){
			
		});
	});
	req.on("error",function(e){
		console.log("error:" + e.message);
	});
	req.write(paramdata);
	req.end();
}
