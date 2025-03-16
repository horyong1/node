const http = require("http");
const url = require("url"); // url 모듈을 로딩
http.createServer((req, res)=>{
	const path = url.parse(req.url, true).pathname; //패스명 할당
	res.setHeader("Content-Type","text/html"); // html 파일로 해석함

	if(path in urlMap){		//path가 있는지 확인
		urlMap[path](req, res);		// path 값으로 매핑된 함수 실행
	}else{
		notFound(req, res);
	}

})
.listen("3000", () => console.log("라우터를 만들어 보자자"));

const user = (req, res) => {
	const userInfo = url.parse(req.url, true).query;

	res.end(`[user] name : ${userInfo.name}, age: ${userInfo.age}`);
};

const feed = (req, res) => {
	res.end(`<ul>
		<li>pictuer1</li>
		<li>pictuer2</li>
		<li>pictuer3</li>
		</ul>`
	);
};

const notFound = (req, res) => {
	res.statusCode = 404;
	res.end("404 page not found");
};

const urlMap ={
	"/" : (req, res) => res.end("HOME"),
	"user" : user,
	"feed" : feed,
}