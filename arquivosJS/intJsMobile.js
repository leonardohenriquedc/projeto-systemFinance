let mobileMenuBurger = document.getElementsByClassName("MobileMenuBurguer");
let listUl = document.getElementsByClassName("list");

let listLiOne = document.getElementById('SobreNosTelaInical')
let listLiTwo = document.querySelector("#LiTwo")
let sectionTelaApresentacao = document.getElementById('telaApresentacao')
let sectionTelaSobreNos = document.getElementById('telaSobreNos')

// Abertura Menu
    function menu() {
        for(lists of listUl){
            if (lists.style.display === 'none') {
                lists.style.display = 'block'
            }
            else {
                lists.style.display = 'none'
            }
       }
        console.log('ta funcionando')
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