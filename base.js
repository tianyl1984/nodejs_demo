
exports.demo = function(){
	//showArgs();
	buffer();
}

function showArgs(){
	//process是全局变量，process.argv可以获取命令行传递过来的参数
	console.log(process.argv[0] + " " + process.argv[1] + " " + process.argv[2]);	
}

function buffer(){
	var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);//创建二进制数据
	console.log("bin:" + bin.toString("utf-8"));	
	
	var bin3 = new Buffer(bin.length);
	bin.copy(bin3);//复制新的buffer，修改不受影响
	
	var bin2 = bin.slice(1);//返回和bin指向同一地址的buffer
	bin2[0] = 0x68;//修改会影响bin
	console.log("bin2" + bin2.toString("utf-8"));
	console.log("bin:" + bin.toString("utf-8"));

	console.log(bin3.toString("utf-8"));
	
	var bin4 = new Buffer("Hello bin4","utf-8");//使用字符串创建
	console.log(bin4.toString("utf-8"));
}
