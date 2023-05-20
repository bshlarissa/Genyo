let dados = [
    {id:1, nome: "larissa", idade:"21 anos"},
    {id:1, nome: "larissa", idade:"21 anos"},
]

function leiaTodos(){
    localStorage.setItem("object", JSON.stringify(dados));
     var dadosTabela = document.querySelector (".tabelaDados");

     var object = localStorage.getItem('object');
     var objectdata = JSON.parse (object);
     var elements = "";

     
    }   
