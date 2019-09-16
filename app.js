var http = require('http');


var server=http.createServer((req,res) => {
    if(req.url=='/users')
    {
        res.setHeader("Content-Type","application/json")
           res.end("{'name':'absdfbc'},{'age:'67'}");
        
    }
else if(req.url=='/' || req.url=='/home')
{
    res.end("home");
}
else{
    res.end("error");
}

});
server.listen(8000);
