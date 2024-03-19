
let listUl = document.getElementsByClassName('list')
let menuBurger = document.getElementsByClassName('menuBurguer');
let listLiOne = document.getElementById('SobreNosTelaInical');
let listLiTwo = document.querySelector("#LiTwo");
let listLiThree = document.querySelector('#listLiThree')
let contato = document.getElementById('contact');
let screenLogin = document.getElementsByClassName('screenLogin');
let headerRelatorios = document.getElementById('headerRelatorios');

let navMenuLateral = document.getElementById('paiMenuOptions');
let navButtonFrenteCaixa = document.querySelector('#navFrenteCaixa');
let navButtonFluxoCaixa = document.querySelector('#navFluxoCaixa');

let selectValue = document.querySelector('#relatoriosSelect');
let sectionFrenteCaixa = document.querySelector('#frenteCaixa');
let sectionTelaApresentacao = document.querySelector('#telaApresentacao');
let sectionTelaSobreNos = document.querySelector('#telaSobreNos');
let sectionRelatorios = document.getElementById('relatorios');

let subSectionPlanoContas = document.getElementById('planoContas');
let subSectionContasPagarReceber = document.getElementById('contarPagarEReceber');
let subArticleContasPagar = document.getElementById('contasPagar');
let subArticleContasReceber = document.getElementById('contasReceber');
let subsReport = document.getElementsByClassName('reportSubs');

class Transicoes {

// Interactions Mobiles:
    static menuHeaderMobile() {
        for (const lists of listUl) {
            if (lists.style.display === 'none') {
                lists.style.display = 'flex';
            }
            else {
                lists.style.display = 'none';
            }
        }
    }

    
    static menuHeaderLoadMobile() {
        for (const lists of listUl) {
            if (lists.style.display === 'flex') {
                lists.style.display = 'none';
            }
        }
    }

// Screen Width Validation: 
    static screenTypeRecognition() {
        if (window.innerWidth <= 601) {
            Transicoes.menuHeaderLoadMobile();
            navMenuLateral.style.display = 'none';
        }
        else {
            for (const lists of listUl) {
                lists.style.display = 'flex';
                navMenuLateral.style.display = 'flex';
            }
        }
    }

// Menu Burguer Interaciton: 
    static interactionMenuBurguerMobile() {
        for (const lists of listUl) {
            if (lists.style.display === 'none') {
                lists.style.display = 'block';
            }
            else {
                lists.style.display = 'none';
            }
        }
    }

    static interactionMenuBurguerDesktop() {
        if (navMenuLateral.classList.contains('fora')) {
            navMenuLateral.classList.add('dentro');
            navMenuLateral.classList.remove('fora');
        }
        else {
            navMenuLateral.classList.add('fora');
            navMenuLateral.classList.remove('dentro');
        }
    }

// List options Screen Sobre and Screen Primary: 
    static abasSobreAndMainScreen() {
        if (sectionTelaSobreNos.style.display === 'none') {
            sectionTelaSobreNos.style.display = 'flex';
            sectionTelaApresentacao.style.display = 'none';
            listLiTwo.innerHTML = 'Voltar';
            console.log('ta funcionando1');

        }
        else {
            sectionTelaSobreNos.style.display = 'none';
            sectionTelaApresentacao.style.display = 'flex';
            listLiTwo.innerHTML = 'Sobre Nos';
            console.log('ta funcionando2');
        }
    }

// redirections
    static redirectionAccount() {
        window.location.assign('https://leonardohenriquedc.github.io/projeto-systemFinance/telaLogin/loginTela.html.html');
    }

    static redirectionContact() {
        window.location.href = 'https://wa.me/+5592992345446';
        console.log('ta funcionando');
    }
    
}

// relatorios
class Relatorios extends Transicoes {


    // front box interaction: 
    static returnPageMain() {
        sectionFrenteCaixa.style.display = 'none';
        sectionTelaApresentacao.style.display = 'flex';
    }

    static frenteCaixa() {
        if (sectionTelaApresentacao.style.display !== 'flex') {
            alert('Volte para a tela principal');
        }
        else {
            if (sectionFrenteCaixa.style.display === 'none') {
                sectionFrenteCaixa.style.display = 'flex';
                sectionTelaApresentacao.style.display = 'none';
                listLiThree.innerHTML = 'voltar';
                listLiThree.style.display = 'block';
            }
        }
    }

    // Reports interactions:
    static returnPageMainReports() {
        
    }
    
    static reportsInteraction() {
    
    }
    
}

// Menu Burguer Validation:
function validationTypeMenuBurguer() {
    if (window.innerWidth <= 600) {
        Transicoes.interactionMenuBurguerMobile();
    }
    else {
        Transicoes.interactionMenuBurguerDesktop();
    }
}

window.addEventListener('resize', Transicoes.screenTypeRecognition);
window.addEventListener('load', Transicoes.screenTypeRecognition);

listLiOne.addEventListener('click', Transicoes.abasSobreAndMainScreen);
listLiTwo.addEventListener('click', Transicoes.abasSobreAndMainScreen);
listLiThree.addEventListener('click', Relatorios.returnPageMain)

contato.addEventListener('click', Transicoes.redirectionContact);

navButtonFrenteCaixa.addEventListener('click', Relatorios.frenteCaixa);

for (const screensLogin of screenLogin) {
    screensLogin.addEventListener('click', Transicoes.redirectionAccount)
}

for (const menusBurger of menuBurger) {
    menusBurger.addEventListener('click', validationTypeMenuBurguer);
}