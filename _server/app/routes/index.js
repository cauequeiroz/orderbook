/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
    
    app.route('/orders/week')
        .get(api.listaSemana);
        
    app.route('/orders/last-week')
        .get(api.listaAnterior);
        
    app.route('/orders/two-weeks-ago')
        .get(api.listaRetrasada);  
        
    app.route('/orders')
        .post(api.cadastraNegociacao);          
};