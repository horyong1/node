const http = require("http"); // Node.js http 모듈을 불러와 http 서버 관련 기능 사용용
let count = 0; // 요청 수 체크

// 노드 서버 객체
const server = http.createServer((req, res)=>{
    console.log((count += 1));
    res.statusCode = 200;
    res.setHeader("Content-type","text/plain");
    res.write("hello\n");

    setTimeout(()=>{
        res.end("Node.js");
    },2000);
});

server.listen(8000, () => console.log("Hello Node.js"));