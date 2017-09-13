/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

var dataAtual = new Date();
var dataAnterior = new Date();
dataAnterior.setDate(dataAtual.getDate() - 7);
var dateRetrasada = new Date();
dateRetrasada.setDate(dataAtual.getDate() - 14);

var negociacoes = [
      { date : dataAtual, amount : 1, price : 150},
      { date : dataAtual, amount : 2, price : 250},
      { date : dataAtual, amount : 3, price : 350},
      { date : dataAnterior, amount : 1, price : 450},
      { date : dataAnterior, amount : 2, price : 550},
      { date : dataAnterior, amount : 3, price : 650},
      { date : dateRetrasada, amount : 1, price : 750},
      { date : dateRetrasada, amount : 2, price : 950},
      { date : dateRetrasada, amount : 3, price : 950}
    ];


api.listaSemana = function(req, res) {
    var negociacoesAtuais = negociacoes.filter(function(negociacao) {
        return negociacao.date > dataAnterior;
    });
    res.json(negociacoesAtuais);
};

api.listaAnterior = function(req, res) {
   
   var negociacoesAnteriores = negociacoes.filter(function(negociacao) {
        return negociacao.date < dataAtual && negociacao.date > dateRetrasada;
    });
	setTimeout(function() {
		res.json(negociacoesAnteriores);	
	}, 500);
    
};

api.listaRetrasada = function(req, res) {

   var negociacoesRtrasadas = negociacoes.filter(function(negociacao) {
        return negociacao.date < dataAnterior;
    });
    res.json(negociacoesRtrasadas);
    
};

api.cadastraNegociacao = function(req, res) {

   console.log(req.body);
   req.body.date = new Date(req.body.date.replace(/-/g,'/'));
   negociacoes.push(req.body);
   res.status(200).json("Negociação recebida");
};



module.exports = api;