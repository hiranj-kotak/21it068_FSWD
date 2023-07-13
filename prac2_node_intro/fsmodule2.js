const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    if (req.method === "POST") {
        let body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        }).on("end", () => {
            const str = Buffer.concat(body).toString();
            const jsondata = JSON.parse(str);
            fs.writeFileSync("employee.json", JSON.stringify(jsondata));
        })
        res.end("This is Post Method");
    }
}).listen(3000);