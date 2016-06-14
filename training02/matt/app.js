var http = require('http');

var hostname = '127.0.0.1' || 'localhost';
var port = 1337;


var htmlBody = '<html>' +
    '<head>' +
    '<title>Nodejs Web Server</title></head>' +
    '<body><div></div><div class="container"><div class="col-md-6"></div><div class="col-md-6"><h2>Left Box</h2></div></div></body>' +
    '</html>';
var server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html','Charset':'UTF-8' });
    res.write(htmlBody);
    res.end();
});
server.listen(port, hostname, function(req,res) {
    console.log("Server running at http://"+hostname +":"+ port +"/");
});
//http.request("/", function (req, res) {
//    res.render("/index", function () {
//        res.header();
//    });
//});