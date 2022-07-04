"use strict";
let btnSalvar = document.querySelector('#btn-salvar-teste');
let buttonDash = document.querySelector('#btn-mostrar-dashboard');
let formAnalitico = document.querySelector('#form-analitico');
let formAmigavel = document.querySelector('#form-amigavel');
let formAutoritario = document.querySelector('#form-autoritario');
let formExpressivo = document.querySelector('#form-expressivo');
let tabela = document.querySelector('#espaco-tabela');
let dados;
let resTeste = [];
document.addEventListener('DOMContentLoaded', () => {
    dados = JSON.parse(localStorage.getItem('dados') || '[]');
    console.log(dados);
    for (let dado of dados) {
        montarTabela(dado);
    }
});
formAnalitico.addEventListener('submit', (e) => {
    e.preventDefault();
    let accordionAnalitico = new bootstrap.Collapse('#esconde-analitico');
    let accordionAmigavel = new bootstrap.Collapse('#esconde-amigavel');
    let resQuestao1 = document.querySelector('input[name="questao-1"]:checked');
    let resQuestao2 = document.querySelector('input[name="questao-2"]:checked');
    let resQuestao3 = document.querySelector('input[name="questao-3"]:checked');
    let resQuestao4 = document.querySelector('input[name="questao-4"]:checked');
    let resQuestao5 = document.querySelector('input[name="questao-5"]:checked');
    let soma = calcularPontuacao([+resQuestao1.value, +resQuestao2.value, +resQuestao3.value, +resQuestao4.value, +resQuestao5.value]);
    let res = document.querySelector('#resultado-analitico');
    res.innerHTML = `${soma}`;
    let resultadoAnalitico = {
        perfil: 'Analítico',
        pontuacao: soma
    };
    let indiceEncontrado = resTeste.findIndex((resultado) => resultado.perfil === 'Analítico');
    if (indiceEncontrado === -1) {
        resTeste.push(resultadoAnalitico);
    }
    else {
        resTeste[indiceEncontrado] = resultadoAnalitico;
    }
    accordionAnalitico.hide();
    accordionAmigavel.show();
});
formAmigavel.addEventListener('submit', (e) => {
    e.preventDefault();
    let accordionAmigavel = new bootstrap.Collapse('#esconde-amigavel');
    let accordionAutoritario = new bootstrap.Collapse('#esconde-autoritario');
    let resQuestao1 = document.querySelector('input[name="questao-6"]:checked');
    let resQuestao2 = document.querySelector('input[name="questao-7"]:checked');
    let resQuestao3 = document.querySelector('input[name="questao-8"]:checked');
    let resQuestao4 = document.querySelector('input[name="questao-9"]:checked');
    let resQuestao5 = document.querySelector('input[name="questao-10"]:checked');
    let soma = calcularPontuacao([+resQuestao1.value, +resQuestao2.value, +resQuestao3.value, +resQuestao4.value, +resQuestao5.value]);
    let res = document.querySelector('#resultado-amigavel');
    res.innerHTML = `${soma}`;
    let resultadoAmigavel = {
        perfil: 'Amigável',
        pontuacao: soma
    };
    let indiceEncontrado = resTeste.findIndex((resultado) => resultado.perfil === 'Amigável');
    if (indiceEncontrado === -1) {
        resTeste.push(resultadoAmigavel);
    }
    else {
        resTeste[indiceEncontrado] = resultadoAmigavel;
    }
    accordionAmigavel.hide();
    accordionAutoritario.show();
});
formAutoritario.addEventListener('submit', (e) => {
    e.preventDefault();
    let accordionAutoritario = new bootstrap.Collapse('#esconde-autoritario');
    let accordionExpressivo = new bootstrap.Collapse('#esconde-expressivo');
    let resQuestao1 = document.querySelector('input[name="questao-11"]:checked');
    let resQuestao2 = document.querySelector('input[name="questao-12"]:checked');
    let resQuestao3 = document.querySelector('input[name="questao-13"]:checked');
    let resQuestao4 = document.querySelector('input[name="questao-14"]:checked');
    let resQuestao5 = document.querySelector('input[name="questao-15"]:checked');
    let soma = calcularPontuacao([+resQuestao1.value, +resQuestao2.value, +resQuestao3.value, +resQuestao4.value, +resQuestao5.value]);
    let res = document.querySelector('#resultado-autoritario');
    res.innerHTML = `${soma}`;
    let resultadoAutoritario = {
        perfil: 'Autoritário',
        pontuacao: soma
    };
    let indiceEncontrado = resTeste.findIndex((resultado) => resultado.perfil === 'Autoritário');
    if (indiceEncontrado === -1) {
        resTeste.push(resultadoAutoritario);
    }
    else {
        resTeste[indiceEncontrado] = resultadoAutoritario;
    }
    accordionAutoritario.hide();
    accordionExpressivo.show();
});
formExpressivo.addEventListener('submit', (e) => {
    e.preventDefault();
    let accordionExpressivo = new bootstrap.Collapse('#esconde-expressivo');
    let resQuestao1 = document.querySelector('input[name="questao-16"]:checked');
    let resQuestao2 = document.querySelector('input[name="questao-17"]:checked');
    let resQuestao3 = document.querySelector('input[name="questao-18"]:checked');
    let resQuestao4 = document.querySelector('input[name="questao-19"]:checked');
    let resQuestao5 = document.querySelector('input[name="questao-20"]:checked');
    let soma = calcularPontuacao([+resQuestao1.value, +resQuestao2.value, +resQuestao3.value, +resQuestao4.value, +resQuestao5.value]);
    let res = document.querySelector('#resultado-expressivo');
    res.innerHTML = `${soma}`;
    let resultadoExpressivo = {
        perfil: 'Expressivo',
        pontuacao: soma
    };
    let indiceEncontrado = resTeste.findIndex((resultado) => resultado.perfil === 'Expressivo');
    if (indiceEncontrado === -1) {
        resTeste.push(resultadoExpressivo);
    }
    else {
        resTeste[indiceEncontrado] = resultadoExpressivo;
    }
    accordionExpressivo.hide();
});
function calcularPontuacao(list) {
    let soma = list.reduce((acc, next) => {
        return acc += (next * 2);
    }, 0);
    return soma;
}
buttonDash.addEventListener('click', () => {
    window.location.href = 'index.html';
});
btnSalvar.addEventListener('click', () => {
    let modalCadastroTeste = new bootstrap.Modal('#modal-teste');
    let nomeEntrevistado = document.querySelector('#input-nome');
    let dataNascimento = document.querySelector('#input-data-nascimento');
    let dataEntrevista = document.querySelector('#input-data-entrevista');
    if (!nomeEntrevistado.value) {
        nomeEntrevistado.focus();
        nomeEntrevistado.setAttribute('style', 'border-color: red; box-shadow: none');
        return;
    }
    if (!dataNascimento.value) {
        nomeEntrevistado.removeAttribute('style');
        dataNascimento.setAttribute('style', 'border-color: red; box-shadow: none');
        return;
    }
    if (!dataEntrevista.value) {
        dataNascimento.removeAttribute('style');
        dataEntrevista.setAttribute('style', 'border-color: red; box-shadow: none');
        return;
    }
    if (resTeste.length < 4) {
        dataEntrevista.removeAttribute('style');
        alert('Você não preencheu ou salvou algum dos questionários de perfil');
        return;
    }
    let id = 1;
    if (dados.length > 0) {
        let maiorIndice = dados.reduce((acc, next) => {
            if (acc < next.id) {
                return next.id;
            }
            return acc;
        }, 1);
        id = maiorIndice + 1;
    }
    let novoTeste = {
        id: id,
        nomeEntrevistado: nomeEntrevistado.value,
        dataNascimento: dataNascimento.value,
        dataEntrevista: dataEntrevista.value,
        resultados: resTeste
    };
    dados.push(novoTeste);
    salvarDados(dados);
    modalCadastroTeste.hide();
    window.location.reload();
});
function salvarDados(list) {
    localStorage.setItem('dados', JSON.stringify(list));
}
function montarTabela(registro) {
    const linha = document.createElement('tr');
    linha.setAttribute('id', `${registro.id}`);
    const colunaId = document.createElement('td');
    colunaId.innerText = `${registro.id}`;
    const colunaNome = document.createElement('td');
    colunaNome.innerText = registro.nomeEntrevistado;
    const colunaNascimento = document.createElement('td');
    colunaNascimento.innerText = registro.dataNascimento;
    const colunaEntrevista = document.createElement('td');
    colunaEntrevista.innerText = registro.dataEntrevista;
    const colunaResultado = document.createElement('td');
    colunaResultado.setAttribute('style', 'text-align: center;');
    const buttonResultados = document.createElement('button');
    buttonResultados.setAttribute('type', 'button');
    buttonResultados.setAttribute('class', 'btn btn-primary');
    buttonResultados.setAttribute('data-bs-toggle', 'modal');
    buttonResultados.setAttribute('data-bs-target', '#modal-resultado');
    buttonResultados.innerHTML = `<i class="bi bi-clipboard-data fs-5"></i>`;
    buttonResultados.addEventListener('click', () => {
        mostraResultado(registro);
    });
    const colunaAcoes = document.createElement('td');
    colunaAcoes.setAttribute('style', 'text-align: center;');
    const buttonApagar = document.createElement('button');
    buttonApagar.setAttribute('type', 'button');
    buttonApagar.setAttribute('class', 'btn btn-danger');
    buttonApagar.innerHTML = '<i class="bi bi-trash3 fs-5"></i>';
    buttonApagar.addEventListener('click', () => {
        apagarTeste(registro.id);
    });
    colunaResultado.appendChild(buttonResultados);
    colunaAcoes.appendChild(buttonApagar);
    linha.appendChild(colunaId);
    linha.appendChild(colunaNome);
    linha.appendChild(colunaNascimento);
    linha.appendChild(colunaEntrevista);
    linha.appendChild(colunaResultado);
    linha.appendChild(colunaAcoes);
    tabela.appendChild(linha);
}
function mostraResultado(registro) {
    let total = registro.resultados.reduce((acc, next) => {
        return acc += next.pontuacao;
    }, 0);
    let percTotalAnalitico = (registro.resultados[0].pontuacao * 100) / total;
    let percTotalAmigavel = (registro.resultados[1].pontuacao * 100) / total;
    let percTotalAutoritario = (registro.resultados[2].pontuacao * 100) / total;
    let percTotalExpressivo = (registro.resultados[3].pontuacao * 100) / total;
    let percAnalitico = (registro.resultados[0].pontuacao * 100) / 30;
    let percAmigavel = (registro.resultados[1].pontuacao * 100) / 30;
    let percAutoritario = (registro.resultados[2].pontuacao * 100) / 30;
    let percExpressivo = (registro.resultados[3].pontuacao * 100) / 30;
    let tituloModal = document.querySelector('#modal-resultados-label');
    tituloModal.innerText = `Nome: ${registro.nomeEntrevistado}`;
    let modalResultBody = document.querySelector('#espaco-modal-resultado');
    modalResultBody.innerHTML = `
                                            <div>
                                                <small style="font-size: 12px;">Analítico: ${registro.resultados[0].pontuacao}</small>
                                                <div class="progress mb-1">
                                                    <div class="progress-bar" role="progressbar" style="width: ${percAnalitico.toPrecision(2)}%" aria-valuenow="${registro.resultados[0].pontuacao}" aria-valuemin="0" aria-valuemax="30"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <small style="font-size: 12px;">Amigável: ${registro.resultados[1].pontuacao}</small>
                                                <div class="progress mb-1">
                                                    <div class="progress-bar bg-success" role="progressbar" style="width: ${percAmigavel.toPrecision(2)}%" aria-valuenow="${registro.resultados[1].pontuacao}" aria-valuemin="0" aria-valuemax="30"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <small style="font-size: 12px;">Autoritário: ${registro.resultados[2].pontuacao}</small>
                                                <div class="progress mb-1">
                                                    <div class="progress-bar bg-warning" role="progressbar" style="width: ${percAutoritario.toPrecision(2)}%" aria-valuenow="${registro.resultados[2].pontuacao}" aria-valuemin="0" aria-valuemax="30"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <small style="font-size: 12px;">Expressivo: ${registro.resultados[3].pontuacao}</small>
                                                <div class="progress mb-1">
                                                    <div class="progress-bar bg-danger" role="progressbar" style="width: ${percExpressivo.toPrecision(2)}%" aria-valuenow="${registro.resultados[3].pontuacao}" aria-valuemin="0" aria-valuemax="30"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <small style="font-size: 12px;">Geral: ${total}pts</small>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${percTotalAnalitico.toPrecision(2)}%" aria-valuenow="${registro.resultados[0].pontuacao}" aria-valuemin="0" aria-valuemax="${total}"></div>
                                                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${percTotalAmigavel.toPrecision(2)}%" aria-valuenow="${registro.resultados[1].pontuacao}" aria-valuemin="0" aria-valuemax="${total}"></div>
                                                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${percTotalAutoritario.toPrecision(2)}%" aria-valuenow="${registro.resultados[2].pontuacao}" aria-valuemin="0" aria-valuemax="${total}"></div>
                                                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: ${percTotalExpressivo.toPrecision(2)}%" aria-valuenow="${registro.resultados[3].pontuacao}" aria-valuemin="0" aria-valuemax="${total}"></div>
                                                </div>
                                            </div>
                                        `;
}
function apagarTeste(codigo) {
    let indice = dados.findIndex((registro) => registro.id === codigo);
    let confirma = confirm(`A operação de exclusão não poderá ser revertida. Tem certeza que deseja excluir o registro ${codigo}?`);
    if (confirma) {
        let linhas = document.querySelectorAll('tbody > tr');
        for (let linha of linhas) {
            if (linha.id === `${codigo}`) {
                tabela.removeChild(linha);
            }
        }
        dados.splice(indice, 1);
        salvarDados(dados);
        window.location.reload();
    }
}
