let dados = [
    {id: 1, nome: "larissa", idade: "21 anos"},
    {id: 2, nome: "pedro", idade: "22 anos"}
]

function leiaTodos(){
    localStorage.setItem("object", JSON.stringify(dados));
     var tabelaDados = document.querySelector (".dadosTabela");

     var object = localStorage.getItem('object');
     var objectdata = JSON.parse(object);
     var elements = "";

    objectdata.map(record => (
        elements += `<tr>
            <td>${record.nome}</td>
            <td>${record.idade}</td>
            <td>
            <button>Editar</button>
            <button>Apagar</button>
        </td>
        </tr>`
    ))

    tabelaDados.innerHTML = elements;
    }   

    function create() {
        document.querySelector(".criarFormulario").style.display = "block"; 
        document.querySelector(".adicionarFormulario").style.display = "none ";
    }

    function add() {
        var nome = document.querySelector(".nome").value;
        var idade = document.querySelector(".idade").value;

        var newObject = {id: 3, nome: nome, idade: idade};
        dados.push(newObject);
        

        document.querySelector(".criarFormulario").style.display = "none"; 
        document.querySelector(".adicionarFormulario").style.display = "block"; 

        leiaTodos(); 

    }