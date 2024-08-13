const form = document.getElementById('form-contatos');
const nomeContato = [];
const phoneContato = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputPhoneContato = document.getElementById('phone-contato');

    if (nomeContato.includes(inputNomeContato.value)){
        alert(`O nome: ${inputNomeContato.value} já existe`);
    } else if (phoneContato.includes(inputPhoneContato.value)){
        alert(`O telefone: ${inputPhoneContato.value} já existe`);
    } else {
        nomeContato.push(inputNomeContato.value);
        phoneContato.push(inputPhoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputPhoneContato.value}</td>`;

        linhas += linha;;
    }

    inputNomeContato.value = '';
    inputPhoneContato.value = '';

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


