

var http = require('http');
var url=require('url');
var fs=require('fs'); 
var path=require('path');
function send(response,res){
	  response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(res));
      response.end();
}
var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var realPath = path.join("assets", pathname);
    console.log(pathname)
	if(pathname.includes('list')){
		var list = Array.from({length:10}).fill({pathname:1}).map((e,i)=>({id:i,pathname:e.pathname+i  }));
		list = [
			{type:'ppt',name:'小米-2020-新品发布会.ppt',date:'2020-11-11', time:'11：11', size:'15Mb',},
			{type:'docx',name:'小米-2020-新品发布会.docx',date:'2020-3-3', time:'2：11', size:'15Mb',},
			{type:'excel',name:'小米-2020-新品发布会.excel',date:'2020-3-3', time:'2：11', size:'15Mb',},
			{type:'pdf',name:'小米-2020-新品发布会.pdf',date:'2020-3-3', time:'2：11', size:'15Mb',},
		]
		list = list.splice(0,~~(Math.random()*10)+1)
		send(response,{list});
	}else{
		send(response,{pathname});	
	}
    
});
server.listen(1234);
console.log(`
"Server runing at port: " + 1234 + "."
`);