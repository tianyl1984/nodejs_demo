
exports.demo = function(){
	//showArgs();
	buffer();
}

function showArgs(){
	//process��ȫ�ֱ�����process.argv���Ի�ȡ�����д��ݹ����Ĳ���
	console.log(process.argv[0] + " " + process.argv[1] + " " + process.argv[2]);	
}

function buffer(){
	var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);//��������������
	console.log("bin:" + bin.toString("utf-8"));	
	
	var bin3 = new Buffer(bin.length);
	bin.copy(bin3);//�����µ�buffer���޸Ĳ���Ӱ��
	
	var bin2 = bin.slice(1);//���غ�binָ��ͬһ��ַ��buffer
	bin2[0] = 0x68;//�޸Ļ�Ӱ��bin
	console.log("bin2" + bin2.toString("utf-8"));
	console.log("bin:" + bin.toString("utf-8"));

	console.log(bin3.toString("utf-8"));
	
	var bin4 = new Buffer("Hello bin4","utf-8");//ʹ���ַ�������
	console.log(bin4.toString("utf-8"));
}
