const form = document.getElementById('formulario');
const nomes = [];
const telefones = [];

let linhas = '';

function adicionaLinha () {
    const nome = document.getElementById('nomeContato');
    const tel = document.getElementById('telefone')

    if (nomes.includes(nome.value)){
        alert('Você já adicionou esse contato!')
    } else if (telefones.includes(tel.value)){
        alert('Você já adicionou um contato com esse telefone')
    } else {
        nomes.push(nome.value);
        telefones.push(tel.value);

        let linha= '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${tel.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    nome.value = '';
    tel.value = '';

}

function atualizaTabela () {
    const corpoTabela = document.getElementById('corpo');
    corpoTabela.innerHTML = linhas;
}

form.addEventListener ('submit', function(e){
    e.preventDefault();

    adicionaLinha ();
    atualizaTabela ();
})