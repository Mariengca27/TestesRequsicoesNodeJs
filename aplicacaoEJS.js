//21/12/2020 -  TESTE EJS - Novo código que informa ao express que o engine de view está em EJS.

var expressTeste = require('express');  

var funcExpressTeste = expressTeste();       

//Passando essa informação para o express, ou seja, agora está definido que o ejs é View Engine.
funcExpressTeste.set('view engine', 'ejs');

// A implementação em EJS será um pouco diferente agora, por meio do método RENDER:
  funcExpressTeste.get('/', function(requi, respos){
      respos.render("tubarao/martelo.ejs"); //Vai passar agora o arquivo(dentro do diretório criado) que será RENDERIZADO quando a requisição for feita.

//Ideia principal de microsserviços sendo criada. 

});       

funcExpressTeste.listen(3000, function(){

    console.log("SERVIDOR RODANDO COM EJS");

});
