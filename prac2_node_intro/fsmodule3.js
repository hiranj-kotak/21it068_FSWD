const fs = require("fs");
const { type } = require("os");

let file1 = fs.readFileSync("./cmp1.txt", "utf-8");
let file2 = fs.readFileSync("./cmp2.txt", "utf-8");
    
if (file1.length == file2.length) {
    console.log("The files have the same length");
} else if (file1.length > file2.length) {
    console.log("The first file is longer than the second file");
} else {
    console.log("The second file is longer than the first file");
}