
let listUlDesktop = document.getElementsByClassName('list')
let sectionFrenteCaixa = document.querySelector('#frenteCaixa');
let sectionTelaApresentacao2 = document.querySelector('#telaApresentacao');
let sectionTelaSobreNos2 = document.querySelector('#telaSobreNos');

let menuBurger = document.getElementsByClassName('menuBurguer');
let navMenuLateral = document.getElementById('paiMenuOptions');
let navButtonFrenteCaixa = document.querySelector('#navFrenteCaixa');
let navButtonFluxoCaixa = document.querySelector('#navFluxoCaixa');
let selectValue = document.querySelector('relatoriosSelect');

let sectionRelatorios = document.getElementById('relatorios');
let subSectionPlanoContas = document.getElementById('planoContas');
let subSectionContasPagarReceber = document.getElementById('contarPagarEReceber');
let subArticleContasPagar = document.getElementById('contasPagar');
let subArticleContasReceber = document.getElementById('contasReceber');


// Configuracao lista header
for (const lists of listUlDesktop) {
    if (window.innerWidth >= 601) {
        lists.style.display = 'flex'
    }
}

function menuLateral() {
        if (navMenuLateral.classList.contains('fora')) {
            navMenuLateral.classList.add('dentro');
            navMenuLateral.classList.remove('fora');
        }
        else {
            navMenuLateral.classList.add('fora');
            navMenuLateral.classList.remove('dentro');
        }
        console.log('ta funcionando 2')
}

for (const menusBurguer of menuBurger) {
    menusBurguer.addEventListener('click', menuLateral)
}


function openFrenteCaixa() {
    if (sectionFrenteCaixa.style.display === 'none' &&
        sectionTelaApresentacao2.style.display === 'flex'
    ) {
        sectionFrenteCaixa.style.display = 'flex';
        sectionTelaApresentacao2.style.display = 'none';
    }
}

navButtonFrenteCaixa.addEventListener('click', openFrenteCaixa)




let mobileMenuBurger = document.getElementsByClassName("menuBurguer");
let listUl = document.getElementsByClassName("list");

let listLiOne = document.getElementById('SobreNosTelaInical');
let listLiTwo = document.querySelector("#LiTwo");
let sectionTelaApresentacao = document.getElementById('telaApresentacao');
let sectionTelaSobreNos = document.getElementById('telaSobreNos');
let navMenuLateral2 = document.getElementById('paiMenuOptions');

if (window.innerWidth <= 600) {
    navMenuLateral2.style.display = 'none'
}

// Abertura Menu
function menu() {
    if (window.innerWidth <= 600) {
        for (lists of listUl) {
            if (lists.style.display === 'none') {
                lists.style.display = 'block'
            }
            else {
                lists.style.display = 'none'
            }
        }
        console.log('ta funcionando')
    }
}

for (const botoesBurguer of mobileMenuBurger) {
    botoesBurguer.addEventListener('click', menu)
}

// transicao abas

function transicaoAbas() {
    if (sectionTelaApresentacao.style.display === 'flex' ||
        sectionTelaSobreNos.style.display === 'none'
    ) {
        sectionTelaApresentacao.style.display = 'none';
        sectionTelaSobreNos.style.display = 'flex';
        listLiTwo.innerHTML = 'Voltar'
    }
    else {
        sectionTelaApresentacao.style.display = 'flex';
        sectionTelaSobreNos.style.display = 'none';
        listLiTwo.innerHTML = 'SobreNos'
    }
    console.log('funcionando')
}


listLiOne.addEventListener('click', transicaoAbas)
listLiTwo.addEventListener('click', transicaoAbas)