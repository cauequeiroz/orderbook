/* Código simplório, apenas para fornecer o serviço para a aplicação */

var http = require('http')
    ,app = require('./config/express')
    ,port = process.env.PORT || 3000;

http.createServer(app).listen(port, function() {
    console.log('\n\n====================================================');
    console.log('Listen on port: ' + this.address().port);
});

