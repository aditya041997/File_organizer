let fs=require('fs');
let path=require('path');
let input=process.argv.slice(2);
//console.log(input);
let content=fs.readdirSync(input[0]);
//console.log(content);

let folderPath=input[0];
let extensions={
    Images:['.jpg','.jpeg','.gif','.png','.bmp','.tiff'],
    Audio:['.mp3','.m4a','.wav','.flac'],
    Document:['.pdf','.ppt'],
    Compressed:['.rar','.zip'],
    Video:['.mp4','.avi','webm','.mkv','.flv'],
    Programs:['.exe','.msi'],
    Other:['.json']
}

let extFolderPath=folderPath;
function moveFile(fileName , folderPath) {
    // copy file
    let sourceFilePath = path.join(folderPath,fileName); // "./Downloads/abc.txt"
    //console.log(sourceFilePath);
    let destinationFilePath = path.join(extFolderPath,fileName); // "./Downloads/Documents/abc.txt"
    fs.copyFileSync(sourceFilePath , destinationFilePath);
  
    // delete file
    fs.unlinkSync(sourceFilePath);
  }
function createFolder(){
    fs.mkdirSync(extFolderPath);
}
function checkFolder(extensionName,folderPath){
    for(let key in extensions){
        let arr=extensions[key];
        let existsorNot=arr.includes(extensionName);
        if(existsorNot==true){
            //console.log(extensionName);
            //console.log(key);
            extFolderPath=path.join(folderPath,key);
            //console.log(extFolderPath);
            break;
        }
    }
    return fs.existsSync(extFolderPath);
}

for(let i=0; i<content.length; i++){
    //console.log(content[i]);
    let extensionName=path.extname(content[i]);
    let extensionFolderExist=checkFolder(extensionName,folderPath);
    //console.log(extensionFolderExist);
    if(extensionFolderExist==false){
        createFolder();
        //move in this folder
        moveFile(content[i],folderPath);
    }
    else{
        //move in this folder
        moveFile(content[i],folderPath);
    }
}
