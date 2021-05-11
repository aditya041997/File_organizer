let fs=require('fs');
//let data=fs.readFileSync('abc.txt','utf-8');
//console.log(data);

let wdata="This is some data I want to write \n";
fs.writeFileSync("D://AI-ML-Labs//Other//write.txt",wdata);
fs.appendFileSync("write.txt","This is append data");
//fs.unlinkSync("abc.txt");//To delete file
//fs.mkdirSync('D://AI-ML-Labs//Other');
console.log(fs.existsSync('D://AI-ML-Labs'));