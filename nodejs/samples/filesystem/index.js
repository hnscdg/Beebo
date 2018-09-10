var fs = require("fs");

// // asynchronous
// fs.readFile('input.txt', function(err, data){
//     if(err){
//         return console.error(err);
//     }
//     console.log("异步读取:" + data.toString());
// });

// synchronous
console.log('**********readFileSync***************');
var data = fs.readFileSync('input.txt');
console.log('同步读取：' + data.toString());

console.log("program read completely");
console.log('***********end readFileSync**************');

console.log('************state*************');
console.log("Prepare for open a file!");
fs.stat('input.txt', function(err, stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("read file successfully");

       // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory()); 
});
console.log('***********endState**************');

console.log('************writeFile*************');
console.log('begin to write data to file');
fs.writeFile('input.txt', 'I want write the file through this way!', function(err){
    if(err){
        return console.error(err);
    }
    console.info("add data to file successfully");
    console.info("read the file which write before");
    fs.readFile('input.txt', function(err, data){
        if(err){
            return console.error(err);
        }
        console.log("Asynchronous read the file:" + data.toString());
    });
});