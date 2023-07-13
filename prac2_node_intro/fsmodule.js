const fs = require('fs');


fs.readFile("./student-data.txt", function (err, data) {
    let str = data.toString();
    let arr = str.split("\n");
    arr.forEach(element => {
        let obj = element.split(",");
        if (obj[0].includes("ma") || Number(obj[1]) >7) {
            console.log(obj[0]);
        }
    });

})