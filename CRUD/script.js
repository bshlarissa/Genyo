let dados = [
    {id: 1, nome: "larissa", idade: "21 anos"},
    {id: 2, nome: "pedro", idade: "22 anos"}
]

function leiaTodos(){
    localStorage.setItem("informacoes", JSON.stringify(dados));
     var tabelaDados = document.querySelector (".dadosTabela");

     var informacoes = localStorage.getItem('informacoes');
     var dadosDaInformacao = JSON.parse(informacoes);
     var elementos = "";
 
     dadosDaInformacao.map(record => (
        elementos += 
        `<tr>
            <td>${record.nome}</td>
            <td>${record.idade}</td>
            <td>
            <button class="editar" type="button" onclick={editar(${record.id})} 
            style= "padding: 8px;
            background-color:rgb(43, 62, 55);  
            color: white;
            border-radius: 7px;">Editar</button>

            <button class="apagar" type="button" onclick={apagar(${record.id})} 
            style= "padding: 8px;
            background-color:rgb(43, 62, 55);  
            color: white;
            border-radius: 7px;">Apagar</button>
            </td>
        </tr>`
    ))

    tabelaDados.innerHTML = elementos;

    }   

    function apagar(id){
        dados = dados.filter (rec => rec.id !== id);
        leiaTodos ();
    }

    function criarNovoRegistro() {
        document.querySelector(".criarFormulario").style.display = "block"; 
        document.querySelector(".adicionarFormulario").style.display = "none ";
    }

    function adicionarNovoRegistro() {
        var nome = document.querySelector(".nome").value;
        var idade = document.querySelector(".idade").value;

        var novoRegistro = {id: 3, nome: nome, idade: idade};
        dados.push(novoRegistro);
        
        document.querySelector(".criarFormulario").style.display = "none"; 
        document.querySelector(".adicionarFormulario").style.display = "block"; 

        leiaTodos(); 
    }

    function editar(id) {
        document.querySelector('.atualizarFormulario').style.display ="block";
        var obj = dados.find (rec => rec.id === id);

        document.querySelector('.u-nome').value = obj.nome;
        document.querySelector('.u-idade').value = obj.idade;
        document.querySelector('.id').value = obj.id;
    }

    function atualizar() {
        var id = parseInt(document.querySelector('.id').value);
        var nome = document.querySelector('.u-nome').value;
        var idade = document.querySelector('.u-idade').value;

        var index = dados.findIndex(rec => rec.id === id);
        dados[index] = {id, nome, idade};
        document.querySelector('.atualizarFormulario').style.display ="none";

        leiaTodos();
    }