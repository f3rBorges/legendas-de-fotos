var dadosFrase = [];

function Verifica() {
    const user = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    if (!user || !senha) {
        alert("Por favor Digite uma frase!");
    } else {
        alert("Campos preenchidos!");
    }
}

function salvarFrase() {
    const novaFrase = document.getElementById("novaFrase").value;
    const temaSelecionado = document.getElementById("selectTema").value;

    if (novaFrase && temaSelecionado) {
        dadosFrase.push({ frase: novaFrase, tema: temaSelecionado });
        atualizaTabela();
        document.getElementById("novaFrase").value = '';
    } else {
        alert("Por favor Digite uma frase!");
    }
}

function atualizaTabela() {
    let tabela = "<tr><th>Frase</th><th>Tema</th><th>Ações</th></tr>";

    dadosFrase.forEach((item, i) => {
        tabela += `<tr><td>${item.frase}</td><td>${item.tema}</td><td><button class='btn btn-success' onclick='editar(${i})'>Editar</button><button class='btn btn-danger' onclick='excluir(${i})'>Excluir</button></td></tr>`;
    });

    document.getElementById('tabela').innerHTML = tabela;
}

function excluir(i) {
    dadosFrase.splice(i, 1);
    atualizaTabela();
}

function editar(i) {
    const fraseEditada = prompt("Editar frase:", dadosFrase[i].frase);
    if (fraseEditada !== null) {
        dadosFrase[i].frase = fraseEditada;
        atualizaTabela();
    }
}

