
let listUlDesktop = document.getElementsByClassName('list')
let sectionFrenteCaixa = document.querySelector('#frenteCaixa');
let sectionTelaApresentacao2 = document.querySelector('#telaApresentacao');
let sectionTelaSobreNos2 = document.querySelector('#telaSobreNos');

let menuBurger = document.getElementsByClassName('menuBurguer');
let navMenuLateral = document.getElementById('paiMenuOptions');
let navButtonFrenteCaixa = document.querySelector('#navFrenteCaixa');
let navButtonFluxoCaixa = document.querySelector('#navFluxoCaixa');


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
        console.log('ta funcionando')
}

for (const menusBurguer of menuBurger) {
    menusBurguer.addEventListener('click', menuLateral)
}

function openFrenteCaixa() {
    if (sectionFrenteCaixa.style.display === 'none' && sectionTelaApresentacao2.style.display === 'flex') {
        sectionFrenteCaixa.style.display = 'flex';
        sectionTelaApresentacao2.style.display = 'none';
    }
    else {
        sectionFrenteCaixa.style.display = 'none';
        sectionTelaApresentacao2.style.display = 'flex';
      }
}

navButtonFrenteCaixa.addEventListener('click', openFrenteCaixa)
 
