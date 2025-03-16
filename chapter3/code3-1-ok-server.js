const http = require("http");
const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type","text/html"); // html 파일로 해석함
    res.end("OK"); // 텍스트나 파일을 보내루 있음
});

server.listen("3000", () => console.log("OK 서버 시작!!!"));