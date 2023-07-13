const fs = require("fs");


let file1 = fs.readFileSync("./createfile.json", "utf-8");

let obj = JSON.parse(file1);

for (let i = 0; i < obj.length; i++) {
    if (obj[i].type == "file") {
        if (obj[i].content == null) {
            fs.writeFileSync(obj[i].path, "");
        } else {
            fs.writeFileSync(obj[i].path, obj[i].content);
        }
    } else {
        fs.mkdirSync(obj[i].path);
    }
}