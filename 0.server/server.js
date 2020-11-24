

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
		send(response,{list});
	}else{
		send(response,{pathname});	
	}
    
});
server.listen(1234);
console.log(`
"Server runing at port: " + 1234 + "."
`);