// 21/12/2020 -- Teste do EXPRESS, verificar se a estrutura vai bater. 

//Observe que agora não é mais um requisição de HTTP, mas sim de express

var expressTeste = require('express');   //Retorna uma função, mas não a executa, precisa chama-la

var funcExpressTeste = expressTeste();        //Chamando a função. 

//21/12/2020 -  essa parte é importante para dar o direcionamento das páginas 
funcExpressTeste.get('/', function(requi, respos){
      respos.send("<html><body> VOCÊ ESTÁ EM UMA PÁGINA INICIAR DE INFORMAÇÕES SOBRE TUBARÕES EM EXPRESS.</body></html>");


});       //Home principal(utilização do send por estar trabalhando diretamente com EXPRESS)


funcExpressTeste.get('/tubaraobranco', function(requi, respos){
      respos.send("<html><body> VOCÊ ESTÁ FALANDO SOBRE O TUBARÃO BRANCO.</body></html>");
}); //Fazendo os outros direcionamentos de URL utilizando EXPRESS


funcExpressTeste.get('/tubaraobranco/filhotebranco', function(requi, respos){
      respos.send("<html><body> VOCÊ ESTÁ FALANDO SOBRE O FILHOTE DO TUBARÃO BRANCO.</body></html>");


});
     // Fazendo os outros direcionamentos de URL utilizando EXPRESS


//Método listen e uma função de callback responsável por MOSTRAR se a porta está aberta 
funcExpressTeste.listen(3000, function(){

    console.log('SERVER ESTÁ ONLINE NA PORTA 3000 COM EXRESS');


}); 
// Estrutura feita para recuperar/ajustar as modificações dadas pelo novo módulo do express.
