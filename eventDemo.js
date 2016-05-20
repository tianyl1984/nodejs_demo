var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("event0",function(){
	console.log("event0");
	eventEmitter.emit("event1");
});

eventEmitter.on("event1",function(){
	console.log("event1");
});

process.nextTick(function(){
	eventEmitter.emit("event0");
});

console.log("over");

