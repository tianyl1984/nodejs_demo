var times = 0;

exports.show = function(msg){
	times++;
	console.log(msg + "  Times:" + times);	
}

//module对象可以访问当前模块的信息，使用module.exports=function(){}可以修改当前模块导出对象。默认导出为普通对象，可以修改为函数或其他。

