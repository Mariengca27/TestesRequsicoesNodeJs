// --20/12/2020--  TESTE de verificação da comunicação com o cmd/shell com retorna na propria cmd.
console.log('Tipos de tubarões existentes');

// --20/12/2020 -- TESTE de resposta as requisições do HTTP("servidor + biblioteca").
var httpReq = require('http'); //Incorporando a biblioteca HTTP

//Criando um servidor que a partir de uma requisição, pode retornar uma resposta.
httpReq.createServer(function(requi, respos){


//A maioria das respostas para o user é em HTML. 

// --20/12/2020 -- TESTES de requisições da VÁRIS URLs

// Categoria 1: Para tubarões brancos e suas informações específicas
var catOne = requi.url

          //Criando as condicionais para cada requisição específica de uma URL
   if(catOne == '/tubaraobranco'){
       respos.end("<html><body>Tubarão branco é o maior do mundo?! SERÁ?</body></html>");

   }else if(catOne == '/tubaraomartelo'){
       respos.end("<html><body>O tubarão martelo é o mais agressivo de todos!? SERÁ?</body></html>");

   } else if(catOne == '/tubaraomartelo/tubaraofilhote'){  
    	respos.end("<html><body>PONTO IMPORTANTE O TUBARÃO FILHOTE É O MAIS AGRESSIVO DOS MARTELOS!? SERÁ?</body></html>");

   } else if(catOne == 'tubaraobaleia'){
        respos.end("<html><body>O Tubarão baleia é o mais tranquilo?!SERÁ?</body></html>");   

   }else{
   	//Se nenhum das URLs for selecionadas, o localhost daquela porta se direciona a "página inicial"
       respos.end("<html><body>LOCAL DE INFOS SOBRE TUBARÕES DE TODOS OS TIPOS</body></html>");
   } 




}).listen(3000);    // A porta onde está direcionada a requisição.

//Após isso voltar ao cmd -> "aplicar" o node no código criado e verificar pelo browser se a porta está sendo ouvida(localhost:nporta)


/* OBS: lembrando que nesse código básico não está instalado nenhum pacode de EJS, NPM, EXPRESS, ou Nodemon.
Ou seja, toda alteração deve ser parar a comunicação com o servidor e depois reconectar novamente. A ideia desse
código é apenas dar uma ideia "base" para testes antes de qualquer implementação futura. 
*/
