const http = require("http");
const url = require("url"); // url 모듈을 로딩
http.createServer((req, res)=>{
	const path = url.parse(req.url, true).pathname; //패스명 할당
	res.setHeader("Content-Type","text/html"); // html 파일로 해석함

	if(path == "/user"){
		res.end("[user] name : andy, age: 30");
	
	}else if(path == "/feed"){
		res.end(`<ul>
				<li>pictuer1</li>
				<li>pictuer2</li>
				<li>pictuer3</li>
				</ul>`
		);

	}else{
		res.statusCode = 404;
		res.end("404 page not found"); // 텍스트나 파일을 보내루 있음
	}

})
.listen("3000", () => console.log("라우터를 만들어 보자자"));