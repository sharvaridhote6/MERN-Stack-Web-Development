// flow of the code-
// server is craeted using createServer
// file path is calculated for each incoming request
// extension name is extracted from the file path
// mime types are defined
// server is started

const http= require('http'); //http is a core module in Node.js that provides functionality to create HTTP servers and clients
const fs= require('fs'); //fs is a core module in Node.js that provides file system-related functionality
const path = require('path'); //path is a core module in Node.js that provides functionality to work with file paths

const port= 3001;

//creates a server object
const server = http.createServer((req,res)=>{  
    const filePath= path.join(__dirname, req.url === '/' ? "index.html":req.url) //dirname gives the absolute path to the current directory of the script, joins the current directory with the requested URL and stores it in filePath, if the requested URL is '/', it serves the index.html file and if not, it serves the requested file
    console.log(filePath);
    

    const extName= String(path.extname(filePath)).toLowerCase()//extracts the extension of the file and converts it to lowercase

    const mimeTypes={
    '.html':'text/html',
    '.css':'text/css',
    '.js':'text/javascript',
    '.png':'text/png',
    '.jpeg':'text/jpeg',
    }

    const contentType = mimeTypes[extName] || 'application/octet-stream'//if the extension is not found, it defaults to application/octet-stream, which is a binary file, and is used for unknown file types

    fs.readFile(filePath,(err,content)=>{
        if(err){
            if(err.code ==='ENOENT'){
                res.writeHead(404,{'Content-Type':'text/html'})
                res.end('404: File Not Found')
            }
        }else{
            res.writeHead(200,{'Content-Type':contentType})//writes the response header
            res.end(content,'utf8')//body of the response, utf 8 is the character encoding
        }
    })
})

//starts the server
server.listen(port,()=>{ 
    console.log(`Server is running on port ${port}`);
})
